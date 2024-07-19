import { MdOutlineChatBubbleOutline, MdOutlineMail } from "react-icons/md";

import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import React from "react";
import { RiTwitterXLine } from "react-icons/ri";

const sections = [
  {
    title: "About Us",
    items: ["Contact", "FAQs", "Support", "Blog", "Resources"],
  },
  {
    title: "Product",
    items: ["Pricing", "Features", "Demo", "Testimonials", "Case Studies"],
  },
  {
    title: "Partners",
    items: ["Events", "Press", "Careers", "Terms", "Privacy"],
  },
];

const Section = ({ title, items }) => (
  <div id='contactus' className="md:text-center">
    <ul>
      <li className="font-extrabold text-green text-lg  md:text-xlg mb-2 ">{title}</li>
      {items.map((item, index) => (
        <li key={index} className="text-[#127F20] text-base md:text-lg mb-2">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ContactBox = ({ Icon, title, description, lineText, link }) => (
  <div className="w-[294px] h-auto space-x-0.5 ">
    <div className="flex flex-col items-center mb-2 font-semibold text-green">
      <Icon className="mb-2 text-2xl" />
      <span className="text-xl">{title}</span>
    </div>
    <p className="text-lg mb-6 text-[#127F20]">{description}</p>
    {link ? (
      <a className="underline text-green font-bold" href={link}>
        {lineText}
      </a>
    ) : (
      <span className="underline text-green font-bold">{lineText}</span>
    )}
  </div>
);

const ContactUs = () => {
  return (
    <>
      <div className="p-8 flex flex-col align-center justify-between gap-4 text-center">
        <h3 className="text-[#127F20] text-2xl font-normal contactUs">
          CONTACT US
        </h3>
        <h1 className="text-[40px] text-green font-bold">
          Get In Touch With Us
        </h1>
        <p className="text-base font-medium w-[50%] m-auto">
          Question or feedback? Contact Livestockify for assistance, demos, or
          partnerships. We're here to help!
        </p>
      </div>

      <div className="p-8 flex flex-row items-center justify-center gap-4 md:gap-8 text-center text-xs md:text-lg ">
        <ContactBox
          Icon={MdOutlineMail}
          title="Email Us"
          description="Send us an email and we'll get back to you as soon as possible"
          lineText="info@livestockify.com"
          link="mailto:info@livestockify.com"
        />
        <ContactBox
          Icon={MdOutlineChatBubbleOutline}
          title="Live Chat"
          description="Chat with our team in real time for immediate support"
          lineText="chat with us"
          link="#"
        />
        <ContactBox
          Icon={IoCallOutline}
          title="Call Us"
          description="Give us a call and speak directly with a member of our team"
          lineText="+91 86884 84493"
          link="tel:+91 86884 84493"
        />
      </div>

      <div className="p-4 flex flex-col md:flex-row justify-between ">
        <div className="p-8 flex flex-row items-center justify-between lg:gap-24" >
          {sections.map((section, index) => (
            <Section key={index} title={section.title} items={section.items} />
          ))}
        </div>

        <div className="max-w-xl m-8">
          <div>
            <span className="font-extrabold text-green text-xl mb-2 block">
              Subscribe
            </span>
            <p className="text-[#127F20] text-lg mb-2">
              Join our mailing list for the latest updates and reviews
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mb-4 border-2 border-black p-1 rounded-lg">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="px-2 border w-full sm:w-3/4 bg-white border-none rounded flex-grow"
            />
            <button className="px-4 py-3 text-white bg-black rounded-lg w-full sm:w-auto sm:flex-grow-0 text-lg">
              Subscribe
            </button>
          </div>
          <p className="text-[#127F20] text-lg mb-2">
            By subscribing you agree to our policy and consent to receive
            updates from us.
          </p>
        </div>
      </div>

      <div className="text-green text-5xl font-extrabold flex place-content-center">
        Livestockify
      </div>

      <hr className="my-4 mx-auto border-none bg-[#127F20] h-[2px] w-[80%]" />

      <div className="p-6 flex flex-col md:flex-row justify-evenly text-green ">
        <div className="flex flex-col lg:flex-row text-balance text-center my-0.5">
          <span className="mx-4 whitespace-nowrap">2023 Livestockify</span>
          <span className="mx-4 whitespace-nowrap">All rights reserved</span>
        </div>
        <div className="flex flex-col lg:flex-row text-balance text-center my-.5">
          <span className="mx-4">Privacy Policy</span>
          <span className="mx-4">Terms of Service</span>
          <span className="mx-4">Cookie Settings</span>
        </div>
        <div className="flex  flex-row lg:flex-row justify-center  text-balance my-1.5">
          <div className="mx-4">
            <FiGithub />
          </div>
          <div className="mx-4">
            <FaInstagram />
          </div>
          <div className="mx-4">
            <RiTwitterXLine />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
