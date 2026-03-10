# Deployment Guide: AI Resume Analyzer

Your application is now **Deployment Ready**. I have implemented environment variable support, dynamic API routing, and file system cleanup to ensure professional performance in production.

## 🚀 Deployment Steps

### 1. Backend Deployment (e.g., Render, Heroku, DigitalOcean)
The backend is a Node.js Express server.
- **Root Directory**: `backend/`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**:
  - `AI_API_KEY`: Your OpenRouter / DeepSeek API key.
  - `PORT`: Automatically handled by most hosting providers.
  - `NODE_ENV`: Set to `production`.

### 2. Frontend Deployment (e.g., Vercel, Netlify, Cloudflare Pages)
The frontend is built with Vite and Tailwind CSS.
- **Root Directory**: `frontend/`
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Environment Variables**:
  - `VITE_API_BASE_URL`: **IMPORTANT**. Set this to your deployed backend URL.
    - Example: `https://your-backend-api.onrender.com/api`

## ✅ Readiness Checklist

| Feature | Status | Description |
| :--- | :---: | :--- |
| **Dynamic API** | Ready | Frontend uses `VITE_API_BASE_URL` for production. |
| **System Cleanup** | Ready | Backend now automatically deletes PDF files after analysis to save disk space. |
| **ATS Matcher** | Ready | Full logic for ATS scoring and keyword analysis is implemented. |
| **PDF Reporting** | Ready | Professional, high-contrast print layout is configured. |
| **Security** | Ready | API keys are kept in environment variables, never in codebase. |

## 🛠 Local Production Preview
To test the production build locally:
1. Go to `frontend/`
2. Run `npm run build``
3. Run `npm run preview`
This will serve the optimized bundle exactly as it will appear in production.
