import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../context/AuthProvider";
import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
// import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const { login, logout, state } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };

  // useEffect(() => {
  //   if (!state.user || state.user.length === 0) {
  //     navigate("/login");
  //   }
  // }, [state.user, navigate]);
  return (
    <>
      <nav className="full-screen-nav">
        <div className="logo">
          <Link to="/">
            <h3>Booking.bd</h3>
          </Link>
        </div>
        <div>
          <div className="links">
            <Link to="/signup">
              {" "}
              <button className="reg-btn">Register</button>
            </Link>
            <Link to="/login">
              <button className="login-btn">Log In</button>
            </Link>
            <button className="login-btn" onClick={(e) => handleLogout(e)}>
              Log Out
            </button>
          </div>
          <div className="profile"></div>
        </div>
        <div className="profile" onClick={handleProfileClick}>
          <BsPersonCircle />
        </div>
        <div className="sidebar">{/* <RxHamburgerMenu /> */}</div>
      </nav>
      {profileOpen && <ProfileDropDown />}
    </>
  );
};

export default Navbar;
