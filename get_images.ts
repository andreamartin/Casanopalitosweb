import { GoogleGenAI } from "@google/genai";

async function getAirbnbImages() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: "Find the direct image URLs for the Airbnb listing https://www.airbnb.co.za/rooms/36112909. I need at least 5 high-quality URLs from a0.muscache.com.",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  console.log(response.text);
}

getAirbnbImages();
