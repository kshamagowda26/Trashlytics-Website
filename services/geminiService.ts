
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const identifyWaste = async (imageData: string) => {
  const model = 'gemini-3-flash-preview';
  
  const response = await ai.models.generateContent({
    model,
    contents: {
      parts: [
        {
          inlineData: {
            mimeType: 'image/jpeg',
            data: imageData.split(',')[1],
          },
        },
        {
          text: "Categorize this waste into one of: Wet Waste, Dry Waste, E-Waste, Hazardous, Biomedical, Plastic, C&D, Sewage. Provide a JSON response with category and detailed disposal instructions.",
        },
      ],
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          category: { type: Type.STRING },
          instructions: { type: Type.STRING },
          impact: { type: Type.STRING },
        },
        required: ["category", "instructions", "impact"]
      }
    }
  });

  return JSON.parse(response.text);
};

export const getSmartBinUpdate = async (currentStatus: string) => {
  const model = 'gemini-3-flash-preview';
  const response = await ai.models.generateContent({
    model,
    contents: `Based on a waste bin with status "${currentStatus}", what is a 1-sentence predictive maintenance alert or benefit of using a smart bin?`,
  });
  return response.text;
};
