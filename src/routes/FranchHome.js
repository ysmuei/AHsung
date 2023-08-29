import React from "react";
import { Link } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import Profile from "./Profile";

const FranchHome = () => {
  const name = "유빈이네 닭갈비";
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#F8F8F8", display: "flex", flexDirection: "column", alignItems: 'center' }}>
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
            <FaFileAlt size="65" style={{ marginRight: "12px" }} />
            발주하기
          </button>
        </Link>
        <Link
          to="/OrderContent"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className="basic_btn orderBtn">
            <FaBoxArchive size="65" style={{ marginRight: "12px" }} />
            발주내역
          </button>
        </Link>
      </div>
      
    </div>
  );
};

export default FranchHome;
