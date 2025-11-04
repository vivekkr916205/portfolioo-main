from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime


# Configure logging first
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
try:
    mongo_url = os.environ['MONGO_URL']
    # Add SSL/TLS configuration for MongoDB Atlas
    client = AsyncIOMotorClient(
        mongo_url,
        tls=True,
        tlsAllowInvalidCertificates=False,
        serverSelectionTimeoutMS=5000,
        connectTimeoutMS=10000,
        retryWrites=True
    )
    db = client[os.environ['DB_NAME']]
    logger.info("MongoDB connection initialized")
except Exception as e:
    logger.error(f"MongoDB connection error: {str(e)}")
    raise

# Create the main app without a prefix
app = FastAPI(
    title="Vivek Kumar Portfolio API",
    description="Backend API for portfolio website",
    version="1.0.0"
)

# Add CORS middleware IMMEDIATELY after creating app
cors_origins = os.environ.get('CORS_ORIGINS', '*').split(',')
cors_origins = [origin.strip() for origin in cors_origins]  # Remove any whitespace
logger.info(f"CORS origins configured: {cors_origins}")

app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Root endpoint (welcome page)
@app.get("/")
async def root():
    return {
        "message": "Welcome to Vivek Kumar's Portfolio API",
        "status": "online",
        "version": "1.0.0",
        "docs": "/docs",
        "api_endpoints": {
            "health": "/api/",
            "status": "/api/status"
        }
    }


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    try:
        logger.info(f"Received data: {input}")
        
        # Use model_dump() instead of dict() for Pydantic v2
        status_dict = input.model_dump()
        status_obj = StatusCheck(**status_dict)
        
        logger.info(f"Created status object: {status_obj}")
        
        # Convert to dict for MongoDB
        doc_dict = status_obj.model_dump()
        logger.info(f"Inserting document: {doc_dict}")
        
        # Insert into MongoDB
        result = await db.status_checks.insert_one(doc_dict)
        
        logger.info(f"Status check created with ID: {status_obj.id}")
        return status_obj
    except Exception as e:
        logger.error(f"Error creating status check: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    try:
        status_checks = await db.status_checks.find().to_list(1000)
        return [StatusCheck(**status_check) for status_check in status_checks]
    except Exception as e:
        logger.error(f"Error fetching status checks: {str(e)}")
        raise

# Include the router in the main app
app.include_router(api_router)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
