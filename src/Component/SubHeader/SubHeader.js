import React from 'react'
import { GraduationCap } from 'lucide-react'

export default function SubHeader ({ icon, title, discription }) {
  return (
    <header className='bg-gradient-to-r from-blue-400 to-purple-600 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-center space-x-2'>
          {icon ? icon : <GraduationCap className='w-10 h-10 animate-bounce' />}
          <h1 className='text-4xl font-bold tracking-tight'>
            {title ? title : 'Shree Ji Tuition'}
          </h1>
        </div>
        <p className='text-center mt-4 text-lg text-indigo-100 max-w-2xl mx-auto'>
          {discription
            ? discription
            : 'Empowering students with personalized learning experiences'}
        </p>
      </div>
    </header>
  )
}
