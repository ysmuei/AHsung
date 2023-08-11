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
        <Link to="/Login" style={{ marginBottom: "70%", marginTop: "40%"}}>
          <img src={logo} alt="아성주류발주어플" style={{ width: "470px"}} />
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
