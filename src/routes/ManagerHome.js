import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const ManagerHome = () => {
  const name = "아성주류 관리자";
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#DFDFDF" }}>
      <Profile name={name} />
      <div className="order">
        <Link
          to="/"
          style={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", 
          }}
        >
          <button
            className="basic_btn"
            style={{
              backgroundColor: "#587302",
              width: "100%",
              fontSize: "45px",
            }}
          >
            발주 가맹점 현황 확인하기
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
        </div>
      </div>
    </div>
  );
};

export default ManagerHome;
