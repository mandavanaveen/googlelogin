import React from "react";

function Profilepage({ profileData }) {
  return (
    <div className="w-full h-screen absolute bg-white text-black mt-14 flex flex-col items-center">
      <h1 className="mt-5 text-2xl font-bold">Personal Information</h1>
      <div className="text-base gap-5 flex flex-col  mt-10 font-medium">
        <p>Name: {profileData.name}</p>
        <p>Email: {profileData.email}</p>
      </div>
    </div>
  );
}

export default Profilepage;
