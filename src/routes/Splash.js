import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 150);
  };
  return (
    <div className="container">
      <Link to="/ManagerLogin" style={{ marginBottom: "70%", marginTop: "40%" }}>
        <img src={logo} alt="아성주류발주어플" style={{ width: "100%" }} />
      </Link>
      <Link to="/Login" style={{width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <button
          className={`basic_btn ${isClicked ? "clicked" : ""}`}
          onClick={handleButtonClick}
        >
          가맹점주 로그인
        </button>
      </Link>
    </div>
  );
};

export default Home;
