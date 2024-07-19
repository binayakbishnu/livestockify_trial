
import backgroundImageClouds from "./assets/livestockifyBGClouds.png";
import personalDetailImgActive from "./assets/profile/Variant2active.png";
import personalDetailImgInActive from "./assets/profile/Variant2inactive.png";
import myDevicesImgActive from "./assets/profile/carbon_iot-platform active.png";
import myDevicesImgInActive from "./assets/profile/carbon_iot-platform inactive.png";
import settingsImgActive from "./assets/profile/ep_settingactive.png";
import settingsImgInActive from "./assets/profile/ep_setting inactive.png";

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const LeftPanel = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('personalDetails');

  useEffect(() => {
    switch (location.pathname) {
      case '/farmer/profile':
        setActiveSection('personalDetails');
        break;
      case '/farmer/devices':
        setActiveSection('myDevices');
        break;
      case '/farmer/alerts':
        setActiveSection('settings');
        break;
      default:
        setActiveSection('personalDetails');
    }
  }, [location.pathname]);

  return (
    <div className="w-[111px] bg-navbarbackground p-1 flex flex-col justify-center h-screen">
      <Link to={'/farmer/profile'} onClick={() => setActiveSection('personalDetails')}>
        <img
          className="h-[70px] w-[70px] cursor-pointer m-3"
          src={activeSection === 'personalDetails' ? personalDetailImgActive : personalDetailImgInActive}
        />
      </Link>
      
      <Link to={'/farmer/devices'} onClick={() => setActiveSection('myDevices')}>
        <img
          className="h-[70px] w-[70px] cursor-pointer m-3"
          src={activeSection === 'myDevices' ? myDevicesImgActive : myDevicesImgInActive}
        />
      </Link>

      <Link to={'/farmer/alerts'} onClick={() => setActiveSection('settings')}>
        <img
          className="h-[70px] w-[70px] cursor-pointer m-3"
          src={activeSection === 'settings' ? settingsImgActive : settingsImgInActive}
        />
      </Link>
    </div>
  );
};

export default LeftPanel;
