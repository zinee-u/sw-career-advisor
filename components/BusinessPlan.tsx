import React from 'react';

interface BusinessPlanProps {
  onBack: () => void;
}

export const BusinessPlan: React.FC<BusinessPlanProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto w-full animate-fade-in-up pb-12">
      {/* Header / Nav */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-extrabold text-slate-900">
          사업계획서 <span className="text-slate-400 font-normal text-lg ml-2">Business Plan</span>
        </h2>
        <button 
          onClick={onBack}
          className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium shadow-sm"
        >
          돌아가기
        </button>
      </div>

      <div className="space-y-12">
        
        {/* 1. Executive Summary */}
        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
          </div>
          <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider">01. Service Overview</h3>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Zi Advisor <br/>
            <span className="text-slate-500 text-2xl md:text-3xl">AI 기반 이공계 직무 역량 진단 솔루션</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Zi Advisor는 대한민국 이공계 취업 준비생들이 자신의 직무 준비 상태를 객관적으로 파악하고,
            AI 분석을 통해 개인화된 학습 로드맵을 제공받을 수 있는 웹 플랫폼입니다.
            단순한 지식 테스트를 넘어, 실제 직무 면접 상황에 대비할 수 있는 인사이트를 제공합니다.
          </p>
        </section>

        {/* 2. Market & Target */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-lg">
             <h3 className="text-lg font-bold text-blue-400 mb-4 uppercase tracking-wider">02. Target Audience</h3>
             <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-3 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">이공계 대학생 및 취준생</h4>
                    <p className="text-slate-400 text-sm">전공 지식은 있으나 실무 연결 고리가 부족한 3~4학년 및 졸업예정자</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-3 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">부트캠프 수료생</h4>
                    <p className="text-slate-400 text-sm">비전공자 출신으로 기술 면접 준비에 막막함을 느끼는 개발자 지망생</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200">
             <h3 className="text-lg font-bold text-indigo-500 mb-4 uppercase tracking-wider">03. Needs</h3>
             <ul className="space-y-4">
               <li className="flex items-center text-slate-700 font-medium">
                 <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                 내 실력이 어느 정도인지 객관적 지표 필요
               </li>
               <li className="flex items-center text-slate-700 font-medium">
                 <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                 면접에서 자주 나오는 CS 지식 점검
               </li>
               <li className="flex items-center text-slate-700 font-medium">
                 <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                 부족한 부분을 채울 수 있는 구체적 학습 가이드
               </li>
               <li className="flex items-center text-slate-700 font-medium">
                 <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                 PDF 리포트를 통한 포트폴리오 활용
               </li>
             </ul>
          </div>
        </section>

        {/* 3. Business Model */}
        <section className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 text-center mb-10">
            <h3 className="text-xl font-bold text-indigo-200 mb-2 uppercase tracking-wider">04. Business Model</h3>
            <h2 className="text-3xl font-extrabold">Freemium Strategy</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {/* Free Tier */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold">Basic (Free)</h4>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase">Ad-Supported</span>
              </div>
              <ul className="space-y-3 mb-8 text-indigo-100">
                <li className="flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>전 직무 퀴즈 무제한 응시</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>기본 결과 리포트 제공</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>PDF 다운로드 (워터마크 포함)</li>
              </ul>
              <div className="pt-6 border-t border-white/20">
                <p className="text-sm font-semibold text-indigo-200 mb-1">수익 모델</p>
                <p className="text-lg font-bold">Google AdSense 광고 노출</p>
              </div>
            </div>

            {/* Premium Tier */}
            <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl transform md:-translate-y-4 border-4 border-yellow-400">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold text-indigo-900">Premium</h4>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase">Subscription</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-600">
                <li className="flex items-center font-medium"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>광고 제거 (Ad-Free)</li>
                <li className="flex items-center font-medium"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>심층 AI 분석 및 상세 피드백</li>
                <li className="flex items-center font-medium"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>맞춤형 모의 면접 질문 생성</li>
                <li className="flex items-center font-medium"><svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>학습 자료 추천 (강의, 아티클)</li>
              </ul>
              <div className="pt-6 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-400 mb-1">수익 모델</p>
                <p className="text-2xl font-bold text-indigo-600">월 4,900원 <span className="text-base font-normal text-slate-500">/ 구독</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Roadmap */}
        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-400 mb-8 uppercase tracking-wider">05. Roadmap</h3>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-indigo-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Phase 1: MVP Launch</div>
                  <time className="font-caveat font-medium text-indigo-500">Current</time>
                </div>
                <div className="text-slate-500 text-sm">기본 4개 직무 퀴즈 및 AI 결과 분석 기능 구현. PDF 내보내기 지원.</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Phase 2: Monetization</div>
                  <time className="font-caveat font-medium text-slate-400">Q3 2024</time>
                </div>
                <div className="text-slate-500 text-sm">구글 애드센스 연동 및 프리미엄 구독 결제 시스템(Stripe/Toss) 구축.</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Phase 3: Live Interview</div>
                  <time className="font-caveat font-medium text-slate-400">Q4 2024</time>
                </div>
                <div className="text-slate-500 text-sm">Gemini Live API를 활용한 실시간 음성 기술 면접 기능 베타 오픈.</div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};