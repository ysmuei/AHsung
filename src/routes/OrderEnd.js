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
    <div className="container" >
      <div className="orderEnd">
        <header className="header" style={{ height: "8%" }}>
          <Link to="/FranchHome">
            <MdClose
              size="26px"
              style={{
                position: "absolute",
                left: 20,
                top: 20,
                color: "#383838",
              }}
            />
          </Link>
        </header>
        <p style={{ fontSize: "24px", fontWeight: "700" }}>
          주문이 <br />
          완료 되었습니다!
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "500",
            margin: 0,
            color: "#555",
          }}
        >
          주문일자 : {currentDate}
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "500",
            marginTop: 5,
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
            style={{
              width: "100%",
              backgroundColor: "#587302",
              fontWeight: 500,
              margin: "5% 0%",
            }}
          >
            발주내역 보러가기
          </button>
        </Link>

        <div>
          <p style={{ fontSize: "22px", fontWeight: "700" }}>주문 내역</p>
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
                      marginBottom: 10,
                    }}
                  >
                    <p style={{ fontSize: "16px", margin: 0, color: "#555" }}>
                      {drinkName}
                    </p>
                    <p style={{ fontSize: "16px", margin: 0, color: "#555" }}>
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
              marginBottom: "70px",
            }}
          >
            <p
              style={{
                fontSize: 18,
                color: "#88B00C",
                marginBottom: "10%",
                fontWeight: 700,
              }}
            >
              총 주문 수량
            </p>
            <p style={{ fontSize: 18, color: "#88B00C", fontWeight: 700 }}>
              {totalQuantity} ({totalQuantity * 30}개)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderEnd;
