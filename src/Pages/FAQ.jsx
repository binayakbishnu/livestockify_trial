import React, { useState, useRef, useEffect } from 'react';
import Navbar from './HomePageComponents/Navbar';

const FAQ = () => {
  const faqContent = [
    {
      question: 'How does Livestockify differ from other livestock tools?',
      answer: 'Livestockify offers unique features and customizations that other livestock tools do not provide.'
    },
    {
      question: 'What exactly is Livestockify and what does it do?',
      answer: 'Livestockify is a comprehensive tool designed to optimize livestock management and productivity.'
    },
    {
      question: 'What are the standout features offered by Livestockify?',
      answer: 'Livestockify provides advanced analytics, real-time monitoring, and customizable settings.'
    },
    {
      question: 'Can Livestockify devices be customized to fit my specific needs for my practice?',
      answer: 'Yes, the devices are fully customizable to fit your practice and specific needs, offering tailored features and settings to optimize your workflow and enhance productivity.'
    }
  ];

  const [open, setOpen] = useState(null);

  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (open === index) {
          ref.style.maxHeight = `${ref.scrollHeight}px`;
        } else {
          ref.style.maxHeight = '0px';
        }
      }
    });
  }, [open]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('./src/assets/faq_img/bg.png')" }}>
      <Navbar activeLink={'FAQ'} />
      <div className="container mx-auto p-5 text-center relative z-10">
        <div className="pt-24">
          <h1 className="text-[#127F20] font-bebas font-normal text-2xl sm:text-3xl py-4">FAQ's</h1>
          <h2 className="text-[#22592A] font-helvetica font-bold text-3xl sm:text-5xl py-4 mt-4">Ask Us Anything</h2>
          <p className="text-[#465257] font-inter font-medium text-sm sm:text-base py-4 mt-4">
            Find out the most frequently asked questions about our product or services or ask us about new ones.
          </p>
          <div className="mt-4 space-y-4 max-w-3xl mx-auto">
            {
              faqContent.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item border-2 border-[#22592A] rounded-lg overflow-hidden transition-max-height duration-500 ease-in-out ${open === index ? 'bg-[#22592A] text-white' : ''}`}
                >
                  <div
                    className={`py-4 px-6 flex justify-between items-center cursor-pointer ${open === index ? 'bg-[#22592A] text-white' : 'bg-white text-black'}`}
                    onClick={() => handleToggle(index)}
                  >
                    <span className="font-inter font-normal text-base sm:text-lg">{item.question}</span>
                    <span className="font-bold text-xl sm:text-2xl">{open === index ? <span>&#x00d7;</span> : <span>&#x002B;</span> }</span>
                  </div>
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out`}
                    style={{ maxHeight: '0px' }}
                  >
                    <div className="py-4 px-6">
                      <p className="font-inter font-normal text-base sm:text-lg">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center items-center text-[#22592A] font-helvetica font-medium text-xl sm:text-2xl py-4 px-6 mt-8 max-w-3xl mx-auto">
          <span>More Questions?</span>
          <button
            className="font-sfpro font-normal text-sm sm:text-base bg-[#22592A] text-white border-none rounded-full py-2 px-4 ml-2"
            onClick={() => window.location.href = 'mailto:support@livestockify.com'}
          >
            Ask us here
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
