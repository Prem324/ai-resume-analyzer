const axios = require("axios");

async function analyzeResume(resumeText, jobDescription = "") {
  let prompt = `Analyze this resume and give:
          
1. Resume score out of 100
2. Strengths
3. Missing skills
4. Suggestions for improvement

Resume:
${resumeText}`;

  if (jobDescription) {
    prompt = `Analyze this resume in the context of the following job description and provide:
          
1. ATS Matching Score (0-100%) - How well does the resume match the job?
2. Critical Missing Keywords/Skills - Specifically from the job description
3. Strengths Relative to Job Requirements
4. Recommended Adjustments to Increase Match

Job Description:
${jobDescription}

Resume:
${resumeText}`;
  }

  const apiURL =
    process.env.AI_API_URL || "https://openrouter.ai/api/v1/chat/completions";

  const response = await axios.post(
    apiURL,
    {
      model: "deepseek/deepseek-chat-v3",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.AI_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "AI Resume Analyzer",
      },
    },
  );

  return response.data.choices[0].message.content;
}

module.exports = analyzeResume;
