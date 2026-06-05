import express from "express";
import cors from "cors";
import fs from "fs";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Load portfolio data
const portfolio = JSON.parse(
  fs.readFileSync("./portfolio.json", "utf8")
);

// Gemini setup
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Health check route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// AI route
app.post("/ask-ai", async (req, res) => {
  try {
    const { question } = req.body;

    const prompt = `
You are Kumar Adarsh's AI Portfolio Assistant.

Answer ONLY using the portfolio information provided below.

If the answer is not available in the portfolio data, reply exactly:

"I don't have information about that in Adarsh's portfolio."

Portfolio Data:
${JSON.stringify(portfolio, null, 2)}

User Question:
${question}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      answer: response.text,
    });

  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      answer: "Something went wrong while generating a response.",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});