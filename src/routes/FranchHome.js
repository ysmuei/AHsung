import React from "react";
import { Link } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import Profile from "./Profile";

const FranchHome = () => {
  const name = "유빈이네 닭갈비";
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#DFDFDF", display: "flex", flexDirection: "column", alignItems: 'center' }}>
      <Profile name={name} />
      <div className="order">
        <Link
          to="/Order"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className="basic_btn orderBtn">
            <FaFileAlt size="60" style={{ marginRight: "10px" }} />
            발주하기
          </button>
        </Link>
        <Link
          to="/Order"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className="basic_btn orderBtn">
            <FaBoxArchive size="60" style={{ marginRight: "10px" }} />
            발주현황
          </button>
        </Link>
      </div>
      
    </div>
  );
};

export default FranchHome;
