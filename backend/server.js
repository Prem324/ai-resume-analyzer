require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

// Serving uploaded files (if needed to display, though analyzer just extracts text)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const resumeRoutes = require("./routes/resumeRoutes");
app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
  res.send("AI Resume Analyzer API Running");
});

// Use environment port or 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
