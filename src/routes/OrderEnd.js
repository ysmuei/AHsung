import React from "react";
import { Link } from "react-router-dom";

const OrderEnd = () => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#F8F8F8",
        height: "100vh",
        justifyContent: "start",
      }}
    >
      <div style={{ backgroundColor: "white", width: "100%", paddingLeft: 30, paddingRight: 30 }}>
        <header className="header"></header>
        <p style={{ fontSize: "70px", fontWeight: "700" }}>
          주문이 <br />
          완료 되었습니다!
        </p>
        <p style={{ fontSize: "40px", fontWeight: "500", margin: 0 }}>
          주문일자 : 2023.07.07
        </p>
        <p style={{ fontSize: "40px", fontWeight: "500", marginTop: 20 }}>
          납기요청일 : 2023.08.01 까지
        </p>

        <Link
          to="/OrderContent"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button
            className="basic_btn"
            style={{ backgroundColor: "#587302", fontWeight: 500 }}
          >
            발주내역 보러가기
          </button>
        </Link>

        <div>
          <p style={{ fontSize: "50px", fontWeight: "700" }}>총 주문 수량</p>
          <div>
            <div
              style={{
                width: "100%",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 30,
              }}
            >
              <p style={{ fontSize: "40px", margin: 0 }}>카스 300ml</p>
              <p style={{ fontSize: "40px", margin: 0 }}>4(120)개</p>
            </div>
            <div
              style={{
                width: "100%",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 30,
              }}
            >
              <p style={{ fontSize: "40px", margin: 0 }}>카프리 500ml</p>
              <p style={{ fontSize: "40px", margin: 0 }}>1(30)개</p>
            </div>
          </div>
          <hr />
          <div
            style={{
              width: "100%",
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: 40, color: "#88B00C", marginBottom: "10%" }}>
              총 주문 수량
            </p>
            <p style={{ fontSize: 40, color: "#88B00C" }}>5 (150개)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderEnd;
