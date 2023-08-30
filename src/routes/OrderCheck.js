import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const OrderCheck = ({ userObj }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };
  const date = state ? formatDate(state.selectedDate) : null;
  const quantities = state ? state.quantities : null;
  if (quantities) {
    console.log("Quantities:", quantities);
    console.log("date", date);
  }
  let totalQuantity = 0;
  if (quantities) {
    Object.values(quantities).forEach((quantity) => {
      totalQuantity += quantity;
    });
  }
  
  return (
    <div className="container" style={{ height: "100vh" }}>
      <header className="header">
        <Link to="/Order" style={{ backgroundColor: "black" }}>
          <FaChevronLeft
            size="55"
            style={{
              position: "absolute",
              left: 60,
              top: 60,
              color: "#383838",
            }}
          />
        </Link>
        <p style={{ fontSize: "45px", fontWeight: "600", color: "#383838" }}>
          발주확인
        </p>
      </header>
      <div
        style={{
          width: "100%",
          height: "100vh",
          padding: 30,
        }}
      >
        <h2 style={{ fontSize: 55, fontWeight: 700 }}>배송지</h2>
        <p style={{ fontSize: "40px", fontWeight: 700, color: "#555" }}>
          {userObj.companyName}
        </p>
        <p style={{ fontSize: "40px", marginTop: -24, color: "#BDBDBD" }}>
          {userObj.address}
        </p>
        <hr />
        <h2 style={{ fontSize: 55, fontWeight: 700 }}>납기요청일</h2>
        <p
          style={{
            fontSize: "40px",
            marginTop: -20,
            color: "#555",
            fontWeight: 500,
          }}
        >
          {date} 까지
        </p>
        <hr style={{ marginBottom: 50 }} />
        <div>
          <h2 style={{ fontSize: 55, fontWeight: 700 }}>주문 내역</h2>
          <div>
            {quantities && Object.entries(quantities).map(([drinkName, quantity]) => {
              if (quantity > 0) {
                return (
                  <div
                    key={drinkName}
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 20,
                    }}
                  >
                    <p style={{ fontSize: "40px", margin: 0, color: "#555" }}>
                      {drinkName}
                    </p>
                    <p style={{ fontSize: "40px", margin: 0, color: "#555" }}>
                      {quantity}({quantity * 30})개
                    </p>
                  </div>
                );
              }
              return null;
            })}
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
            <p
              style={{
                fontSize: 45,
                color: "#88B00C",
                marginBottom: "15%",
                fontWeight: 700,
              }}
            >
              총 주문수량
            </p>
            <p style={{ fontSize: 45, color: "#88B00C", fontWeight: 700 }}>
              {totalQuantity} ({totalQuantity * 30}개)
            </p>
          </div>
        </div>

        <button
          className="basic_btn"
          style={{
            backgroundColor: "#587302",
            fontWeight: 500,
            position: "absolute",
            bottom: 120,
          }}
          onClick={() =>
            navigate('/OrderEnd', {
              state: {
                date: date,
                quantities: quantities,
                totalQuantity: totalQuantity
              }
            })
          }
        >
          주문하기
        </button>
      </div>
    </div>
  );
};

export default OrderCheck;
