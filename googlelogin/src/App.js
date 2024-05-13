import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profilepage from "./components/Profilepage";
import Loginpage from "./components/Loginpage";
import Navbar from "./components/Navbar";

function App() {
  const [profileData, setProfileData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const referrer = document.referrer;
    if (referrer.includes("instagram.com")) {
      window.location.href = "https://mandavanaveen.github.io/googlelogin";
    }
  }, []);
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Loginpage
              setIsLoggedIn={setIsLoggedIn}
              setProfileData={setProfileData}
            />
          }
        />
        <Route
          exact
          path="/logout"
          element={
            <Loginpage
              setIsLoggedIn={setIsLoggedIn}
              setProfileData={setProfileData}
            />
          }
        />
        <Route
          exact
          path="/profile"
          element={<Profilepage profileData={profileData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
