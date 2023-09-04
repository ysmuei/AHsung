import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
import add from "../images/add.svg";
import sub from "../images/sub.svg";

const Order = ({ userObj }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택한 날짜를 상태로 관리
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };
  const [selectedTab, setSelectedTab] = useState("소주"); // 기본으로 소주 탭 선택
  const [selectedBeerTab, setSelectedBeerTab] = useState("병맥주");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const handleBeerTabClick = (tab) => {
    setSelectedBeerTab(tab);
  };

  const [quantities, setQuantities] = useState({
    후레쉬: 0,
    클래식: 0,
    매화수: 0,
    진로이즈백: 0,
    "클래식1.8L": 0,
    처음처럼: 0,
    청하: 0,
    이제우린: 0,
    스카치: 0,
    발렌타인: 0,
    골든블루: 0,
    카스: 0,
    맥스: 0,
    테라: 0,
    클라우드: 0,
    카스330: 0,
    카스500: 0,
    버드330: 0,
    카프리330: 0,
    클라우드500: 0,
    클라우드330: 0,
    테라330: 0,
    테라500: 0,
    "기네스(생)": 0,
    "호가든(생)": 0,
    코로나: 0,
    호가든: 0,
    기네스D: 0,
    하이네캔: 0,
    산미구엘P: 0,
    "칭따오(대)": 0,
    백세주: 0,
    쌀막걸리: 0,
    복분자: 0,
    탄산가스: 0,
  });
  const handleQuantityChange = (drink, operation) => {
    if (operation === "+") {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [drink]: prevQuantities[drink] + 1,
      }));
    } else if (operation === "-") {
      if (quantities[drink] > 0) {
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
          [drink]: prevQuantities[drink] - 1,
        }));
      }
    }
  };
  const sojus = [
    { name: "후레쉬" },
    { name: "클래식" },
    { name: "매화수" },
    { name: "진로이즈백" },
    { name: "클래식1.8L" },
    { name: "처음처럼" },
    { name: "청하" },
    { name: "이제우린" },
  ];
  const beers1 = [
    { name: "카스330" },
    { name: "카스500" },
    { name: "버드330" },
    { name: "카프리330" },
    { name: "클라우드330" },
    { name: "클라우드500" },
    { name: "테라330" },
    { name: "테라500" },
  ];
  const beers2 = [
    { name: "맥스" },
    { name: "카스" },
    { name: "클라우드" },
    { name: "테라" },
  ];
  const beers3 = [
    { name: "코로나" },
    { name: "호가든" },
    { name: "기네스D" },
    { name: "하이네캔" },
    { name: "산미구엘P" },
    { name: "칭따오(대)" },
  ];
  const beers4 = [{ name: "기네스(생)" }, { name: "호가든(생)" }];

  const liquors = [
    { name: "스카치" },
    { name: "발렌타인" },
    { name: "골든블루" },
  ];

  const otherAlcohol = [
    { name: "쌀막걸리" },
    { name: "백세주" },
    { name: "복분자" },
    { name: "탄산가스" },
  ];
  return (
    <div className="orderContain">
      <header className="header" style={{ backgroundColor: "white" }}>
        <Link to="/FranchHome">
          <FaChevronLeft
            size="16"
            style={{
              position: "absolute",
              left: 25,
              top: 25,
              color: "#555555",
            }}
          />
        </Link>
        <p style={{ fontSize: "16px", fontWeight: "700", color: "#555555" }}>
          발주하기
        </p>
      </header>
      <div className="profilForm">
        <div
          style={{
            width: "100%", // 높이를 자동 조절
            display: "flex",
            paddingBottom: "35px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#555"
            }}
          >
            배송지
          </p>
          <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0px", marginBottom: "6%" }}>
            {userObj.companyName}
          </h3>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#555",
              marginTop: "5%",
              marginBottom: "4%",
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
                style={{width: "150px" ,alignItems: "center", display: "flex", gap: "10px"}}
              >
                <input
                  readOnly
                  value={formatDate(selectedDate)}
                  style={{
                    width: "110px",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#A5CC2B",
                    border: "none",
                    background: "transparent",
                    outline: "none",
                  }}
                />
                <FaPen size="16" style={{width: "16px"}}/>
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
              <img
                className="orderImg"
                src={selectedTab === "소주" ? soju : sojuGray}
                alt="소주"
              />
            </button>
            <p
              className={`alcoholName ${
                selectedTab === "소주" ? "active" : ""
              }`}
            >
              소주
            </p>
          </div>
          <div className="tabName">
            <button
              className={`tabButton ${selectedTab === "맥주" ? "active" : ""}`}
              onClick={() => handleTabClick("맥주")}
            >
              <img
                className="orderImg"
                src={selectedTab === "맥주" ? beer : beerGray}
                alt="맥주"
              />
            </button>
            <p
              className={`alcoholName ${
                selectedTab === "맥주" ? "active" : ""
              }`}
            >
              맥주
            </p>
          </div>
          <div className="tabName">
            <button
              className={`tabButton ${selectedTab === "양주" ? "active" : ""}`}
              onClick={() => handleTabClick("양주")}
            >
              <img
                className="orderImg"
                src={selectedTab === "양주" ? liquor : liquorGray}
                alt="양주"
              />
            </button>
            <p
              className={`alcoholName ${
                selectedTab === "양주" ? "active" : ""
              }`}
            >
              양주
            </p>
          </div>
          <div className="tabName">
            <button
              className={`tabButton ${
                selectedTab === "기타" ? "active" : ""
              }`}
              onClick={() => handleTabClick("기타")}
            >
              <img
                className="orderImg"
                src={selectedTab === "기타" ? makgeolli : makgeolliGray}
                alt="막걸리"
              />
            </button>
            <p
              className={`alcoholName ${
                selectedTab === "기타" ? "active" : ""
              }`}
            >
              기타
            </p>
          </div>
          
          <div className="tabName">
            <button
              className={`tabButton ${selectedTab === "비고" ? "active" : ""}`}
              onClick={() => handleTabClick("비고")}
            >
              <FaPen size="16" color="white" style={{height: 20, width: 20}}/>
            </button>
            <p
              className={`alcoholName ${
                selectedTab === "비고" ? "active" : ""
              }`}
            >
              비고
            </p>
          </div>
        </div>
        <div className="tabContent">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selectedTab === "소주" && (
              <>
                {sojus.map((drink) => (
                  <div className="menuContain" key={drink.name}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                      <h3 style={{ fontSize: "16px", fontWeight: 700 }}>
                        {drink.name}
                      </h3>
                      <h3
                        style={{
                          fontSize: "16px",
                          color: "#BDBDBD",
                          marginLeft: 10,
                          fontWeight: 500,
                        }}
                      >
                        ({quantities[drink.name] * 30}개)
                      </h3>
                    </div>

                    <div className="quantityButtons">
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "-")}
                      >
                        <img className="countBtn" src={sub} alt="sub" />
                      </button>
                      <h3
                        style={{
                          fontSize: "16px",
                          margin: "0 10px",
                          fontWeight: 500,
                          color:
                            quantities[drink.name] !== 0
                              ? "#A5CC2B"
                              : "#BDBDBD",
                        }}
                      >
                        {quantities[drink.name]}
                      </h3>
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "+")}
                      >
                        <img className="countBtn" src={add} alt="add" />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
            {selectedTab === "맥주" && (
              <>
                <div className="tabBeerButtons">
                    <button
                      className={`tabBeerButton ${
                        selectedBeerTab === "병맥주" ? "active" : ""
                      }`}
                      onClick={() => handleBeerTabClick("병맥주")}
                    >
                      병맥주
                    </button>
                    <button
                      className={`tabBeerButton ${
                        selectedBeerTab === "생맥주" ? "active" : ""
                      }`}
                      onClick={() => handleBeerTabClick("생맥주")}
                    >
                      생맥주
                    </button>
                    <button
                      style={{width: "80px"}}
                      className={`tabBeerButton ${
                        selectedBeerTab === "수입맥주" ? "active" : ""
                      }`}
                      onClick={() => handleBeerTabClick("수입맥주")}
                    >
                      수입맥주
                    </button>
                    <button
                      style={{width: "90px"}}
                      className={`tabBeerButton ${
                        selectedBeerTab === "수입생맥주" ? "active" : ""
                      }`}
                      onClick={() => handleBeerTabClick("수입생맥주")}
                    >
                      수입생맥주
                    </button>
                </div>
                <div className="tabContent">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "30px"
                    }}
                  >
                    {selectedBeerTab === "병맥주" && (
                      <>
                        {beers1.map((drink) => (
                  <div className="menuContain" key={drink.name}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                      <h3 style={{ fontSize: "16px", fontWeight: 700 }}>
                        {drink.name}
                      </h3>
                      <h3
                        style={{
                          fontSize: "16px",
                          color: "#BDBDBD",
                          marginLeft: 10,
                          fontWeight: 500,
                        }}
                      >
                        ({quantities[drink.name] * 30}개)
                      </h3>
                    </div>

                    <div className="quantityButtons">
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "-")}
                      >
                        <img className="countBtn" src={sub} alt="sub" />
                      </button>
                      <h3
                        style={{
                          fontSize: "16px",
                          margin: "0 10px",
                          fontWeight: 500,
                          color:
                            quantities[drink.name] !== 0
                              ? "#A5CC2B"
                              : "#BDBDBD",
                        }}
                      >
                        {quantities[drink.name]}
                      </h3>
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "+")}
                      >
                        <img className="countBtn" src={add} alt="add" />
                      </button>
                    </div>
                  </div>
                ))}
                      </>
                    )}
                    {selectedBeerTab === "생맥주" && (
                      <>
                        {beers2.map((drink) => (
                  <div className="menuContain" key={drink.name}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                      <h3 style={{ fontSize: "16px", fontWeight: 700 }}>
                        {drink.name}
                      </h3>
                      <h3
                        style={{
                          fontSize: "16px",
                          color: "#BDBDBD",
                          marginLeft: 10,
                          fontWeight: 500,
                        }}
                      >
                        ({quantities[drink.name] * 30}개)
                      </h3>
                    </div>

                    <div className="quantityButtons">
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "-")}
                      >
                        <img className="countBtn" src={sub} alt="sub" />
                      </button>
                      <h3
                        style={{
                          fontSize: "16px",
                          margin: "0 10px",
                          fontWeight: 500,
                          color:
                            quantities[drink.name] !== 0
                              ? "#A5CC2B"
                              : "#BDBDBD",
                        }}
                      >
                        {quantities[drink.name]}
                      </h3>
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "+")}
                      >
                        <img className="countBtn" src={add} alt="add" />
                      </button>
                    </div>
                  </div>
                ))}
                      </>
                    )}
                    {selectedBeerTab === "수입맥주" && (
                      <>
                        {beers3.map((drink) => (
                  <div className="menuContain" key={drink.name}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                      <h3 style={{ fontSize: "16px", fontWeight: 700 }}>
                        {drink.name}
                      </h3>
                      <h3
                        style={{
                          fontSize: "16px",
                          color: "#BDBDBD",
                          marginLeft: 10,
                          fontWeight: 500,
                        }}
                      >
                        ({quantities[drink.name] * 30}개)
                      </h3>
                    </div>

                    <div className="quantityButtons">
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "-")}
                      >
                        <img className="countBtn" src={sub} alt="sub" />
                      </button>
                      <h3
                        style={{
                          fontSize: "16px",
                          margin: "0 10px",
                          fontWeight: 500,
                          color:
                            quantities[drink.name] !== 0
                              ? "#A5CC2B"
                              : "#BDBDBD",
                        }}
                      >
                        {quantities[drink.name]}
                      </h3>
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "+")}
                      >
                        <img className="countBtn" src={add} alt="add" />
                      </button>
                    </div>
                  </div>
                ))}
                      </>
                    )}
                    {selectedBeerTab === "수입생맥주" && (
                      <>
                        {beers4.map((drink) => (
                  <div className="menuContain" key={drink.name}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                      <h3 style={{ fontSize: "16px", fontWeight: 700 }}>
                        {drink.name}
                      </h3>
                      <h3
                        style={{
                          fontSize: "16px",
                          color: "#BDBDBD",
                          marginLeft: 10,
                          fontWeight: 500,
                        }}
                      >
                        ({quantities[drink.name] * 30}개)
                      </h3>
                    </div>

                    <div className="quantityButtons">
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "-")}
                      >
                        <img className="countBtn" src={sub} alt="sub" />
                      </button>
                      <h3
                        style={{
                          fontSize: "16px",
                          margin: "0 10px",
                          fontWeight: 500,
                          color:
                            quantities[drink.name] !== 0
                              ? "#A5CC2B"
                              : "#BDBDBD",
                        }}
                      >
                        {quantities[drink.name]}
                      </h3>
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "+")}
                      >
                        <img className="countBtn" src={add} alt="add" />
                      </button>
                    </div>
                  </div>
                ))}
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
            {selectedTab === "양주" && (
              <>
                {liquors.map((drink) => (
                  <div className="menuContain" key={drink.name}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                      <h3 style={{ fontSize: "16px", fontWeight: 700 }}>
                        {drink.name}
                      </h3>
                      <h3
                        style={{
                          fontSize: "16px",
                          color: "#BDBDBD",
                          marginLeft: 10,
                          fontWeight: 500,
                        }}
                      >
                        ({quantities[drink.name] * 30}개)
                      </h3>
                    </div>

                    <div className="quantityButtons">
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "-")}
                      >
                        <img className="countBtn" src={sub} alt="sub" />
                      </button>
                      <h3
                        style={{
                          fontSize: "16px",
                          margin: "0 10px",
                          fontWeight: 500,
                          color:
                            quantities[drink.name] !== 0
                              ? "#A5CC2B"
                              : "#BDBDBD",
                        }}
                      >
                        {quantities[drink.name]}
                      </h3>
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "+")}
                      >
                        <img className="countBtn" src={add} alt="add" />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
            {selectedTab === "기타" && (
              <>
                {otherAlcohol.map((drink) => (
                  <div className="menuContain" key={drink.name}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                      <h3 style={{ fontSize: "16px", fontWeight: 700 }}>
                        {drink.name}
                      </h3>
                      <h3
                        style={{
                          fontSize: "16px",
                          color: "#BDBDBD",
                          marginLeft: 10,
                          fontWeight: 500,
                        }}
                      >
                        ({quantities[drink.name] * 30}개)
                      </h3>
                    </div>

                    <div className="quantityButtons">
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "-")}
                      >
                        <img className="countBtn" src={sub} alt="sub" />
                      </button>
                      <h3
                        style={{
                          fontSize: "16px",
                          margin: "0 10px",
                          fontWeight: 500,
                          color:
                            quantities[drink.name] !== 0
                              ? "#A5CC2B"
                              : "#BDBDBD",
                        }}
                      >
                        {quantities[drink.name]}
                      </h3>
                      <button
                        className="quantityButton"
                        onClick={() => handleQuantityChange(drink.name, "+")}
                      >
                        <img className="countBtn" src={add} alt="add" />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
     
      <button
        className="basic_btn"
        style={{
          backgroundColor: "#587302",
          fontWeight: 500,
          position: "absolute",
          width: "90%",
          bottom: "10%",
        }}
        onClick={() =>
          navigate('/OrderCheck', {
            state: {
              selectedDate: selectedDate,
              quantities: quantities
            }
          })
        }
      >
        주문하기
      </button>
    </div>
  );
};

export default Order;
