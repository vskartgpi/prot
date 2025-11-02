
import { GoogleGenAI, Chat } from "@google/genai";
import { RESUME_DATA } from '../constants';

const formatResumeDataForPrompt = (): string => {
  let text = `Name: ${RESUME_DATA.name}\nTitle: ${RESUME_DATA.title}\nSummary: ${RESUME_DATA.summary}\n`;

  text += "\n--- PROFESSIONAL EXPERIENCE ---\n";
  RESUME_DATA.experience.forEach(exp => {
    text += `\nCompany: ${exp.company}\nRole: ${exp.role}\nPeriod: ${exp.period}\n`;
    exp.description.forEach(desc => {
      text += `- ${desc}\n`;
    });
  });

  text += "\n--- SKILLS ---\n";
  RESUME_DATA.skills.forEach(category => {
    text += `\n${category.title}: ${category.skills.join(', ')}\n`;
  });
  
  text += "\n--- EDUCATION ---\n";
  RESUME_DATA.education.forEach(edu => {
    text += `\nInstitution: ${edu.institution}\nDegree: ${edu.degree}\n`;
  });

  return text;
}

const systemInstruction = `You are an AI assistant for Karthikeya Gattupalli, a Front-end Software Engineer. Your purpose is to answer questions from recruiters and hiring managers based on his resume. Be professional, concise, and helpful. Use only the information provided below. Do not invent any skills, experiences, or details not present in the resume data. If asked about something not on the resume, politely state that the information is not available in the provided data.

Here is Karthikeya's resume data:
${formatResumeDataForPrompt()}`;

export const chatWithAi = async (message: string): Promise<string> => {
  try {
    // FIX: Use process.env.API_KEY as required by the coding guidelines. This also resolves the original error.
    // Access the API key from environment variables
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable not set. Please set it in your deployment provider's settings.");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat: Chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    if (error instanceof Error) {
        return `Sorry, I encountered an error: ${error.message}`;
    }
    return "Sorry, I encountered an unknown error while trying to respond.";
  }
};
