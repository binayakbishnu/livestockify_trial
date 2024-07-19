import React from 'react'
import image1 from '../assets/herosection/Image1.jpg'
import image2 from '../assets/herosection/image2.png'
import image3 from '../assets/herosection/image3.png'
import image4 from '../assets/herosection/image4.png'
import Navbar from './HomePageComponents/Navbar'

const HeroSection = () => {
  return (
    <div>
        <section className="bg-white mt-10">
    <div className="py-8 mx-auto max-w-screen-xl text-center lg:py-16">
       
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-green">Transforming Livestock Farming with Innovative Solutions</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">At Livestockify, we empower farmers with cutting-edge tools and expert services to enhance livestock health, productivity, and sustainability. Join us in revolutionizing the future of farming</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-green rounded-md border">
    Book a Call
</a> 
<a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-green bg-ligthgreen rounded-md border">
    Learn More
</a>


        </div>
        <div className="carousel carousel-center max-w-full space-x-4 rounded-box">
  <div className="carousel-item" style={{ width: '266px', height: '340px' }}>
    <img src={image1} className="rounded-box" />
  </div> 
 <div className="carousel-item" style={{ width: '266px', height: '340px' }}>
    <img src={image2} className="rounded-box" />
  </div>
  <div className="carousel-item" style={{ width: '266px', height: '340px' }}>
    <img src={image3} className="rounded-box" />
  </div>

    <div className="carousel-item" style={{ width: '266px', height: '340px' }}>
    <img src={image4} className="rounded-box" />
  </div> 
  <div className="carousel-item" style={{ width: '266px', height: '340px' }}>
    <img src={image1} className="rounded-box" />
  </div>
  <div className="carousel-item" style={{ width: '266px', height: '340px' }}>
    <img src={image2} className="rounded-box" />
  </div>
  <div className="carousel-item" style={{ width: '266px', height: '340px' }}>
    <img src={image3} className="rounded-box" />
  </div>

    <div className="carousel-item" style={{ width: '266px', height: '340px' }}>
    <img src={image4} className="rounded-box" />
  </div> 
  <div className="carousel-item" style={{ width: '266px', height: '340px' }}>
    <img src={image1} className="rounded-box" />
  </div> 
  </div>
        
  

    </div>
</section>
    </div>
  )
}

export default HeroSection