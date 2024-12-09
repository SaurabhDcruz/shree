import React from 'react';

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative">
        <div className="absolute -top-4 -left-2 text-6xl text-indigo-200 opacity-50">"</div>
        <p className="relative text-gray-600 italic mb-4">{quote}</p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
            <span className="text-indigo-600 font-semibold">{author[0]}</span>
          </div>
          <span className="font-medium text-gray-800">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;