import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FaFileAlt } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";

const FranchHome = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // 1초마다 업데이트
    return () => {
      clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    };
  }, []);
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#DFDFDF" }}>
      <div className="profilForm">
        <header className="header">
          <img
            src={logo}
            style={{
              width: "30%",
              marginTop: "30px"
            }}
          />
        </header>
        <div
          style={{
            width: "100%",
            height: "auto", // 높이를 자동 조절
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <p style={{ fontSize: "3.5vw", marginTop: "8vw", fontWeight: "600" }}>
            {currentDate.toLocaleDateString("ko-KR", {
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
          </p>
          <h3
            style={{
              fontSize: "8vw",
              margin: 0,
              fontWeight: 500,
              wordWrap: "break-word",
            }}
          >
            <span style={{ color: "#A5CC2B", fontWeight: 700 }}>아성주류</span>
            님<br />
            안녕하세요
          </h3>
        </div>
      </div>
      <div className="order">
        <Link to="/Order" style={{width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button
            className="basic_btn"
            style={{
              backgroundColor: "#587302",
              width: "100%",
              fontSize: "45px",
            }}
          >
            발주하러 가기
          </button>
        </Link>
        <div
          style={{
            width: "80%",
            margin: "50px 0",
            marginTop: 40,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button className="basic_btn orderBtn">
            <FaFileAlt size="60" style={{ marginRight: "10px" }} />
            발주내역
          </button>
          <button className="basic_btn orderBtn">
            <FaBoxArchive size="60" style={{ marginRight: "10px" }} />
            발주현황
          </button>
        </div>
      </div>
    </div>
  );
};

export default FranchHome;
