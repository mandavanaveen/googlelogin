import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Icon } from "@iconify/react";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      });

      const profile = await res.json();
      console.log("profile", profile);
    },
  });

  useEffect(() => {
    const isInstagramApp = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /instagram/i.test(userAgent);
    };

    const redirectToDefaultBrowser = () => {
      if (isInstagramApp()) {
        window.location.href = "https://mandavanaveen.github.io/googlelogin/";
      }
    };

    redirectToDefaultBrowser();
  }, []);

  return (
    <div className="w-screen h-screen bg-customColor flex flex-col items-center">
      <div class="w-[430px] h-[520px] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
        <div class="h-[200px] w-[200px] absolute rounded-full bg-gradient-to-b from-blue-700 to-blue-500 -top-20 -left-20"></div>
        <div class="h-[200px] w-[200px] absolute rounded-full bg-gradient-to-r from-orange-700 to-yellow-700 -right-[30px] -bottom-20"></div>
      </div>

      <div className="h-[520px] w-[400px] bg-[rgba(255,255,255,0.13)]  absolute -translate-x-2/4 -translate-y-2/4 backdrop-blur-[10px] shadow-[0_0_40px_rgba(8,7,16,0.6)] px-[35px] py-[50px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.1)] left-2/4 top-2/4">
        <h1 className="text-4xl font-medium text-white text-center">
          Login Page
        </h1>

        <div className="w-full flex flex-col justify-between">
          <label className="block mt-8 text-white text-base font-medium">
            Username
          </label>
          <input
            type="text"
            className="block h-12 w-full bg-opacity-7 bg-[rgba(255,255,255,0.07)] rounded-md px-4 mt-2 text-sm font-medium"
            placeholder="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col justify-between">
          <label className="block mt-8 text-white text-base font-medium">
            Password
          </label>
          <input
            type="password"
            className="block h-12 w-full bg-opacity-7 bg-[rgba(255,255,255,0.07)] rounded-md px-4 mt-2 text-sm font-medium"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="w-full mt-9 text-black bg-white py-4 px-0 text-lg font-semibold rounded-md cursor-pointer">
          Submit
        </button>

        <button
          className="border w-full mt-6 rounded-lg flex py-2 justify-center gap-3"
          onClick={() => {
            login();
          }}
        >
          <Icon width={22} icon="flat-color-icons:google"></Icon>
          <p className="text-white">Google</p>
        </button>
      </div>
    </div>
  );
}

export default Loginpage;
