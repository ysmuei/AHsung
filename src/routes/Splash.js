import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

const Home = () => {
  const navigate = useNavigate();
  const [showHome, setShowHome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(false);
      navigate("/Login");
    }, 1500); // 2초 (2000ms)

    // 컴포넌트가 언마운트되면 타이머를 정리합니다.
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container" >
      <img src={logo} alt="아성주류발주어플" style={{ width: "50%", height: "80%" }} />
    </div>
  );
};

export default Home;
