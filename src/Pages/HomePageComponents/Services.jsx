import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import service1 from '../../assets/services_logos/service1.svg';
import service2 from '../../assets/services_logos/service2.svg';
import service3 from '../../assets/services_logos/service3.svg';
import service4 from '../../assets/services_logos/service4.svg';
import service5 from '../../assets/services_logos/service5.svg';
import service6 from '../../assets/services_logos/service6.svg';
import service7 from '../../assets/services_logos/service7.svg';
import service8 from '../../assets/services_logos/service8.svg';

function Services() {
    const servicesList = [
        {
            'id': 1,
            'icon': service1,
            'name': 'Farm Monitoring & Automation',
            'description': "Implement advanced monitoring systems for environmental conditions, and automate feeding and watering processes for efficient animal care.",
        },
        {
            'id': 2,
            'icon': service2,
            'name': 'Predictions, Alerts & Notifications',
            'description': "Leverage predictive analytics to anticipate health issues, and set up customized alert systems for timely intervention and proactive care.",
        },
        {
            'id': 3,
            'icon': service3,
            'name': 'Implementation of Tech in Livestock',
            'description': "Integrate precision livestock farming tools, GPS tracking, and robotic systems for enhanced animal health, productivity, and welfare.",
        },
        {
            'id': 4,
            'icon': service4,
            'name': 'Nutritions in your feed and personalized feed plan',
            'description': "Optimize your livestock's health and productivity with our personalized nutrition plans and expert feed solutions. Tailored to meet the unique needs of your farm, our plans ensure optimal growth and well-being for your livestock.",
        },
        {
            'id': 5,
            'icon': service5,
            'name': 'Guidance on Health Insurance',
            'description': "Ensure your livestock's well-being with our comprehensive health insurance guidance. We help you navigate the options to find the best coverage for your farm.",
        },
        {
            'id': 6,
            'icon': service6,
            'name': 'Assistance on Bank Loans',
            'description': "Get the financial support you need with our expert assistance in securing bank loans. Our team will guide you through every step to ensure the best funding options for your farm.",
        },
        {
            'id': 7,
            'icon': service7,
            'name': 'Expert Advice on all schemes',
            'description': "Our extended team of experts with plenty of years of experience and is versed in various schemes. Their extensive knowledge guarantees ensure that you receive the most accurate and up-to-date tailored advice according to your needs. Some of the benefits are personalized guidance, risk mitigation, and optimized returns.",
        },
        {
            'id': 8,
            'icon': service8,
            'name': 'Consultancy for Veterinary Care',
            'description': "We are dedicated to providing top-tier consultancy services for veterinary care, ensuring the health and well being of your beloved pets and most importantly livestock.",
        },
    ];

    const showDesp = (service) => {
        document.getElementById(service).children[2].style.visibility = 'visible';
    }

    const hideDesp = (service) => {
        document.getElementById(service).children[2].style.visibility = 'hidden';
    }

    const showMoreServices = () => {
        let allServices = document.getElementsByClassName('services');
        for (let service of allServices) {
            service.children[2].style.display === 'block' ? service.children[2].style.display = 'none' : service.children[2].style.display = 'block';
            service.children[2].style.visibility === 'visible' ? service.children[2].style.visibility = 'hidden' : service.children[2].visibility = 'visible';
            service.style.backgroundColor === 'rgb(194, 255, 203)' ? service.style.backgroundColor = 'white' : service.style.backgroundColor = 'rgb(194, 255, 203)';
        }
    }

    const { ref: customerRef, inView: customerInView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    const { ref: languagesRef, inView: languagesInView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    const { ref: projectsRef, inView: projectsInView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <div className='px-4 md:px-8' id='services'>
            <div className='flex flex-col align-center justify-between gap-4 text-center'>
                <h2 className='text-[#127F20] text-2xl md:text-3xl font-normal font-headingsFont'>Services</h2>
                <p className='text-2xl md:text-4xl text-green font-bold font-bodyFont'>We Help Your Livestock Thrive</p>
                <p className='text-base md:text-lg font-medium w-full md:w-1/2 m-auto font-bodyFont'>
                    Veterinary care, nutritional consulting, breeding programs, and health management to boost your farm's success.
                </p>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8'>
                    {servicesList.map((service) => (
                        <div
                            id={`service${service.id}`}
                            key={service.id}
                            onMouseEnter={() => showDesp(`service${service.id}`)}
                            onMouseLeave={() => hideDesp(`service${service.id}`)}
                            className='services hover:bg-[#C2FFCB] hover:cursor-pointer rounded-xl p-4 text-center hover:shadow-[0_16px_48px_rgba(0,0,0,0.16)]'
                        >
                            <img
                                src={service.icon}
                                alt={`service${service.id}`}
                                className='m-auto h-8 w-8 mb-2'
                            />
                            <p className='text-green font-bold text-base mb-4'>{service.name}</p>
                            <p className='text-green text-xs mb-6 hidden md:block visible md:invisible'>{service.description}</p>
                        </div>
                    ))}
                </div>
                <button
                    onClick={showMoreServices}
                    className='md:hidden rounded-md bg-lightgreen w-fit m-auto px-4 py-2 text-black font-bold hover:cursor-pointer'
                >
                    More
                </button>
            </div>
            <div className='bg-[#ffffff] py-16'>
                <div className='text-center mb-12'>
                    <h2 className='text-[#22592A] text-2xl md:text-3xl font-bold'>
                        HERE'S WHY WE <span className='text-[#56C364]'>PREFER LIVESTOCKIFY</span>
                    </h2>
                    <p className='text-[#22592A] text-base md:text-lg mt-4'>
                        Reliable, affordable, and tailored Agri IoT solutions for India's agriculture.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row justify-center gap-12'>
                    {/* Box 1 */}
                    <div
                        ref={customerRef}
                        className='bg-[#C2FFCB] w-full md:w-[294px] h-auto md:h-[319px] rounded-[25px] flex flex-col items-center p-4'
                    >
                        <svg
                            width='76'
                            height='76'
                            viewBox='0 0 76 76'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M38 0.666656C42.9507 0.666656 47.6986 2.63332 51.1993 6.134C54.7 9.63467 56.6666 14.3826 56.6666 19.3333C56.6666 24.284 54.7 29.032 51.1993 32.5326C47.6986 36.0333 42.9507 38 38 38C33.0493 38 28.3013 36.0333 24.8007 32.5326C21.3 29.032 19.3333 24.284 19.3333 19.3333C19.3333 14.3826 21.3 9.63467 24.8007 6.134C28.3013 2.63332 33.0493 0.666656 38 0.666656ZM38 47.3333C58.6266 47.3333 75.3333 55.6866 75.3333 66V75.3333H0.666656V66C0.666656 55.6866 17.3733 47.3333 38 47.3333Z'
                                fill='#22592A'
                            />
                        </svg>

                        <div className='flex-grow'></div>

                        <div className='text-green text-4xl md:text-6xl font-bold'>
                            {customerInView ? <CountUp end={4500} duration={3} /> : '0'}+
                        </div>
                        <p className='text-[#22592A] text-lg md:text-xl font-semibold mt-2'>Customers</p>
                        <p className='text-[#22592A] text-sm md:text-base mt-2'>Dedicated to Your Success</p>
                    </div>

                    {/* Box 2 */}
                    <div
                        ref={languagesRef}
                        className='bg-[#C2FFCB] w-full md:w-[294px] h-auto md:h-[319px] rounded-[25px] flex flex-col items-center p-4'
                    >
                        <svg
                            width='76'
                            height='76'
                            viewBox='0 0 76 76'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M38 0.666656C42.9507 0.666656 47.6986 2.63332 51.1993 6.134C54.7 9.63467 56.6666 14.3826 56.6666 19.3333C56.6666 24.284 54.7 29.032 51.1993 32.5326C47.6986 36.0333 42.9507 38 38 38C33.0493 38 28.3013 36.0333 24.8007 32.5326C21.3 29.032 19.3333 24.284 19.3333 19.3333C19.3333 14.3826 21.3 9.63467 24.8007 6.134C28.3013 2.63332 33.0493 0.666656 38 0.666656ZM38 47.3333C58.6266 47.3333 75.3333 55.6866 75.3333 66V75.3333H0.666656V66C0.666656 55.6866 17.3733 47.3333 38 47.3333Z'
                                fill='#22592A'
                            />
                        </svg>

                        <div className='flex-grow'></div>

                        <div className='text-green text-4xl md:text-6xl font-bold'>
                            {languagesInView ? <CountUp end={6} duration={3} /> : '0'}+
                        </div>
                        <p className='text-[#22592A] text-lg md:text-xl font-semibold mt-2'>Languages</p>
                        <p className='text-[#22592A] text-sm md:text-base mt-2'>Breaking Language Barriers</p>
                    </div>

                    {/* Box 3 */}
                    <div
                        ref={projectsRef}
                        className='bg-[#C2FFCB] w-full md:w-[294px] h-auto md:h-[319px] rounded-[25px] flex flex-col items-center p-4'
                    >
                        <svg
                            width='76'
                            height='76'
                            viewBox='0 0 76 76'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M38 0.666656C42.9507 0.666656 47.6986 2.63332 51.1993 6.134C54.7 9.63467 56.6666 14.3826 56.6666 19.3333C56.6666 24.284 54.7 29.032 51.1993 32.5326C47.6986 36.0333 42.9507 38 38 38C33.0493 38 28.3013 36.0333 24.8007 32.5326C21.3 29.032 19.3333 24.284 19.3333 19.3333C19.3333 14.3826 21.3 9.63467 24.8007 6.134C28.3013 2.63332 33.0493 0.666656 38 0.666656ZM38 47.3333C58.6266 47.3333 75.3333 55.6866 75.3333 66V75.3333H0.666656V66C0.666656 55.6866 17.3733 47.3333 38 47.3333Z'
                                fill='#22592A'
                            />
                        </svg>

                        <div className='flex-grow'></div>

                        <div className='text-green text-4xl md:text-6xl font-bold'>
                            {projectsInView ? <CountUp end={200} duration={3} /> : '0'}+
                        </div>
                        <p className='text-[#22592A] text-lg md:text-xl font-semibold mt-2'>Projects</p>
                        <p className='text-[#22592A] text-sm md:text-base mt-2'>Innovating for the Future</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
