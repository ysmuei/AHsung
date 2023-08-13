import React from "react";
import { Link } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import Profile from "./Profile";

const FranchHome = () => {
  const name = "유빈이네 닭갈비"
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#DFDFDF" }}>
      <Profile name={name}/>
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
