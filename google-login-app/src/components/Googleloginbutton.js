// import React from "react";
// import { useGoogleLogin } from "@react-oauth/google";
// import Profilepage from "./Profilepage";

// function Googleloginbutton() {
//   const [userData, setUserData] = useState(null);
//   const login = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
//         headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
//       });

//       const profile = await res.json();
//       setUserData(profile);
//     },
//   });

//   return (
//     <div>
//       <button
//         onClick={() => {
//           login();
//         }}
//       ></button>
//       {userData && <Profilepage user={userData} />}
//     </div>
//   );
// }

// export default Googleloginbutton;
