import React from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useLocation } from "react-router-dom";

const OrderEnd = () => {
  const location = useLocation();
  const state = location.state;

  const deliveryDate = state ? state.date : null;
  const quantities = state ? state.quantities : null;
  const totalQuantity = state ? state.totalQuantity : null;
  
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };
  const currentDate = formatDate(new Date());
  

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#F8F8F8",
        height: "100vh",
        justifyContent: "start",
      }}
    >
      <div className="orderEnd">
        <header className="header" style={{ height: 120 }}>
          <Link to="/FranchHome" state={{}}>
            <MdClose
              size="65"
              style={{
                position: "absolute",
                left: 50,
                top: 60,
                color: "#383838",
              }}
            />
          </Link>
        </header>
        <p style={{ fontSize: "70px", fontWeight: "700" }}>
          주문이 <br />
          완료 되었습니다!
        </p>
        <p
          style={{
            fontSize: "40px",
            fontWeight: "500",
            margin: 0,
            color: "#555",
          }}
        >
          주문일자 : {currentDate}
        </p>
        <p
          style={{
            fontSize: "40px",
            fontWeight: "500",
            marginTop: 20,
            color: "#555",
          }}
        >
          납기요청일 : {deliveryDate} 까지
        </p>

        <Link
          to="/OrderContent"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button
            className="basic_btn"
            style={{ backgroundColor: "#587302", fontWeight: 500, margin: 24 }}
          >
            발주내역 보러가기
          </button>
        </Link>

        <div>
          <p style={{ fontSize: "50px", fontWeight: "700" }}>주문 내역</p>
          <div>
            {Object.entries(quantities).map(([drinkName, quantity]) => {
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
                fontSize: 40,
                color: "#88B00C",
                marginBottom: "10%",
                fontWeight: 700,
              }}
            >
              총 주문 수량
            </p>
            <p style={{ fontSize: 40, color: "#88B00C", fontWeight: 700 }}>
            {totalQuantity} ({totalQuantity * 30}개)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderEnd;
