import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Profilepage from "./components/Profilepage";
import Loginpage from "./components/Loginpage";

function App() {
  // const isInstagramBrowser = () => {
  //   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  //   return userAgent.match(/Instagram/i) !== null;
  // };

  // const handleExternalLinkClick = (e) => {
  //   if (isInstagramBrowser() && e.target.tagName === "A") {
  //     e.preventDefault();
  //     window.open(e.target.href, "_system");
  //   }
  // };

  return (
    <div>
      <Loginpage />
      {/* <Router>
            <div onClick={handleExternalLinkClick}>
              <Routes>
                <Route exact path="/" Component={Loginpage} />
                <Route path="/profile" Component={Profilepage} />
                <Redirect to="/" />
              </Routes>
            </div>
          </Router> */}
    </div>
  );
}

export default App;
