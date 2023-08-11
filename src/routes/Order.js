import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#DFDFDF" }}>
      <div className="profilForm">
        <header className="header">
            <Link to="/FranchHome" state={{ backgroundColor: "black" }}>
              <FaChevronLeft size="70" style={{ position: 'absolute', left: 50, top: 50 }} />
            </Link>
            <p style={{ fontSize: "45px", fontWeight: "600" }}>발주하기</p>
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
          <p style={{fontSize: '40px', fontWeight: 500}}>배송지</p>
          <h3 style={{fontSize: 50, marginTop: -10, fontWeight: 900}}>유빈이네 닭갈비</h3>
          <p style={{fontSize: '40px', fontWeight: 500, marginTop: 20}}>납기요청일</p>
          <p style={{fontSize: '40px', fontWeight: 500, marginTop: -20, color: '#A5CC2B', fontSize: 50, fontWeight: 600}}>2023.08.01</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
