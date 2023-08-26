import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 달력 스타일을 위한 CSS import
import { ko } from "date-fns/esm/locale";
import { FaPen } from "react-icons/fa";
import soju from "../images/soju.svg";
import sojuGray from "../images/sojuGray.svg";
import beer from "../images/beer.svg";
import beerGray from "../images/beerGray.svg";
import liquor from "../images/liquor.svg";
import liquorGray from "../images/liquorGray.svg";
import makgeolli from "../images/makgeolli.svg";
import makgeolliGray from "../images/makgeolliGray.svg";

const Order = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택한 날짜를 상태로 관리
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };
  const [selectedTab, setSelectedTab] = useState("소주"); // 기본으로 소주 탭 선택

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#DFDFDF" }}>
      <div className="profilForm" style={{ height: "30%" }}>
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
          <p
            style={{
              fontSize: "40px",
              fontWeight: 500,
              margin: 0,
              marginBottom: 30,
            }}
          >
            배송지
          </p>
          <h3 style={{ fontSize: 50, marginTop: -10, fontWeight: 900 }}>
            유빈이네 닭갈비
          </h3>
          <p
            style={{
              fontSize: "40px",
              fontWeight: 500,
              margin: 0,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
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
      <div className="tabView">
        <div className="tabButtons">
          <div className="tabName">
            <button
              className={`tabButton ${selectedTab === "소주" ? "active" : ""}`}
              onClick={() => handleTabClick("소주")}
            >
              <img className="orderImg" src={selectedTab === "소주" ? soju : sojuGray} alt="소주" />
              
            </button>
            <p className={`alcoholName ${selectedTab === "소주" ? "active" : ""}`}>소주</p>
          </div>
          <div className="tabName">
          <button
            className={`tabButton ${selectedTab === "맥주" ? "active" : ""}`}
            onClick={() => handleTabClick("맥주")}
          >
            <img className="orderImg" src={selectedTab === "맥주" ? beer : beerGray} alt="맥주" />
          
          </button>
            <p className={`alcoholName ${selectedTab === "맥주" ? "active" : ""}`}>맥주</p>
          </div>
          <div className="tabName">
          <button
            className={`tabButton ${selectedTab === "막걸리" ? "active" : ""}`}
            onClick={() => handleTabClick("막걸리")}
          >
            <img className="orderImg" src={selectedTab === "막걸리" ? makgeolli : makgeolliGray} alt="막걸리" />
          
          </button>
            <p className={`alcoholName ${selectedTab === "막걸리" ? "active" : ""}`}>막걸리</p>
          </div>
          <div className="tabName">
          <button
            className={`tabButton ${selectedTab === "양주" ? "active" : ""}`}
            onClick={() => handleTabClick("양주")}
          >
            <img className="orderImg" src={selectedTab === "양주" ? liquor : liquorGray} alt="양주" />
          </button>
            <p className={`alcoholName ${selectedTab === "양주" ? "active" : ""}`}>양주</p>
          </div>
          <div className="tabName">
          <button
            className={`tabButton ${selectedTab === "비고" ? "active" : ""}`}
            onClick={() => handleTabClick("비고")}
          >
            비고
          </button>
            <p className={`alcoholName ${selectedTab === "비고" ? "active" : ""}`}>비고</p>
          </div>
          
        </div>
        {/* ... (다른 탭들의 컨텐츠도 마찬가지로 추가) */}
        <div className="tabContent">
          {/* 선택된 탭에 따라 주류 종류 리스트 표시 */}
          <ul>
            {selectedTab === "소주" && (
              <>
                <li>소주 종류 1</li>
                <li>소주 종류 2</li>
                {/* ... (소주 탭에 대한 주류 종류들 추가) */}
              </>
            )}
            {selectedTab === "맥주" && (
              <>
                <li>병맥주</li>
                <li>생맥주</li>
                {/* ... (맥주 탭에 대한 주류 종류들 추가) */}
              </>
            )}
            {/* ... (다른 탭들의 주류 종류 리스트도 마찬가지로 추가) */}
          </ul>
        </div>
        {/* ... (다른 탭들의 컨텐츠도 마찬가지로 추가) */}
      </div>

      <Link
        to="/OrderCheck"
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          width: "100%",
          bottom: 100,
        }}
      >
        <button
          className="basic_btn"
          style={{ backgroundColor: "#587302", fontWeight: 500 }}
        >
          주문하기
        </button>
      </Link>
    </div>
  );
};

export default Order;
