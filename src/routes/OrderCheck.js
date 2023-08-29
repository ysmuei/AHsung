import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderCheck = () => {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <header className="header">
        <Link to="/Order" state={{ backgroundColor: "black" }}>
          <FaChevronLeft
            size="55"
            style={{ position: "absolute", left: 60, top: 60, color: "#383838" }}
          />
        </Link>
        <p style={{ fontSize: "45px", fontWeight: "600", color: "#383838" }}>발주확인</p>
      </header>
      <div
        style={{
          width: "100%",
          height: "100vh",
          padding: 30,
        }}
      >
        <h2 style={{ fontSize: 55, fontWeight: 700 }}>배송지</h2>
          <p style={{ fontSize: "40px", fontWeight: 700, color: "#555" }}>유빈이네 닭갈비</p>
          <p style={{ fontSize: "40px", marginTop: -24, color: "#BDBDBD" }}>
            충청남도 천안시 동남구 상명대길31
          </p>
          <hr/>
          <h2 style={{ fontSize: 55, fontWeight: 700 }}>납기요청일</h2>
          <p style={{ fontSize: "40px", marginTop: -20, color: "#555", fontWeight: 500 }}>2023.08.01 까지</p>
          <hr style={{marginBottom: 50}}/>
        <div>
          <h2 style={{ fontSize: 55, fontWeight: 700 }}>주문 내역</h2>
          <div>
            <div style={{width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
                <p style={{fontSize: '40px', margin: 0, color: "#555"}}>카스 300ml</p>
                <p style={{fontSize: '40px', margin: 0, color: "#555"}}>4(120)개</p>
            </div>
            <div style={{width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
                <p style={{fontSize: '40px', margin: 0, color: "#555"}}>카프리 500ml</p>
                <p style={{fontSize: '40px', margin: 0, color: "#555"}}>1(30)개</p>
            </div>
          </div>
          <hr />
          <div style={{width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                <p style={{ fontSize: 45, color: "#88B00C", marginBottom: "15%", fontWeight: 700 }}>총 주문수량</p>
                <p style={{ fontSize: 45, color: "#88B00C", fontWeight: 700}}>5 (150개)</p>
          </div>
          
        </div>
        <Link to="/OrderEnd" style={{display: 'flex', justifyContent: 'center', }}>
            <button className="basic_btn" style={{backgroundColor: '#587302', fontWeight: 500, position: 'absolute', bottom: 120}}>
              주문하기
            </button>
          </Link>
      </div>
    </div>
  );
};

export default OrderCheck;
