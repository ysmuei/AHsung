import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 달력 스타일을 위한 CSS import
import { ko } from 'date-fns/esm/locale';
import { FaPen } from "react-icons/fa";

const Order = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택한 날짜를 상태로 관리
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#DFDFDF" }}>
      <div className="profilForm" style={{height: '30%'}}>
        <header className="header">
          <Link to="/FranchHome" state={{ backgroundColor: "black" }}>
            <FaChevronLeft
              size="70"
              style={{ position: "absolute", left: 50, top: 50 }}
            />
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
          <p style={{ fontSize: "40px", fontWeight: 500, margin: 0, marginBottom:30 }}>배송지</p>
          <h3 style={{ fontSize: 50, marginTop: -10, fontWeight: 900 }}>
            유빈이네 닭갈비
          </h3>
          <p style={{ fontSize: "40px", fontWeight: 500, margin: 0, marginTop: 20, marginBottom: 20}}>
            납기요청일
          </p>
          <DatePicker
            className="example-custom-input"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)} // 선택한 날짜를 업데이트
            customInput={
              <div
                style={{ width: 400, alignItems: "center", display: "flex" }}
              >
                <input
                  readOnly
                  value={formatDate(selectedDate)}
                  style={{
                    width: "350px",
                    fontSize: "60px",
                    fontWeight: 700,
                    color: "#A5CC2B",
                    border: "none",
                    background: "transparent",
                    outline: "none",
                  }}
                />
                <FaPen size="45" />
              </div>
            }
            withPortal
            locale={ko}
            dateFormat="yyyy MM dd" // 날짜 형식 지정
            minDate={new Date()}
          />
        </div>
      </div>
      <div className="order_list">
        <Link
          to="/OrderCheck"
          style={{ display: "flex", justifyContent: "center", position: "absolute", width: "100%", bottom: 100 }}
        >
          <button
            className="basic_btn"
            style={{ backgroundColor: "#587302", fontWeight: 500 }}
          >
            주문하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Order;
