import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure the API key is available
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY is not set in the environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey || "");

export async function POST(request: NextRequest) {
  try {
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server Configuration Error: API key missing." },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const mimeType = file.type;

    // Use Gemini Flash model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are an expert tutor. Please analyze this assignment image carefully. 
Provide a detailed, step-by-step solution to the problems presented in the image. 
If there is text to extract, extract it first. Then provide clear explanations for every step of the solution.
Format your response nicely using Markdown, with appropriate headings, lists, and code blocks if necessary.
Make sure mathematical equations are easy to read.`;

    const imageParts = [
      {
        inlineData: {
          data: buffer.toString("base64"),
          mimeType,
        },
      },
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ solution: text });
  } catch (error) {
    console.error("Error generating solution:", error);
    return NextResponse.json(
      { error: "An error occurred while generating the solution. Please try again." },
      { status: 500 }
    );
  }
}
