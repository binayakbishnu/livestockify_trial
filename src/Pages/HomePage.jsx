import AboutUs from './AboutUs';
// import HeroSection from './HeroSection'
import React from 'react';
import ContactUs from './HomePageComponents/ContactUs';
import Services from './HomePageComponents/Services';
import HeroSection from './HeroSection';
import Testimonials from './HomePageComponents/Testimonials';
import Navbar from './HomePageComponents/Navbar';

function HomePage() {
    return (
        <>
            <Navbar activeLink={'Home'} />
            <HeroSection />
            <AboutUs />
            <Services />

            <Testimonials />
            <ContactUs />
        </>


    )
}

export default HomePage