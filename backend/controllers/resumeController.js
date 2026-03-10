const fs = require("fs");
const extractText = require("../utils/pdfExtractor");
const analyzeResume = require("../utils/aiAnalyzer");

exports.uploadResume = async (req, res) => {
  try {
    const filePath = req.file.path;
    const { jobDescription } = req.body;

    const resumeText = await extractText(filePath);

    // After extraction, delete the local file to keep the server clean
    fs.unlink(filePath, (err) => {
      if (err) console.error("Error deleting file:", err);
    });

    const aiResult = await analyzeResume(resumeText, jobDescription);

    res.json({
      message: "Resume analyzed successfully",
      analysis: aiResult,
    });
  } catch (error) {
    console.error("AI ERROR:", error.response?.data || error.message);

    // Try to cleanup file if error occurs
    if (req.file && req.file.path) {
      fs.unlink(req.file.path, () => { });
    }

    res.status(500).json({
      error: "Error analyzing resume",
    });
  }
};
