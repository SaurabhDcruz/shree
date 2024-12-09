import React from 'react';
import { BookOpen, Home, Briefcase, Clock, Calendar, Users, Target } from 'lucide-react';
import ServiceCard from './components/ServiceCard';
import DurationCard from './components/DurationCard';
import TestimonialCard from './components/TestimonialCard';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Educational Excellence</h1>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            Icon={BookOpen}
            title="All Board Coaching"
            description="Navigate your career path with expert guidance"
          />
          <ServiceCard
            Icon={Home}
            title="Home Tuition"
            description="Best teachers available here"
          />
          <ServiceCard
            Icon={Briefcase}
            title="Career Coaching"
            description="Navigate your career path with expert guidance"
          />
        </div>
      </section>

      {/* Classes Duration */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Classes Duration
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DurationCard
              Icon={Clock}
              title="Daily Classes"
              description="Interactive classes"
            />
            <DurationCard
              Icon={Calendar}
              title="Monthly Test Paper"
              description="Tests, Sample Papers & Notes"
            />
            <DurationCard
              Icon={Users}
              title="Doubt Session"
              description="Doubt Solving Sessions"
            />
            <DurationCard
              Icon={Target}
              title="10+ Offline Centre"
              description="100+ Offline centers"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What's Guardianin Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="Shree ji Tuition helped me find clarity in my career and life!"
            author="Shela Prasad"
          />
          <TestimonialCard
            quote="I couldn't have grown my business without their expert coaching!"
            author="Vikash Yadav"
          />
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <p className="text-gray-600 leading-relaxed mb-6">
              Shre ji Tuition offers expert tutoring for students from LKG to 12th grade across CBSE, ICSE, and UP Board. We provide personalized, one-on-one sessions focusing on individual student needs. Our experienced tutors cover all subjects, ensuring comprehensive understanding and academic excellence.
            </p>
            <div className="space-y-2 text-gray-600">
              <p>• Hands-On Learning with specific Example.</p>
              <p>• Expert Teachers For All Class.</p>
              <p>• Comprehensive Curriculum covering from basics to advanced topics.</p>
              <p>• Tailored Support with progressive roadmap.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;