import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Our Tuition Fee</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300">
          <p className="text-gray-600 leading-relaxed mb-6">
            Shree Ji Tuition offers personalized and affordable tutoring services tailored to each student's needs. Our tuition fees are structured to provide quality education at a reasonable cost, ensuring every child gets the attention they deserve.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We offer flexible payment plans, making it easier for parents to invest in their child's academic success. Our experienced teachers are dedicated to helping students excel in their studies, with a focus on strengthening their fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
}