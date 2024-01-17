import { Link } from "react-router-dom";
import "./ProfileDropDown.css";
const ProfileDropDown = () => {
  return (
    <>
      <div className="profileDropDown">
        <div className="profileDropDownInner">
          <img src="https://picsum.photos/200" alt="" />
          <h3 className="name">Kausar Ahmad</h3>
          <p className="userName">kausar.ahmad</p>
          <Link to="/profile">
            <button className="profileDropDownBtn">View Profile</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileDropDown;
