import React from "react";

function Profilepage({ user }) {
  return (
    <div className="w-full h-screen">
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profilepage;
