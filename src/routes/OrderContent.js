import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaCheckCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 달력 스타일을 위한 CSS import
import { ko } from "date-fns/esm/locale";
import { RiCalendar2Fill } from "react-icons/ri";

const OrderContent = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="container" style={{ backgroundColor: "#F8F8F8" }}>
      <header className="header">
        <Link to="/FranchHome">
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
        <p style={{ fontSize: "20px", fontWeight: "700", color: "#383838" }}>
          발주내역
        </p>
      </header>
      <div className="profilForm" style={{height: "12%"}}>
        <div
          style={{
            width: "100%",
            height: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <RiCalendar2Fill
            size="20"
            style={{ color: "#587302", marginRight: 10, marginTop: 3 }}
          />
          <DatePicker
            className="order-custom-inout"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            withPortal
            locale={ko}
            dateFormat="yyyy.MM.dd" // 날짜 형식 지정
            maxDate={new Date()}
          />
        </div>
      </div>
      <div className="order_list">
        <Link
          to=""
          style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "-8%" }}
        >
          <button
            className="basic_btn"
            style={{ backgroundColor: "#587302", fontWeight: 500}}
          >
            조회조건 변경
          </button>
        </Link>

        <Link
          to="/OrderDetail"
          style={{width: "90%", display: "flex", justifyContent: "center", marginTop: "6%" }}
        >
          <div className="orderContent">
            <div>
              <h2 style={{ fontSize: 16, margin: 0, marginBottom: 10 }}>배송일자</h2>
              <p style={{ fontSize: 12, color: "#BDBDBD", margin: 0 }}>주문일자</p>
            </div>
            <div style={{ marginLeft: "-20%" }}>
              <h2 style={{ fontSize: 16, margin: 0, marginBottom: 10 }}>2023.08.03</h2>
              <p style={{ fontSize: 12, color: "#BDBDBD", margin: 0 }}>2023.07.09</p>
            </div>
            <div>
              <h2 style={{ fontSize: 12, display: "flex", color: "#587302", margin: 0, marginBottom: 10 }}>
                <FaCheckCircle
                  size="16"
                  style={{ marginRight: 5, color: "#587302" }}
                />
                발주완료
              </h2>
              <p style={{ fontSize: 12, color: "#587302", margin: 0, fontWeight: 500 }}>2023.07.31</p>
            </div>
          </div>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default OrderContent;
