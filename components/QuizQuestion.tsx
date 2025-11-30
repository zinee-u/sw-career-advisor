import React from 'react';
import { Question } from '../types';

interface QuizQuestionProps {
  question: Question;
  selectedOptionIndex?: number;
  onSelectOption: (optionIndex: number) => void;
  onPrevious?: () => void;
  currentNumber: number;
  totalCount: number;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedOptionIndex,
  onSelectOption,
  onPrevious,
  currentNumber,
  totalCount,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 animate-fade-in relative">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-bold text-primary tracking-wide bg-blue-50 px-3 py-1 rounded-full">
          Q{currentNumber} / {totalCount}
        </span>
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
          {question.category}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-snug">
        {question.text}
      </h3>

      <div className="space-y-3">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onSelectOption(idx)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center group ${
              selectedOptionIndex === idx
                ? 'border-primary bg-blue-50/50 shadow-md ring-1 ring-primary'
                : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-colors ${
               selectedOptionIndex === idx ? 'border-primary bg-primary' : 'border-slate-300 group-hover:border-slate-400'
            }`}>
              {selectedOptionIndex === idx && (
                <div className="w-2.5 h-2.5 bg-white rounded-full" />
              )}
            </div>
            <span className={`text-base md:text-lg ${selectedOptionIndex === idx ? 'font-semibold text-primary' : 'text-slate-600'}`}>
              {option}
            </span>
          </button>
        ))}
      </div>

      {onPrevious && (
        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-start">
          <button
            onClick={onPrevious}
            className="text-slate-500 hover:text-slate-900 font-medium flex items-center px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            이전 문제
          </button>
        </div>
      )}
    </div>
  );
};