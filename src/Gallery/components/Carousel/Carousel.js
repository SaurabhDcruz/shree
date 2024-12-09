import React, { useState, useEffect, useCallback } from 'react';
import { CarouselItem } from './CarouselItem';
import { CarouselControls } from './CarouselControls';

const slides = [
  {
    image: './assets/img1.jpg',
    title: 'Majestic Mountains',
    description: 'Discover the breathtaking beauty of nature\'s greatest peaks.',
  },
  {
    image: './assets/img2.jpg',
    title: 'Serene Beaches',
    description: 'Experience the calming waves and golden sands of paradise.',
  },
  {
    image: './assets/img3.jpg',
    title: 'Urban Adventures',
    description: 'Explore the vibrant energy of city life and architecture.',
  },
  {
    image: './assets/img4.jpg',
    title: 'Majestic Mountains',
    description: 'Discover the breathtaking beauty of nature\'s greatest peaks.',
  },
  {
    image: './assets/img5.jpg',
    title: 'Serene Beaches',
    description: 'Experience the calming waves and golden sands of paradise.',
  },
  {
    image: './assets/img6.jpg',
    title: 'Urban Adventures',
    description: 'Explore the vibrant energy of city life and architecture.',
  },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = window.setInterval(nextSlide, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div 
      className="relative h-[600px] w-full overflow-hidden rounded-xl"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {slides.map((slide, index) => (
        <CarouselItem
          key={index}
          {...slide}
          active={currentIndex === index}
        />
      ))}
      <CarouselControls
        onPrevious={previousSlide}
        onNext={nextSlide}
        currentIndex={currentIndex}
        totalSlides={slides.length}
      />
    </div>
  );
};