import React from 'react'
import { Carousel } from './components/Carousel/Carousel'
import SubHeader from '../Component/SubHeader/SubHeader'
import { GalleryVerticalEnd } from 'lucide-react'

function Gallery2 () {
  return (
    <>
      <SubHeader
        title={' Our Gallery'}
        icon={<GalleryVerticalEnd className='w-10 h-10 animate-bounce' />}
        discription={
          <p className='text-center mt-4 text-lg text-indigo-100 max-w-2xl mx-auto'>
            Take a peek into the exciting world of{' '}
            <span className='font-semibold'>Shri ji Tution and Coaching</span>!
            Here are some snapshots from our live classes, student images, and
            events.
          </p>
        }
      />
      <div className='min-h-[46rem] bg-gradient-to-br from-indigo-100 to-purple-100 p-8'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8 text-center'></h1>
          <Carousel />
        </div>
      </div>
    </>
  )
}

export default Gallery2
