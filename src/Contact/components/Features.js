import React from 'react';
import { BookOpen, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Expert Curriculum',
    description: 'Carefully crafted courses designed by industry experts'
  },
  {
    icon: Users,
    title: 'Interactive Learning',
    description: 'Engage with peers and mentors in collaborative sessions'
  },
  {
    icon: Trophy,
    title: 'Achievement Tracking',
    description: 'Monitor your progress and earn certificates'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}