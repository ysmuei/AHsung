import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const OrderDetail = () => {
  return (
    <div className="container">
      <header className="header">
        <Link to="/OrderContent">
          <FaChevronLeft
            size="20"
            style={{
              position: "absolute",
              left: 25,
              top: 25,
              color: "#383838",
            }}
          />
        </Link>
        <p style={{ fontSize: "20px", fontWeight: "600", color: "#383838" }}>
          발주내역
        </p>
      </header>
      <div
        style={{
          width: "100%",
          height: "100vh",
          padding: "0% 4%",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            fontWeight: "500",
            margin: 0,
            color: "#555",
          }}
        >
          주문일자 : {}
        </p>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "500",
            marginTop: "2%",
            color: "#555",
          }}
        >
          납기요청일 : {} 까지
        </p>
        <p style={{ fontSize: "18px", fontWeight: 700, color: "#555" }}>{}</p>
        <p style={{ fontSize: "18px", marginTop: "2%", color: "#BDBDBD" }}>{}</p>
  
        <h2 style={{ fontSize: "20px", fontWeight: 700 }}>배송내역</h2>
        
          <div className="menuContain" >
            <div style={{ display: "flex" }}>
              <h3 style={{ fontSize: "20px", fontWeight: 700 }}>
                {}
              </h3>
              <h3
                style={{
                  fontSize: "16px",
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
          <h2 style={{ fontSize: 22, fontWeight: 700 }}>주문 내역</h2>
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
                fontSize: 18,
                color: "#88B00C",
                marginBottom: "15%",
                fontWeight: 700,
              }}
            >
              총 주문수량
            </p>
            <p style={{ fontSize: 18, color: "#88B00C", fontWeight: 700 }}>
              {} ({0 * 30}개)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
