import { useState, useRef } from "react";
import API from "../api/api";

function UploadResume({ setResult }) {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", jobDescription);

    try {
      setLoading(true);
      const res = await API.post("/resume/upload", formData);
      setResult(res.data.analysis);
    } catch (err) {
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-8">
      <div>
        <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
          1. Upload Resume (PDF)
        </label>
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`w-full h-32 md:h-48 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${dragging
            ? "border-blue-500 bg-blue-500/10"
            : file
              ? "border-green-500 bg-green-500/5"
              : "border-slate-600 hover:border-slate-500 hover:bg-slate-700/30"
            }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="application/pdf"
            className="hidden"
          />

          <div className="p-2 md:p-3 bg-slate-700/50 rounded-full mb-2 md:mb-3">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>

          <p className="text-sm md:text-base font-medium text-white mb-1 px-4 text-center truncate w-full">
            {file ? file.name : "Click to upload or drag & drop"}
          </p>
          <p className="text-[9px] md:text-[10px] text-slate-500 uppercase font-bold tracking-tighter">PDF only (max 10MB)</p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
          2. Target Job Description (Optional for ATS Matching)
        </label>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the job requirements here to see how well your resume matches..."
          className="w-full h-40 bg-slate-900/50 border border-slate-700/50 rounded-2xl p-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none font-sans text-sm"
        />
      </div>

      <div className="flex justify-center pt-4">
        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className={`w-full max-w-sm py-4 px-6 rounded-2xl font-black text-white uppercase tracking-widest transition-all duration-300 transform active:scale-95 ${!file || loading
            ? "bg-slate-800 cursor-not-allowed opacity-50 text-slate-500"
            : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:brightness-110 shadow-xl shadow-blue-900/20 active:shadow-none"
            }`}
        >
          {loading ? (
            <span className="flex items-center justify-center space-x-2">
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Running Analysis...</span>
            </span>
          ) : (
            "Analyze Audit"
          )}
        </button>
      </div>
    </div>
  );
}

export default UploadResume;
