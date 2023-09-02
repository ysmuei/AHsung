import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const OrderDetail = () => {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <header className="header">
        <Link to="/OrderContent" style={{ backgroundColor: "black" }}>
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
        <p
          style={{
            fontSize: "40px",
            fontWeight: "500",
            margin: 0,
            color: "#555",
          }}
        >
          주문일자 : {}
        </p>
        <p
          style={{
            fontSize: "40px",
            fontWeight: "500",
            marginTop: 20,
            color: "#555",
          }}
        >
          납기요청일 : {} 까지
        </p>
        <p style={{ fontSize: "40px", fontWeight: 700, color: "#555" }}>{}</p>
        <p style={{ fontSize: "40px", marginTop: -24, color: "#BDBDBD" }}>{}</p>
        <hr />
        <h2 style={{ fontSize: 55, fontWeight: 700 }}>배송내역</h2>
        
          <div className="menuContain" >
            <div style={{ display: "flex" }}>
              <h3 style={{ fontSize: "45px", fontWeight: 700 }}>
                {}
              </h3>
              <h3
                style={{
                  fontSize: "45px",
                  color: "#BDBDBD",
                  marginLeft: 10,
                  fontWeight: 500,
                }}
              >
                ({0 * 30}개)
              </h3>
            </div>

            <div className="quantityButtons">
              
              <h3
                style={{
                  fontSize: "50px",
                  margin: "0 10px",
                  fontWeight: 500,
                }}
              >
                {}
              </h3>
              
            </div>
          </div>

        <div>
          <h2 style={{ fontSize: 55, fontWeight: 700 }}>주문 내역</h2>
          <div>
            {/* {quantities && Object.entries(quantities).map(([drinkName, quantity]) => {
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
            })} */}
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
              {} ({0 * 30}개)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
