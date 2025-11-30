import { GoogleGenAI, Type, Schema } from "@google/genai";
import { QuizResult, AnalysisResponse, JobRole } from "../types";
import { QUESTIONS } from "../constants";

export const analyzeResult = async (result: QuizResult): Promise<AnalysisResponse> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey });

  // Construct a prompt summarizing the user's performance
  const roleQuestions = QUESTIONS[result.role];
  const userScore = result.score;
  const maxScore = roleQuestions.length;
  
  let detailedReport = `Role: ${result.role}\n`;
  detailedReport += `User: ${result.userProfile.name} (Age: ${result.userProfile.age})\n`;
  detailedReport += `Score: ${userScore}/${maxScore}\n\n`;
  detailedReport += `Question Breakdown (Incorrect Answers Highlighted):\n`;

  // Filter only incorrect answers or specific categories to save tokens if list is too long,
  // but for 20 questions, sending all is fine for context.
  roleQuestions.forEach(q => {
    const selectedIdx = result.answers[q.id];
    const isCorrect = selectedIdx === q.correctIndex;
    if (!isCorrect) {
      detailedReport += `[WRONG] Q: ${q.text} (Category: ${q.category})\n`;
      detailedReport += `  User Selected: ${q.options[selectedIdx] ?? 'No Answer'}\n`;
      detailedReport += `  Correct Answer: ${q.options[q.correctIndex]}\n`;
    } else {
       detailedReport += `[CORRECT] Category: ${q.category}\n`;
    }
  });

  const prompt = `
    You are a senior technical interviewer and career coach for STEM students in South Korea.
    Analyze the following quiz result for a candidate applying for a ${result.role} position.
    
    Data:
    ${detailedReport}

    Please provide a structured JSON response evaluating their readiness.
    The language MUST be Korean (South Korea).
    The tone should be professional, encouraging, yet critical where necessary.
    
    Calculated Score: ${userScore} out of ${maxScore}. 
    
    Criteria:
    - 0~8: 입문 필요 (Needs Basic Study)
    - 9~14: 주니어 준비 중 (Developing)
    - 15~20: 실무 투입 가능 (Ready for Job)

    Use this score to help determine the 'readinessLevel' and provide specific feedback based on the categories they missed.
  `;

  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      totalScore: { type: Type.NUMBER, description: "The raw score out of 20" },
      readinessLevel: { type: Type.STRING, description: "One of: '학습 필요', '기초 부족', '주니어 레벨', '실무 투입 가능'" },
      strengths: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING },
        description: "List of categories or concepts the user understands well."
      },
      weaknesses: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING },
        description: "List of categories or concepts the user missed or needs work on."
      },
      actionPlan: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING },
        description: "Specific study topics or projects to improve."
      },
      feedbackSummary: { 
        type: Type.STRING, 
        description: "A paragraph summarizing the user's performance and potential."
      }
    },
    required: ["totalScore", "readinessLevel", "strengths", "weaknesses", "actionPlan", "feedbackSummary"]
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.7,
      },
    });

    if (response.text) {
      const parsedData = JSON.parse(response.text) as AnalysisResponse;
      return {
        ...parsedData,
        totalScore: userScore
      };
    } else {
      throw new Error("Empty response from AI");
    }
  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    return {
      totalScore: userScore,
      readinessLevel: "분석 불가",
      strengths: ["데이터 처리 오류로 분석할 수 없습니다."],
      weaknesses: ["네트워크 상태나 API 키를 확인해주세요."],
      actionPlan: ["다시 시도해주세요."],
      feedbackSummary: "일시적인 오류로 상세 리포트를 생성하지 못했습니다. 기본 점수만 확인해주세요."
    };
  }
};