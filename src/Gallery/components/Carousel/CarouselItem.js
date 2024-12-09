import React from 'react'

export const CarouselItem = ({ image, title, description, active }) => {
  return (
    <div
      className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
        active ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img src={image} alt={title} className='w-full h-full object-fill' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'>
        <div className='absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 ease-out'>
          <h2 className='text-4xl font-bold text-white mb-4 animate-fadeIn'>
            {title}
          </h2>
          <p className='text-lg text-gray-200 animate-slideUp'>{description}</p>
        </div>
      </div>
    </div>
  )
}
