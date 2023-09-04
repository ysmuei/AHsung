import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";

const Profile = ({ userObj }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const companyName = userObj.companyName;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // 1초마다 업데이트
    return () => {
      clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    };
  }, []);
  return (
    <div className="profilForm">
      <header className="header">
        <img
          src={logo}
          alt="로고"
          style={{
            width: "26%",
            marginTop: "5%",
          }}
        />
      </header>
      <div
        style={{
          width: "100%",// 높이를 자동 조절
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "4%",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            marginTop: "8%",
            marginBottom: "0px",
            fontWeight: "500",
            color: "#383838",
          }}
        >
          {currentDate.toLocaleDateString("ko-KR", {
            month: "long",
            day: "numeric",
            weekday: "long",
          })}
        </p>
        <h3
          style={{
            fontSize: "24px",
            marginBottom: "46px",
            fontWeight: 500,
            color: "#383838",
            wordWrap: "break-word",
          }}
        >
          <span style={{ color: "#A5CC2B", fontWeight: 700 }}>
            {companyName}
          </span>
          님<br />
          안녕하세요
        </h3>
      </div>
    </div>
  );
};

export default Profile;
