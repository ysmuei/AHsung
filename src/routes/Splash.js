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
        <Link to="/Login">
          <img src={logo} alt="아성주류발주어플" style={{ width: "380px", height: "150px", marginBottom: 500, marginTop: 150 }} />
        </Link>
        
        <button
          className={`basic_btn ${isClicked ? "clicked" : ""}`}
          onClick={handleButtonClick}
        >
          가맹점주 로그인
        </button>
    </div>
  );
};

export default Home;
