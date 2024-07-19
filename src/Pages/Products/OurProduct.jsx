import DeviceImg from "/src/assets/DeviceImg.png";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Navbar from "/src/Pages/HomePageComponents/Navbar";

const OurProduct = () => {
  return (
    <div className="bg-[#F3FFF5] min-h-screen">
      <Navbar />
      <div className="container mx-auto p-5 pt-20">
        <div className="h-px flex flex-row justify-between px-8 text-green">
          <div>
            <FaHeart size={32} />
          </div>
          <div className="text-3xl font-extrabold md:text-5xl">Our Products</div>
          <div>
            <FaShoppingCart size={32} />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-8 mt-8 h-auto my-4">
        <div className="w-full lg:w-1/2">
          <div className="flex h-[300px] lg:h-[600px] border-2 border-black rounded-3xl m-4">
            <div className="flex flex-col lg:flex-col w-1/4 h-full border-2 md:flex-col">
              <img
                className="h-1/4 border border-black text-center"
                src=""
                alt="Images"
              />
              <img
                className="h-1/4 border border-black text-center"
                src=""
                alt="Images"
              />
              <img
                className="h-1/4 border border-black text-center"
                src=""
                alt="Images"
              />
              <img
                className="h-1/4 border border-black text-center"
                src=""
                alt="Images"
              />
            </div>
            <div className="w-3/4">
              <img className="h-full w-full" src={DeviceImg} alt="" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-4 space-y-4 lg:space-y-0 lg:space-x-4 text-white justify-around">
            <button className="border-2 border-black rounded-full px-10 py-2 text-lg md:px-8 md:py-1.5 md:text-md lg:px-20 lg:py-2 lg:text-xl bg-green">
              Buy Now
            </button>
            <button className="border-2 border-black rounded-full px-10 py-2 text-lg md:px-8 md:py-1.5 md:text-md lg:px-20 lg:py-2 lg:text-xl bg-green">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-auto border-2 border-black rounded-lg m-4">
          <div className="text-green text-2xl lg:text-4xl font-extrabold p-4 text-center">
            <h1>Poultry Device</h1>
          </div>
          <div className="text-green text-base lg:text-lg font-bold px-4 lg:px-16 text-center">
            <p>
              Livestockify Is Your Advanced Partner In Poultry Farming, Designed
              To Make Your Brooding Time Stress-Free And Productive. It's An
              Easy-To-Use IoT Device That Monitors And Automates Crucial Aspects
              Of Your Poultry Farm, Ensuring A Healthier Environment For Your
              Chickens.
            </p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <span className="text-black text-2xl lg:text-4xl">₹9,999</span>{" "}
            <span className="text-black px-4 line-through opacity-70 text-lg">
              ₹11,999
            </span>
          </div>
          <div className="p-4 flex flex-col sm:flex-row items-center">
            <span className="text-black opacity-70 text-lg lg:text-xl font-extrabold">
              Delivery
            </span>
            <span className="mx-4 font-extrabold underline underline-offset-8 inline-flex items-center ">
              <div className="flex items-center space-x-2 mx-2">
                <IoLocationSharp />
              </div>
              <div>Enter Pincode</div>
              <span className="text-[#127F20] font-extrabold mx-2">Check</span>
            </span>
          </div>
          <div className="p-4">
            <h2 className="font-extrabold text-base lg:text-lg text-black opacity-50">
              Product Description
            </h2>
            <ul className="list-disc px-4 lg:px-16 text-black">
              <li>Based On The Condition It Helps To Sense The Temperature</li>
              <li>
                It Helps To Calculate Amount Of Humidity Present Inside The Farm
              </li>
              <li>It Helps To Find The Ammonia Level</li>
            </ul>
            <h2 className="text-black font-extrabold opacity-50 text-base lg:text-lg mt-4">
              Benefits Of Livestockify
            </h2>
            <ul className="list-disc px-4 lg:px-16 text-black">
              <li>Temperature & Humidity Controls</li>
              <li>Ammonia & Carbon Dioxide Alerts</li>
              <li>Sound & Dust Content Observation</li>
              <li>Disease Prediction</li>
              <li>Farm Automation</li>
              <li>Real Time Data Analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
