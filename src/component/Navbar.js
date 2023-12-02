import React, {useState} from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  loginState,
  setLoginState,
  authenticate,
  setAuthenticate,
}) => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(0)

  const goToLoginPage = () => {
    navigate("/login");
  };

  const goToHomePage = () => {
    navigate("/");
  };

  const logOut = () => {
    setAuthenticate(false);
    setLoginState("로그인");
  };

  const menus = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  return (
    <div>
      <div className="side-menu" style={{width: width}}>
        <FontAwesomeIcon className="close-btn" icon={faXmark} onClick={()=> setWidth(0)}/>
        <ul className="side-menu-list">
          {menus.map((i)=>(
            <li>{i}</li>
          ))}
        </ul>        
      </div>
      <div className="first-line">
        <div>
          <FontAwesomeIcon icon={faBars} className="menu-burger-icon hide" onClick={()=> setWidth(250)}/>
        </div>
        <div className="login-area">
          <div
            className="login"
            onClick={authenticate === false ? goToLoginPage : logOut}
          >
            <FontAwesomeIcon icon={faUser} className="login-icon" />
            {loginState}
          </div>
        </div>
      </div>
      <div className="logo-area">
        <img
          onClick={goToHomePage}
          className="logo"
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
        />
      </div>
    </div>
  );
};

export default Navbar;
