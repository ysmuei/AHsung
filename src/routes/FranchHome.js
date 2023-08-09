import React from "react";
import logo from "../images/logo.svg";

const FranchHome = () => {
  return (
    <div className="container" style={{justifyContent: 'flex-start', backgroundColor: '#DFDFDF'}}>
      <div className="profilForm">
        <header className="header">
          <img
            src={logo}
            alt="아성주류발주어플"
            style={{
              width: "25vw",
              height: "70px",
            }}
          />
        </header>
        <div style={{ width: "100%", height: 300 }}>
          <p style={{ fontSize: 50, marginTop: 100 }}>7월 6일 목요일</p>
          <h3 style={{ fontSize: 70, fontWeight: 500, wordWrap: "break-word" }}>
          <span style={{ color: "#A5CC2B", fontWeight: 700 }}>아성주류</span>님 <br />
            안녕하세요
          </h3>
        </div>
      </div>
      <div className="order">
            <button className="basic_btn" style={{backgroundColor: "#587302"}}>발주하러가기</button>
            <div style={{width: "100%", height: "7vh", marginTop:40, display:"flex", justifyContent: 'space-between'}}>
                <button className="basic_btn orderBtn">발주내역</button>
                <button className="basic_btn orderBtn">발주현황</button>
            </div>
      </div>
    </div>
  );
};

export default FranchHome;
