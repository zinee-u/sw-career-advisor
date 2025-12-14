export enum JobRole {
  FRONTEND = 'Front-end',
  BACKEND = 'Back-end',
  EMBEDDED = 'Embedded SW',
  DATA_ANALYST = '데이터 분석가',
}

export interface UserProfile {
  name: string;
  age: number; // Man-age (International age)
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number; // For objective knowledge checks
  category: string;
}

export interface QuizResult {
  role: JobRole;
  userProfile: UserProfile;
  answers: Record<number, number>; // questionId -> selectedOptionIndex
  score: number;
}

export interface AnalysisResponse {
  totalScore: number;
  readinessLevel: string; // e.g., "입문", "주니어", "실무 투입 가능"
  strengths: string[];
  weaknesses: string[];
  actionPlan: string[];
  feedbackSummary: string;
}

export type AppStep = 'landing' | 'user-info' | 'role-selection' | 'quiz' | 'analyzing' | 'results' | 'business-plan';