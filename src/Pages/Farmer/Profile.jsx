import React, { useState } from 'react';
import Navbar from '../HomePageComponents/Navbar';
import LeftPanel from "../../LeftPanel";
import backgroundImageClouds from "../../assets/livestockifyBGClouds.png";
import UserDropdown from '../../UserDropdown';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Akash Singh',
    email: 'akash.singh@example.com',
    role: 'Farmer',
    phone: '1234567890',
    address: '123 Farm Lane',
    city: 'Agro City',
    state: 'Green State',
    pincode: '987654'
  });

  return (
    <>
      <Navbar />

      <div className="flex flex-row container relative h-screen">
        <LeftPanel />
        
        <div className="container w-[calc(100%-111px)] relative">
          <img className="h-screen w-full absolute" src={backgroundImageClouds} />
          
          {/* User Info Section */}
          <UserDropdown/>

          
            <div className="absolute inset-0 flex items-center justify-center">
              <form className="p-8 w-full max-w-xl" onSubmit={(e) => e.preventDefault()}>
                <h2 className="text-2xl font-bold mb-4 text-green text-center">Personal Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 font-bodyFont text-black">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      disabled
                      className="w-full border rounded px-2 py-1 bg-gray-200 border-black text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-bodyFont text-black">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={profile.address}
                      disabled
                      className="w-full border rounded px-2 py-1 bg-gray-200 border-black text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-bodyFont text-black">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      disabled
                      className="w-full border rounded px-2 py-1 bg-gray-200 border-black text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-bodyFont text-black">City</label>
                    <input
                      type="text"
                      name="city"
                      value={profile.city}
                      disabled
                      className="w-full border rounded px-2 py-1 bg-gray-200 border-black text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-bodyFont text-black">Role</label>
                    <input
                      type="text"
                      name="role"
                      value={profile.role}
                      disabled
                      className="w-full border rounded px-2 py-1 bg-gray-200 border-black text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-bodyFont text-black">State</label>
                    <input
                      type="text"
                      name="state"
                      value={profile.state}
                      disabled
                      className="w-full border rounded px-2 py-1 bg-gray-200 border-black text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-bodyFont text-black">Phone No</label>
                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      disabled
                      className="w-full border rounded px-2 py-1 bg-gray-200 border-black text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-bodyFont text-black">Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={profile.pincode}
                      disabled
                      className="w-full border rounded px-2 py-1 bg-gray-200 border-black text-black"
                    />
                  </div>
                </div>
              </form>
            </div>
          
          <p className="absolute bottom-4 right-4 text-xs text-black text-right">
            - If You Want To Change The Personal Details Send A Mail To <a href="mailto:support@livestockify.com" className="text-blue-500">support@livestockify.com</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
