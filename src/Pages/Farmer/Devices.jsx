import { React, useState } from 'react';
import Navbar from '../HomePageComponents/Navbar';
import LeftPanel from '../../LeftPanel';
import backgroundImageClouds from "../../assets/livestockifyBGClouds.png";
import prodImage from "../../assets/profile/Device1.png";
import symbolImage from "../../assets/profile/healthicons_animal-cow-outline.png";
import UserDropdown from '../../UserDropdown';

const sensorData = [
  {
    id: 1,
    type: "TEMPERATURE & HUMIDITY SENSOR",
    modelNumber: "NDL677 5363 8820",
    versionNumber: "656LD48220R",
    dateOfPurchase: "01-05-2020",
    imageUrl: prodImage,
    symbolUrl: symbolImage
  },
  {
    id: 1,
    type: "TEMPERATURE & HUMIDITY SENSOR",
    modelNumber: "NDL677 5363 8820",
    versionNumber: "656LD48220R",
    dateOfPurchase: "01-05-2020",
    imageUrl: prodImage,
    symbolUrl: symbolImage
  },
  {
    id: 1,
    type: "TEMPERATURE & HUMIDITY SENSOR",
    modelNumber: "NDL677 5363 8820",
    versionNumber: "656LD48220R",
    dateOfPurchase: "01-05-2020",
    imageUrl: prodImage,
    symbolUrl: symbolImage
  },
];

const SensorCard = ({ sensor }) => (
  <div className="bg-white border border-black rounded-2xl p-2 pb-4">
    <img src={sensor.imageUrl} alt={sensor.type} className="w-[322px] h-[216px] object-cover rounded-2xl" />
    <div className="mt-4">
      <div className="text-[12px] font-bold text-black flex flex-row justify-between items-center px-6 font-profileFont">
        {sensor.type}
        <img src={sensor.symbolUrl} className="bg-ligthgreen w-[35px] h-[35px] p-1 rounded-lg" />
      </div>

      <p className="text-[12px] font-bold px-4 font-profileFont leading-[12px] pb-2">DETAILS</p>
      <div className="flex flex-col px-6 text-xs">
        <p className="text-black font-inter font-medium">Model Number: <span className="text-[#0000004D]">{sensor.modelNumber}</span></p>
        <p className="text-black font-inter font-medium">Version Number: <span className="text-[#0000004D]">{sensor.versionNumber}</span></p>
        <p className="text-black font-inter font-medium">Date of Purchase: <span className="text-[#0000004D]">{sensor.dateOfPurchase}</span></p>
      </div>

      <div className="border-t w-[90%] m-auto border-[#000000] my-2 opacity-10"></div>

      <div className="flex flex-row w-[75%] justify-between items-center m-auto">
        <button className="bg-ligthgreen text-green rounded-lg text-wrap px-[16px] py-[10px] border border-[#05320C] text-[12px] font-medium">Update your product</button>
        <button className="bg-ligthgreen text-green rounded-lg text-wrap px-[16px] py-[10px] border border-[#05320C] text-[12px] font-medium">Feature</button>
      </div>
    </div>
  </div>
);

const MainComponent = () => (
  <>
    <Navbar />
    <div className="flex flex-row container relative h-screen">
      <LeftPanel />
      <div className="container w-[calc(100%-111px)] relative">
        <img className="h-screen w-full absolute" src={backgroundImageClouds} />
        {/* User Info Section */}
        <div className="absolute top-4 left-12 flex items-center rounded mt-20 text-green font-bold font-headingsFont text-[36px]">My Devices</div>
        <UserDropdown />
        <div className="flex flex-row items-center absolute inset-0 justify-between max-w-[1100px] m-auto px-4 mt-24">
          {sensorData.map((sensor) => (
            <SensorCard key={sensor.id} sensor={sensor} />
          ))}
        </div>
        <div className="absolute bottom-4 left-4">
          <a href="/new-device" className="text-green font-bodyFont flex items-center font-medium text-[22px] ml-24">
            check out new products<span className="ml-1">→</span>
          </a>
        </div>
        <div className="absolute bottom-4 right-16">
          <button className="text-green rounded-lg px-[16px] py-[10px] border border-green text-[12px] font-medium font-bodyFont">Add more devices</button>
        </div>
      </div>
    </div>
  </>
);

export default MainComponent;
