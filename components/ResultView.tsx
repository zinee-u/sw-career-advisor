import React from 'react';
import { AnalysisResponse, UserProfile, JobRole } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

interface ResultViewProps {
  analysis: AnalysisResponse;
  userProfile: UserProfile;
  role: JobRole;
  onRestart: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ analysis, userProfile, role, onRestart }) => {
  
  const scoreData = [
    { name: 'Score', value: analysis.totalScore },
    { name: 'Remaining', value: 10 - analysis.totalScore },
  ];
  const COLORS = ['#3b82f6', '#e2e8f0'];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up pb-12">
      
      {/* Header Section */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
          진단 결과 리포트
        </h1>
        <p className="text-slate-500 text-lg">
          <span className="font-semibold text-slate-800">{userProfile.name}</span>님 ({userProfile.age}세)의 <span className="text-primary font-bold">{role}</span> 직무 준비도
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="relative w-48 h-48">
             <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={scoreData}
                  innerRadius={60}
                  outerRadius={80}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                >
                  {scoreData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-slate-800">{analysis.totalScore * 10}</span>
              <span className="text-xs text-slate-400 uppercase font-semibold">Ready Score</span>
            </div>
          </div>
          
          <div className="text-left space-y-2">
            <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider">직무 이해도 레벨</div>
            <div className="text-4xl font-bold text-indigo-600">{analysis.readinessLevel}</div>
            <p className="text-slate-600 max-w-xs text-sm leading-relaxed mt-2">
              총 10문제 중 {analysis.totalScore}문제를 맞히셨습니다.
            </p>
          </div>
        </div>
      </div>

      {/* Feedback Summary */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          종합 피드백
        </h3>
        <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
          {analysis.feedbackSummary}
        </p>
      </div>

      {/* Grid for Strengths & Weaknesses */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50/50 rounded-2xl p-6 border border-green-100">
          <h3 className="text-green-800 font-bold mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            강점 (Strengths)
          </h3>
          <ul className="space-y-2">
            {analysis.strengths.map((s, i) => (
              <li key={i} className="flex items-start text-green-700 text-sm">
                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
          <h3 className="text-red-800 font-bold mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            보완할 점 (Weaknesses)
          </h3>
          <ul className="space-y-2">
            {analysis.weaknesses.map((w, i) => (
              <li key={i} className="flex items-start text-red-700 text-sm">
                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Plan */}
      <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
        <h3 className="text-lg font-bold text-indigo-900 mb-6">🚀 학습 로드맵 제안</h3>
        <div className="space-y-4">
          {analysis.actionPlan.map((plan, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100 flex items-center">
              <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold text-sm mr-4">
                {i + 1}
              </span>
              <span className="text-slate-700 font-medium">{plan}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <button
          onClick={onRestart}
          className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-transform transform hover:-translate-y-1 active:translate-y-0"
        >
          처음으로 돌아가기
        </button>
      </div>
    </div>
  );
};