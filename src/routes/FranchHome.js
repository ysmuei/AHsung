import React from "react";
import { Link } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import Profile from "./Profile";

const FranchHome = ({ sessionData }) => {
  const companyName = sessionData.상호명;
  return (
    <div className="franchHome">
      <Profile companyName={companyName} />
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
            <FaFileAlt size="24" style={{ marginRight: "8%" }} />
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
            <FaBoxArchive size="24" style={{ marginRight: "8%" }} />
            발주내역
          </button>
        </Link>
      </div>
      
    </div>
  );
};

export default FranchHome;
