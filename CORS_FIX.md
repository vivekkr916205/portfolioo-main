# 🔧 URGENT FIX - CORS Configuration

## ⚠️ Your Backend CORS Must Be Updated

The backend is blocking requests from your Vercel domain. Follow these steps:

### **Step 1: Update CORS in Render Dashboard**

1. Go to: https://dashboard.render.com
2. Click on **vivek-portfolio-api** service
3. Click **Environment** tab on the left
4. Find the **CORS_ORIGINS** variable
5. Click **Edit**
6. Change the value to:
   ```
   https://vivekkr-crafts.vercel.app,http://localhost:3000
   ```
7. Click **Save Changes**
8. Wait 2-3 minutes for automatic redeployment

### **Step 2: Verify Backend is Running**

After deployment completes, test these URLs:

**Root:**
```
https://vivek-portfolio-api.onrender.com/
```

**API Health:**
```
https://vivek-portfolio-api.onrender.com/api/
```

**Status Endpoint:**
```
https://vivek-portfolio-api.onrender.com/api/status
```

All should return JSON responses.

### **Step 3: Test Contact Form Again**

1. Go to https://vivekkr-crafts.vercel.app/
2. Open Browser Console (F12) → **Console** tab
3. Fill and submit contact form
4. Check for:
   - ✅ No CORS errors
   - ✅ Status 200 in Network tab
   - ✅ Success toast message

---

## 🔍 Troubleshooting

### If CORS error persists:

**Option A - Allow All Origins (Quick Fix):**
Set `CORS_ORIGINS` to just `*` in Render (allows all domains)

**Option B - Check Exact URL:**
Make sure your Vercel URL is EXACTLY:
- `https://vivekkr-crafts.vercel.app` (no trailing slash)
- No http:// only https://

### If 400 error persists:

Check what data is being sent:
1. Open Browser Console (F12)
2. Go to **Network** tab
3. Click the failed `/status` request
4. Check **Payload** section
5. Should see: `{"client_name": "Name (email) - Subject"}`

---

## ✅ Expected Behavior After Fix:

1. Submit form → Loading state
2. Backend receives request → Saves to MongoDB
3. Returns success → Toast notification
4. Form resets → Ready for next submission

---

## 📝 What We Fixed in Code:

1. Added `mode: 'cors'` to fetch request
2. Added `credentials: 'omit'` (no cookies needed)
3. Added `Accept: application/json` header
4. Better error logging to see backend error messages

Now you just need to **update CORS_ORIGINS in Render dashboard**!
