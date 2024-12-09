import React from 'react';

export default function SubjectCard({ subject, level, delay }) {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-6 transform hover:rotate-1 hover:scale-105 transition-all duration-300 ${delay} opacity-0 animate-fade-in-up`}
    >
      <h3 className="text-xl font-semibold text-purple-600 mb-2">{subject}</h3>
      <p className="text-gray-600">{level}</p>
      <div className="mt-4 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform origin-left scale-x-0 animate-scale-in"></div>
    </div>
  );
}