# Portfolio Backend API

FastAPI backend for the portfolio website.

## Tech Stack
- FastAPI
- MongoDB (Motor async driver)
- Python 3.11+

## Local Development

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Create `.env` file (see `.env.example`):
```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB credentials

4. Run the server:
```bash
uvicorn server:app --reload --port 8000
```

## Deployment on Render.com

1. Push code to GitHub
2. Go to https://render.com
3. Create new Web Service
4. Connect GitHub repository
5. Configure:
   - **Root Directory:** `backend`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn server:app --host 0.0.0.0 --port $PORT`
6. Add environment variables from `.env.example`
7. Deploy!

## Environment Variables

- `MONGO_URL` - MongoDB connection string
- `DB_NAME` - Database name
- `CORS_ORIGINS` - Comma-separated list of allowed origins (your Vercel frontend URL)

## API Endpoints

- `GET /api/` - Health check
- `POST /api/status` - Create status check
- `GET /api/status` - Get all status checks
