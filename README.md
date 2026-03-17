# 🚀 AI Resume Analyzer & ATS Matcher

> **Your AI-Powered Career Companion** – Analyze your resume with cutting-edge AI, get actionable feedback, and master ATS compatibility scores to land your dream job.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage Guide](#usage-guide)
- [Project Architecture](#project-architecture)
- [Security & Privacy](#security--privacy)
- [Troubleshooting](#troubleshooting)

---

## About

**AI Resume Analyzer** is a full-stack web application that combines React 19, Node.js, and DeepSeek AI to revolutionize how job seekers optimize their resumes. Whether you're preparing for interviews, improving your resume quality, or matching against specific job descriptions, this tool provides intelligent, data-driven insights powered by advanced AI.

The platform is designed with **security and privacy** at its core — resumes are processed in-memory and automatically purged after analysis, ensuring your sensitive career information remains confidential.

---

## ✨ Features

### 🎯 Core Capabilities

- **📊 Deep AI Analysis**
  - Powered by DeepSeek-R1 via OpenRouter API
  - Identifies resume strengths and weaknesses
  - Highlights missing skills and certifications
  - Provides actionable career improvement recommendations

- **🎲 ATS Compatibility Scoring**
  - Paste any job description to compare
  - Real-time match percentage calculation
  - Identifies missing keywords and required skills
  - Prioritized suggestions for keyword optimization

- **📄 Professional PDF Export**
  - Generate high-contrast, audit-ready reports
  - Print-optimized formatting
  - Shareable analysis documents
  - One-click download functionality

- **🎨 Premium User Experience**
  - Dark-themed, modern dashboard
  - Responsive design (mobile, tablet, desktop)
  - Smooth animations and transitions
  - Intuitive, zero-learning-curve interface

- **🔒 Security & Privacy First**
  - Resumes processed in-memory only
  - Automatic file deletion post-analysis
  - No permanent storage of user data
  - CORS-protected API endpoints

---

## 🛠️ Tech Stack

### Frontend

| Technology       | Version | Purpose                                   |
| ---------------- | ------- | ----------------------------------------- |
| **React**        | 19.2.0  | UI framework & state management           |
| **Vite**         | 7.3.1   | Lightning-fast build tool & dev server    |
| **Tailwind CSS** | 4.2.1   | Utility-first styling & responsive design |
| **Axios**        | 1.13.6  | HTTP client for API communication         |
| **ESLint**       | 9.39.1  | Code quality & linting                    |

### Backend

| Technology     | Version | Purpose                            |
| -------------- | ------- | ---------------------------------- |
| **Node.js**    | 18+     | JavaScript runtime                 |
| **Express.js** | 5.2.1   | Web framework & routing            |
| **Multer**     | 2.1.1   | File upload handling               |
| **PDF-Parse**  | 1.1.1   | PDF text extraction                |
| **Axios**      | 1.13.6  | HTTP requests to AI API            |
| **CORS**       | 2.8.6   | Cross-origin resource sharing      |
| **Dotenv**     | 17.3.1  | Environment variable management    |
| **Nodemon**    | 3.1.14  | Auto-restart on file changes (dev) |

### AI & External Services

| Service            | Purpose                          |
| ------------------ | -------------------------------- |
| **DeepSeek-R1**    | Advanced LLM for resume analysis |
| **OpenRouter API** | Unified AI model access          |

---

## 📁 Project Structure

```
ai-resume-analyzer/
├── 📄 README.md                    # This file
├── 📦 backend/                     # Node.js Express server
│   ├── 📄 server.js               # Express app initialization & routes
│   ├── 📄 package.json            # Backend dependencies
│   ├── 📁 controllers/
│   │   └── 📄 resumeController.js # Upload & analysis logic
│   ├── 📁 routes/
│   │   └── 📄 resumeRoutes.js     # API route definitions
│   ├── 📁 utils/
│   │   ├── 📄 aiAnalyzer.js       # DeepSeek AI integration
│   │   ├── 📄 pdfExtractor.js     # PDF text extraction
│   │   └── � upload.js           # Multer configuration
│   └── 📁 uploads/                # Temporary file storage
│
└── 🎨 frontend/                    # React + Vite application
    ├── 📄 package.json            # Frontend dependencies
    ├── 📄 vite.config.js          # Vite configuration
    ├── 📄 index.html              # HTML entry point
    ├── 📄 eslint.config.js        # ESLint rules
    ├── 📁 src/
    │   ├── 📄 main.jsx            # React app bootstrap
    │   ├── 📄 App.jsx             # Root component
    │   ├── 📄 App.css             # Global styles
    │   ├── 📄 index.css           # Base styles
    │   ├── 📁 api/
    │   │   └── 📄 api.js          # Axios API client
    │   ├── 📁 components/
    │   │   ├── 📄 Navbar.jsx      # Navigation header
    │   │   ├── 📄 UploadResume.jsx # File upload form
    │   │   ├── 📄 Result.jsx      # Analysis results display
    │   │   └── 📄 SplashScreen.jsx # Loading screen
    │   └── 📁 assets/             # Images & static files
    └── 📁 public/                 # Static assets
```

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **npm** v9 or higher (comes with Node.js)
- **Git** (for cloning the repository)
- **OpenRouter API Key** ([Sign up here](https://openrouter.ai/)) — Free tier available!

### Verify Installation

```bash
node --version      # Should show v18+
npm --version       # Should show v9+
git --version       # Should show git version
```

---

## Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/Prem324/ai-resume-analyzer.git
cd ai-resume-analyzer
```

### Step 2: Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
# AI Configuration
AI_API_KEY=your_openrouter_api_key_here

# Server Configuration
PORT=5000
NODE_ENV=development
```

**Getting your OpenRouter API Key:**

1. Visit [OpenRouter.ai](https://openrouter.ai/)
2. Sign up for a free account
3. Navigate to your API Keys dashboard
4. Create a new API key and copy it
5. Paste it in the `.env` file

### Step 3: Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## Running the Application

### Development Mode (Local Testing)

#### Terminal 1 - Start Backend Server

```bash
cd backend
npm run dev
```

Expected output:

```
Server running on port 5000
API Base URL: /api/resume
```

#### Terminal 2 - Start Frontend Dev Server

```bash
cd frontend
npm run dev
```

Expected output:

```
  VITE v7.3.1  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

#### Terminal 3 - Open Application

Visit **[http://localhost:5173](http://localhost:5173)** in your browser.

### Production Build

```bash
# Frontend
cd frontend
npm run build
npm run preview

# This creates an optimized production build in the `dist/` folder
```

---

## Environment Variables

### Backend (.env)

```env
# Required: Your OpenRouter API key for AI analysis
AI_API_KEY=sk_live_xxxxxxxxxxxx

# Optional: Server port (default: 5000)
PORT=5000

# Optional: Node environment
NODE_ENV=development
```

### Frontend (.env)

```env
# API base URL for backend communication
VITE_API_BASE_URL=http://localhost:5000/api

# For production deployment:
# VITE_API_BASE_URL=https://your-deployed-backend-url/api
```

---

## API Endpoints

### Health Check

```http
GET /api/health
```

**Response:** `{ "status": "ok", "message": "Backend is awake" }`

### Resume Analysis

```http
POST /api/resume/upload
```

**Request (multipart/form-data):**

```javascript
{
  "file": "<PDF_FILE>",           // Required: PDF resume file
  "jobDescription": "<TEXT>"      // Optional: Job description for ATS matching
}
```

**Response:**

```javascript
{
  "message": "Resume analyzed successfully",
  "analysis": {
    "strengths": ["..."],
    "weaknesses": ["..."],
    "missingSkills": ["..."],
    "atsScore": 85,
    "recommendations": ["..."]
  }
}
```

---

## Usage Guide

### 1. **Basic Resume Audit**

- Navigate to the app homepage
- Click "Choose Resume" and select your PDF file
- Click "Analyze Audit"
- Review AI-generated feedback on strengths, weaknesses, and improvement areas

### 2. **ATS Matching**

- Paste a job description in the provided text area
- Upload your resume
- View your match percentage and see which keywords are missing
- Use suggestions to optimize your resume

### 3. **Export Results**

- After analysis, click "Generate PDF Report"
- Download the professional report to share with mentors or save for records
- PDF is print-optimized for physical copies

### 4. **Print Friendly**

- Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac) to print results
- Results are automatically formatted for printing

---

## Project Architecture

### Request Flow Diagram

```
Frontend (React)
    ↓
    ├─→ User uploads resume (PDF)
    └─→ Axios POST request to Backend

Backend (Express)
    ↓
    ├─→ Multer middleware handles file upload
    ├─→ PDF Parser extracts text from file
    ├─→ Resume Controller processes extraction
    └─→ AI Analyzer sends text to OpenRouter API

AI Engine (DeepSeek-R1)
    ↓
    └─→ Analyzes resume & generates insights

Backend Response
    ↓
    └─→ Returns JSON with analysis results

Frontend Display
    ↓
    └─→ Result component renders analysis beautifully
    └─→ User can export to PDF or print
```

### Component Hierarchy

```
App.jsx (Root)
├── Navbar.jsx (Header)
├── SplashScreen.jsx (Loading)
├── UploadResume.jsx (File upload form)
└── Result.jsx (Analysis display & export)
```

---

## Security & Privacy

✅ **Your data is safe with us:**

- **No Permanent Storage**: Resumes are processed in-memory only
- **Auto-Delete**: Files are automatically deleted after analysis
- **CORS Protected**: API endpoints secured against unauthorized access
- **Environment Variables**: Sensitive keys never hardcoded
- **Zero Tracking**: No cookies, no analytics, no data collection
- **HTTPS Ready**: Production-ready for secure deployments

---

## Troubleshooting

### Issue: "Backend connection failed"

**Solution:**

- Ensure backend is running: `npm run dev` in the `backend/` folder
- Check that port 5000 is not in use: `netstat -ano | findstr :5000` (Windows)
- Verify `VITE_API_BASE_URL` in frontend `.env` matches backend URL

### Issue: "AI API Key invalid"

**Solution:**

- Verify API key in `backend/.env` is correct
- Check that the key hasn't expired in your OpenRouter dashboard
- Ensure the key is for DeepSeek-R1 model

### Issue: "PDF upload failed"

**Solution:**

- Verify file is a valid PDF format
- Check file size (should be < 25MB)
- Ensure `backend/uploads/` folder exists and is writable

### Issue: "CORS error in browser console"

**Solution:**

- Backend CORS is enabled by default for all origins
- If issues persist, check backend is running on correct port
- Verify frontend `.env` has correct `VITE_API_BASE_URL`

### Issue: "Vite dev server won't start"

**Solution:**

```bash
# Clear node_modules and reinstall
cd frontend
rm -r node_modules package-lock.json
npm install
npm run dev
```
