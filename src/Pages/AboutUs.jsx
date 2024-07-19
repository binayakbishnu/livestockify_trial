import React from 'react';
import Navbar from './HomePageComponents/Navbar';
import aimImage from '/src/assets/about_us_imgs/aim.png';
import visionImage from '/src/assets/about_us_imgs/vision.png';
import missionImage from '/src/assets/about_us_imgs/mission.png';

const AboutUs = () => {
  return (
    <div id='aboutus' className="flex flex-col items-center p-4 sm:p-8"> {/* Added padding to the main container */}
      <div className="text-center mt-4 w-full"> {/* Adjusted margin-top */}
        <h1 className="text-[#128020] font-bebas-neue text-2xl font-normal leading-9 tracking-tighter">ABOUT US</h1>
        <h2 className="font-helvetica-neue text-4xl font-bold leading-tight mt-4 text-[#22592A]">Who Are We ?</h2>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Welcome to Livestockify, your trusted partner in modern livestock management. We revolutionize the industry with innovative solutions that boost productivity, sustainability, and animal welfare.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 mt-8 w-full max-w-screen-lg">
        {/* AIM Box */}
        <div className="relative p-8 sm:p-6 rounded-lg shadow-md w-full text-center mb-6"
          style={{
            background: '#C2FFCB',
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}>
          <img src={aimImage} alt="AIM" className="absolute left-0 top-0 h-full w-auto" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover', objectPosition: 'left' }} />
          <div className="relative z-10">
            <h2 className="font-helvetica-neue text-2xl font-bold leading-snug text-center" style={{ color: '#0A190C' }}>Aim</h2>
            <p className="font-inter text-xl font-normal leading-7 tracking-tighter text-center mt-2" style={{ color: '#0A190C' }}>
              We aim to firmly revolutionize the agricultural industry through innovation and technological-driven 
              solutions. We are also dedicated to enhancing and improving our productivity and 
              efficiency in providing services to customers. 
            </p>
          </div>
        </div>

        {/* Vision and Mission Boxes */}
        <div className="flex flex-col md:flex-row items-stretch gap-6 w-full">
          {/* Vision Box */}
          <div className="relative p-8 sm:p-6 rounded-lg shadow-md w-full md:w-1/2 flex flex-col justify-center"
            style={{ background: '#C2FFCB', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <img src={visionImage} alt="Vision" className="absolute left-0 top-0 h-full w-auto" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover', objectPosition: 'left' }} />
            <div className="relative z-10">
              <h2 className="font-helvetica-neue text-2xl font-bold leading-snug text-center" style={{ color: '#0A190C' }}>Vision</h2>
              <p className="font-inter text-xl font-normal leading-7 tracking-tighter text-center mt-2" style={{ color: '#0A190C' }}>
                Building a sustainable future of livestock farming through innovative IoT solutions.
              </p>
            </div>
          </div>

          {/* Mission Box */}
          <div className="relative p-8 sm:p-6 rounded-lg shadow-md w-full md:w-1/2 flex flex-col justify-center"
            style={{ background: '#C2FFCB', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <img src={missionImage} alt="Mission" className="absolute left-0 top-0 h-full w-auto" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover', objectPosition: 'left' }} />
            <div className="relative z-10">
              <h2 className="font-helvetica-neue text-2xl font-bold leading-snug text-center" style={{ color: '#0A190C' }}>Mission</h2>
              <p className="font-inter text-xl font-normal leading-7 tracking-tighter text-center mt-2" style={{ color: '#0A190C' }}>
                Transforming livestock farming through innovative technology, enhancing efficiency, 
                and simplifying processes for a smarter future.
              </p>
            </div>
          </div>
        </div>

        <div className="section-below-aboutus mt-8 w-full">
          {/* Content of the section below the "About Us" section */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
