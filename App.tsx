import React, { useState, useCallback, useMemo } from 'react';
import { AppStep, JobRole, UserProfile, QuizResult, AnalysisResponse } from './types';
import { QUESTIONS, JOB_DESCRIPTIONS } from './constants';
import { QuizQuestion } from './components/QuizQuestion';
import { ResultView } from './components/ResultView';
import { analyzeResult } from './services/geminiService';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('landing');
  const [userProfile, setUserProfile] = useState<UserProfile>({ name: '', age: 0 });
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({}); // qId -> optionIdx
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // --- Handlers ---

  const handleStart = () => setStep('user-info');

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userProfile.name && userProfile.age > 0) {
      setStep('role-selection');
    }
  };

  const handleRoleSelect = (role: JobRole) => {
    setSelectedRole(role);
    setAnswers({});
    setCurrentQuestionIdx(0);
    setStep('quiz');
  };

  const handleAnswerSelect = (optionIndex: number) => {
    if (!selectedRole) return;
    const questions = QUESTIONS[selectedRole];
    const question = questions[currentQuestionIdx];

    setAnswers(prev => ({ ...prev, [question.id]: optionIndex }));

    // Move to next question or finish
    if (currentQuestionIdx < questions.length - 1) {
      setTimeout(() => setCurrentQuestionIdx(prev => prev + 1), 250); // Slight delay for visual feedback
    } else {
      finishQuiz(optionIndex); // Pass last answer to ensure it's recorded before calculation
    }
  };

  const finishQuiz = useCallback(async (lastAnswerIdx: number) => {
    if (!selectedRole) return;
    
    // Ensure the last state update is captured (React state batching might delay it)
    const questions = QUESTIONS[selectedRole];
    const finalAnswers = { ...answers, [questions[questions.length - 1].id]: lastAnswerIdx };
    
    setStep('analyzing');

    // Calculate Raw Score
    let rawScore = 0;
    questions.forEach(q => {
      if (finalAnswers[q.id] === q.correctIndex) {
        rawScore++;
      }
    });

    const resultPayload: QuizResult = {
      role: selectedRole,
      userProfile,
      answers: finalAnswers,
      score: rawScore
    };

    try {
      const analysisResult = await analyzeResult(resultPayload);
      setAnalysis(analysisResult);
      setStep('results');
    } catch (err) {
      console.error(err);
      setErrorMsg("결과를 분석하는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setStep('landing');
    }
  }, [answers, selectedRole, userProfile]);

  const handleRestart = () => {
    setStep('landing');
    setUserProfile({ name: '', age: 0 });
    setSelectedRole(null);
    setAnswers({});
    setAnalysis(null);
    setCurrentQuestionIdx(0);
    setErrorMsg(null);
  };

  // --- Render Helpers ---

  const renderLanding = () => (
    <div className="text-center space-y-8 animate-fade-in-up">
      <div className="mb-6 inline-block p-4 rounded-full bg-blue-100/50">
        <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
        Zi <span className="text-primary">Advisor</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        대한민국 이공계 취업 준비생을 위한<br className="md:hidden" /> 직무 역량 진단 서비스입니다.<br/>
        간단한 퀴즈를 통해 당신의 현재 준비도와 보완점을 ZI가 분석해드립니다.
      </p>
      <div className="pt-8">
         <button onClick={handleStart} className="px-8 py-4 bg-primary text-white text-xl font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1 active:translate-y-0">
            지금 진단하기
         </button>
      </div>
    </div>
  );

  const renderUserInfo = () => (
    <div className="max-w-md mx-auto animate-fade-in-up">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">지원자 정보 입력</h2>
      <form onSubmit={handleUserInfoSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">이름</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            placeholder="홍길동"
            value={userProfile.name}
            onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">나이 (만나이)</label>
          <input 
            type="number" 
            required
            min="15"
            max="100"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            placeholder="25"
            value={userProfile.age || ''}
            onChange={(e) => setUserProfile({...userProfile, age: parseInt(e.target.value) || 0})}
          />
        </div>
        <button type="submit" className="w-full py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
          다음 단계로
        </button>
      </form>
    </div>
  );

  const renderRoleSelection = () => (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">희망 직무 선택</h2>
      <p className="text-slate-500 text-center mb-10">진단받고 싶은 직무 분야를 선택해주세요.</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {(Object.values(JobRole) as JobRole[]).map((role) => (
          <button 
            key={role}
            onClick={() => handleRoleSelect(role)}
            className="group relative flex flex-col p-6 bg-white rounded-2xl border-2 border-slate-100 hover:border-primary transition-all duration-300 hover:shadow-xl text-left"
          >
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-slate-200 group-hover:bg-primary transition-colors" />
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{role}</h3>
            <p className="text-sm text-slate-600 leading-relaxed opacity-80 group-hover:opacity-100">
              {JOB_DESCRIPTIONS[role]}
            </p>
          </button>
        ))}
      </div>
    </div>
  );

  const renderQuiz = () => {
    if (!selectedRole) return null;
    const questions = QUESTIONS[selectedRole];
    const currentQuestion = questions[currentQuestionIdx];
    const progress = ((currentQuestionIdx + 1) / questions.length) * 100;

    return (
      <div className="w-full max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate-200 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <QuizQuestion 
          question={currentQuestion}
          selectedOptionIndex={answers[currentQuestion.id]}
          onSelectOption={handleAnswerSelect}
          currentNumber={currentQuestionIdx + 1}
          totalCount={questions.length}
        />
      </div>
    );
  };

  const renderAnalyzing = () => (
    <div className="flex flex-col items-center justify-center min-h-[50vh] animate-fade-in text-center">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">결과 분석 중...</h2>
      <p className="text-slate-500">AI가 {userProfile.name}님의 답변을 바탕으로<br/>직무 역량을 분석하고 있습니다.</p>
    </div>
  );

  // --- Main Layout ---

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 selection:bg-indigo-100">
      <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl cursor-pointer" onClick={() => step !== 'analyzing' && handleRestart()}>
            Zi <span className="text-primary">Advisor</span>
          </div>
          {step !== 'landing' && userProfile.name && (
            <div className="text-sm font-medium text-slate-500">
              {userProfile.name} <span className="mx-1">·</span> {selectedRole || '직무 선택 전'}
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-br from-slate-50 to-blue-50/30">
        {errorMsg && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-200 text-sm max-w-md w-full text-center">
                {errorMsg}
                <button onClick={() => setErrorMsg(null)} className="ml-2 underline">닫기</button>
            </div>
        )}
        
        {step === 'landing' && renderLanding()}
        {step === 'user-info' && renderUserInfo()}
        {step === 'role-selection' && renderRoleSelection()}
        {step === 'quiz' && renderQuiz()}
        {step === 'analyzing' && renderAnalyzing()}
        {step === 'results' && analysis && selectedRole && (
          <ResultView 
            analysis={analysis} 
            userProfile={userProfile} 
            role={selectedRole} 
            onRestart={handleRestart} 
          />
        )}
      </main>

      <footer className="w-full bg-white py-6 border-t border-slate-200 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Zi Advisor All rights reserved.</p>
          <p className="mt-1">Powered by Google Gemini API</p>
        </div>
      </footer>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
      `}</style>
    </div>
  );
};

export default App;