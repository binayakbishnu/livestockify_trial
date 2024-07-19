import React from 'react'
import userImage from "./assets/profile/userImage.png";

function UserDropdown() {
  return (
    <div className="absolute top-4 right-4 flex items-center rounded mt-20">
      <img src={userImage} alt="User" className="w-12 h-12 rounded-full mr-2" />
      <div>
        <p className="text-black font-bold">Akash Singh</p>
        <p className="text-[#404040] text-center text-xs">Farmer</p>
      </div>
    </div>
  )
}

export default UserDropdown
