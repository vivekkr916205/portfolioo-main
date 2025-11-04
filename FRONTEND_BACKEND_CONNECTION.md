# Frontend-Backend Connection Setup

## ✅ What We've Done:

1. Created API service (`src/services/api.js`)
2. Connected contact form to backend API
3. Added environment variable for API URL

## 🔧 Configuration Needed:

### **1. Update Backend CORS (In Render Dashboard)**

1. Go to: https://dashboard.render.com
2. Click on `vivek-portfolio-api` service
3. Click "Environment" in left sidebar
4. Find `CORS_ORIGINS` variable
5. Update the value to include your Vercel URL:
   ```
   https://your-vercel-app.vercel.app,http://localhost:3000
   ```
   Example:
   ```
   https://portfolioo-main-xyz.vercel.app,http://localhost:3000
   ```
6. Click "Save Changes"
7. Service will auto-redeploy (2-3 minutes)

### **2. Add Environment Variable in Vercel (Optional)**

If you want to use a different API URL in production:

1. Go to: https://vercel.com/dashboard
2. Select your portfolio project
3. Go to Settings → Environment Variables
4. Add:
   - **Name:** `REACT_APP_API_URL`
   - **Value:** `https://vivek-portfolio-api.onrender.com/api`
   - **Environment:** Production, Preview, Development
5. Click "Save"
6. Redeploy your app

## 🧪 Testing:

### Local Testing:
```bash
cd frontend
npm start
```
Try submitting the contact form - it should send data to your backend!

### Check Backend Received Data:
Open in browser:
```
https://vivek-portfolio-api.onrender.com/api/status
```
You should see your contact form submissions!

## 📝 How It Works:

1. User fills contact form on your site
2. Form submits to: `https://vivek-portfolio-api.onrender.com/api/status`
3. Backend saves to MongoDB
4. User sees success message
5. You can view all submissions at `/api/status` endpoint
