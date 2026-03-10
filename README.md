# 🚀 AI Resume Analyzer & ATS Matcher

A premium, modern web application that leverages Advanced AI (DeepSeek) to analyze resumes, provide strategic career feedback, and calculate ATS compatibility scores based on specific job descriptions.

![AI Resume Analyzer Mockup](https://raw.githubusercontent.com/antigravity-ai/assets/main/mockup-placeholder.png)

## ✨ Features

-   **Deep AI Analysis**: Get detailed feedback on strengths, weaknesses, and missing skills using DeepSeek-R1.
-   **ATS Matching**: Paste a job description to see how well your resume matches and identify missing keywords.
-   **Premium UI/UX**: A sleek, dark-themed dashboard built with Tailwind CSS v4 and React.
-   **Professional PDF Reports**: Generate and download high-contrast, audit-ready PDF reports for sharing or printing.
-   **Secure & Private**: Uploaded resumes are processed in-memory and automatically deleted from the server after analysis.

## 🛠️ Technology Stack

-   **Frontend**: React 19, Vite, Tailwind CSS v4, Axios.
-   **Backend**: Node.js, Express, Multer (File Handling), PDF-Parse.
-   **AI Engine**: DeepSeek (via OpenRouter API).

## 🚦 Getting Started

### Prerequisites
-   Node.js (v18 or higher)
-   An API Key from [OpenRouter](https://openrouter.ai/)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <your-repo-url>
    cd ai-resume-analyzer
    ```

2.  **Setup Backend**:
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory:
    ```env
    AI_API_KEY=your_openrouter_api_key_here
    PORT=5000
    ```

3.  **Setup Frontend**:
    ```bash
    cd ../frontend
    npm install
    ```
    Create a `.env` file in the `frontend` directory:
    ```env
    VITE_API_BASE_URL=http://localhost:5000/api
    ```

### Running Locally

1.  **Start Backend**:
    ```bash
    cd backend
    npm run dev
    ```

2.  **Start Frontend**:
    ```bash
    cd frontend
    npm run dev
    ```

3.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 Usage

1.  **Basic Audit**: Upload your resume (PDF) and click "Analyze Audit" to get general feedback.
2.  **ATS Match**: Paste a Job Description into the designated area, then upload your resume to see your match percentage and missing keywords.
3.  **Export**: Click "Generate PDF Report" to get a clean, professional document of your results.

## 🌐 Deployment

Refer to the [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on hosting the application on platforms like Render, Vercel, or DigitalOcean.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
