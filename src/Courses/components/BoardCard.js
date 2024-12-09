import React from 'react';

export default function BoardCard({ title, duration, delay }) {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${delay} opacity-0 animate-fade-in-up`}
    >
      <h3 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h3>
      <p className="text-gray-600">Duration: {duration}</p>
      <div className="mt-4 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform origin-left scale-x-0 animate-scale-in"></div>
    </div>
  );
}