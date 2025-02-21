import React from 'react'
import Homeslider from './Homeslider'
import Slider from "react-slick";
const Home = () => {
  return (
    <div className="flex-col  md:flex md:flex-row  items-center justify-center py-10 px-4 gap-10">
    
        <div className='text-2xl '>
          <p className='text-5xl font-serif'><span className='text-red-600'>W</span>e Provide Studio <span className='text-red-500'>B</span>ooking</p>
          <p className='text-3xl'> "Capture Moments, Create Memories."</p>
          <p >Easy Way To Grow Your Business </p>
          
        </div>
        <div className='bg-black h-[400px] w-[400px] text-white text-4xl'>
          Photo
        </div>
    </div>
  )
}

export default Home
