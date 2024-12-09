import React from 'react';
import BoardCard from './components/BoardCard';
import SubjectCard from './components/SubjectCard';
import AboutSection from './components/AboutSection';
import './styles/animations.css';
import SubHeader from '../../src/Component/SubHeader/SubHeader';

function Courses2() {
  const boards = [
    { title: 'UP Board', duration: 'Full Syllabus', delay: 'animation-delay-100' },
    { title: 'CBSC Board', duration: 'Full Syllabus', delay: 'animation-delay-200' },
    { title: 'ICSE Board', duration: 'Full Syllabus', delay: 'animation-delay-300' },
  ];

  const subjects = [
    { subject: 'Hindi', level: 'Basic to Advance', delay: 'animation-delay-100' },
    { subject: 'English', level: 'Basic to Advance', delay: 'animation-delay-200' },
    { subject: 'Maths', level: 'Basic to Advance', delay: 'animation-delay-300' },
    { subject: 'Physics', level: 'Basic to Advance', delay: 'animation-delay-400' },
    { subject: 'Chemistry', level: 'Basic to Advance', delay: 'animation-delay-500' },
    { subject: 'Biology', level: 'Basic to Advance', delay: 'animation-delay-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SubHeader />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Available Boards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boards.map((board, index) => (
              <BoardCard key={index} {...board} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Available Subjects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <SubjectCard key={index} {...subject} />
            ))}
          </div>
        </section>

        <AboutSection />
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Shree Ji Tuition. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Courses2;