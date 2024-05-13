import "../index.css";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(true);
  };
  return (
    <nav className="nav-bar fixed top-0 w-full z-50 flex justify-evenly">
      <ul className="nav-ul text-black ">
        {isLoggedIn && (
          <li>
            <Link
              to="/profile"
              className="nav-link"
              style={{ textDecoration: "none" }}
            >
              Profile
            </Link>
          </li>
        )}
        <li>
          {!isLoggedIn ? (
            <Link
              to="/"
              className="nav-link "
              style={{ textDecoration: "none" }}
            >
              Login
            </Link>
          ) : (
            <Link
              to="/logout"
              className="nav-link "
              style={{ textDecoration: "none" }}
              onClick={handleLogout}
            >
              logout
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
