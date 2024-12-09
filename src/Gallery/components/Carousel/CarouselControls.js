import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const CarouselControls = ({
  onPrevious,
  onNext,
  currentIndex,
  totalSlides
}) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 hover:scale-110'
        aria-label='Previous slide'
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={onNext}
        className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 hover:scale-110'
        aria-label='Next slide'
      >
        <ChevronRight size={24} />
      </button>
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </>
  )
}
