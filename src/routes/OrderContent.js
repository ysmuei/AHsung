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
  // const formatDate = (date) => {
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const day = String(date.getDate()).padStart(2, "0");
  //   return `${year}.${month}.${day}`;
  // };
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#F8F8F8" }}>
      <div className="profilForm" style={{ height: 400 }}>
        <header className="header">
          <Link to="/FranchHome" state={{ backgroundColor: "black" }}>
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
          <p style={{ fontSize: "45px", fontWeight: "700", color: "#383838" }}>
            발주내역
          </p>
        </header>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <RiCalendar2Fill
            size="60"
            style={{ color: "#587302", marginRight: 0, marginTop: 10 }}
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
          to="/OrderCheck"
          style={{ display: "flex", justifyContent: "center", marginTop: -70 }}
        >
          <button
            className="basic_btn"
            style={{ backgroundColor: "#587302", fontWeight: 500 }}
          >
            조회조건 변경
          </button>
        </Link>

        <Link
          to="/OrderCheck"
          style={{ display: "flex", justifyContent: "center", marginTop: 60 }}
        >
          <div className="orderContent">
            <div>
              <h2 style={{fontSize: 40}}>배송일자</h2>
              <p style={{fontSize: 30}}>주문일자</p>
            </div>
            <div style={{marginLeft: -100}}>
              <h2 style={{fontSize: 40}}>2023.08.03</h2>
              <p style={{fontSize: 30}}>2023.07.09</p>
            </div>
            <div>
              <h2 style={{fontSize: 30, display: 'flex', color: "#587302"}}><FaCheckCircle size="40" style={{marginRight: 20, color: "#587302"}}/>발주완료</h2>
              <p style={{fontSize: 30, color: "#587302"}}>2023.07.31</p>
            </div>
          </div>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default OrderContent;
