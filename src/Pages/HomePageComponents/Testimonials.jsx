import React from "react";
import Person1 from "../../assets/Person1.png";
import Person2 from "../../assets/Person2.png";
import Person3 from "../../assets/Person3.png";
import Quote from "../../assets/Quote.svg";

const testimonials = [
  {
    quote1:
      "Livestockify's veterinary consultancy has been a game-changer for our farm. Their expert advice has significantly improved the health and productivity of our herd and increased our output by ",
    quote2: "about 30%. ",
    quote3: "",
    name: "Ravi Kumar, ",
    image: Person1,
    position: " Dairy Farmer",
  },
  {
    quote1:
      "The health management services from Livestockify are unparalleled. They provide tailored solutions that keep our flock in excellent condition year-round. ",
    quote2: "",
    quote3: "",
    name: "Lakshmi Menon, ",
    image: Person2,
    position: " Sheep Farmer",
  },
  {
    quote1:
      "Thanks to Livestockify's nutritional consulting, our poultry's growth and health have never been better giving us ",
    quote2: "40% more produce.",
    quote3: " Their team is knowledgeable and always ready to help.",
    name: "Priya Sharma, ",
    image: Person3,
    position: " Poultry Farmer",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div id='testimonials' className="font-bodyFont rounded-3xl flex flex-col w-full justify-between items-stretch bg-[#C2FFCB] shadow-[0_16px_48px_rgba(0,0,0,0.16)]">
      <div className="text-right w-full mt-4 flex justify-end pe-4">
        <img src={Quote} alt="Quote" />
      </div>
      <div className="mt-10 mb-16 pl-8 pr-8 pt-8 text-sm text-[#22592A] ">
        <span>{testimonial.quote1}</span>
        <span className="font-bold">{testimonial.quote2}</span>
        <span>{testimonial.quote3}</span>
      </div>

      <div className="bg-green h-20 flex items-center justify-center rounded-b-3xl w-full text-[#D6FFDC] relative">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="rounded-full w-16 h-16 absolute top-[-50%]"
        />
        <span className="font-bold text-xs text-center mt-5">
          {testimonial.name}
        </span>
        <span className="text-xs ms-1 mt-5">{testimonial.position}</span>
      </div>
    </div>
  );
};

const Testimonials = () => (
  <section className="flex flex-wrap justify-center m-auto gap-0 p-10">
    <div className="flex flex-col text-center justify-center max-w-screen-md">
      <p className="font-headingsFont text-xl font-bold mb-2 text-[#127F20]">
        TESTIMONIALS
      </p>

      <p className="font-sans text-4xl font-bold mb-2 text-[#22592A]">
        See What People Say About Us
      </p>

      <p className="font-sans mb-8 text-s text-[#465257]">
        Hear from farmers and livestock managers who trust Livestockify for their<br />livestock care and management needs
      </p>
    </div>

    <div className="text-center flex justify-between items-stretch gap-4 w-full h-full flex-col md:flex-row">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
      ))}
    </div>
  </section>
);

export default Testimonials;