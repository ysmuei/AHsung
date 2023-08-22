import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderCheck = () => {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <header className="header">
        <Link to="/Order" state={{ backgroundColor: "black" }}>
          <FaChevronLeft
            size="70"
            style={{ position: "absolute", left: 50, top: 50 }}
          />
        </Link>
        <p style={{ fontSize: "45px", fontWeight: "600" }}>발주확인</p>
      </header>
      <div
        style={{
          width: "100%",
          height: "100vh",
          padding: 30,
        }}
      >
        <h2 style={{ fontSize: 55 }}>주문내역</h2>
        <div>
            <div style={{width: "100%", height: 320, backgroundColor: "blue", borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 40}}>
                <div style={{width: 250, height: 250, backgroundColor: "green", borderRadius: 50}}></div>
                <div style={{width: 250, height: 250, backgroundColor: "gray"}}>
                    <p style={{fontSize: 50, margin: 10}}>카스</p>
                    <p style={{fontSize: 40, margin: 10}}>300ml</p>
                    <p style={{fontSize: 30, margin: 10}}>(120개)</p>
                </div>
                <div style={{width: 250, height: 250, backgroundColor: "gray"}}>

                </div>
            </div>
        </div>
        <div>
          <h2 style={{ fontSize: 50 }}>총 주문 수량</h2>
          <div>
            <div style={{width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
                <p style={{fontSize: '40px', margin: 0}}>카스 300ml</p>
                <p style={{fontSize: '40px', margin: 0}}>4(120)개</p>
            </div>
            <div style={{width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
                <p style={{fontSize: '40px', margin: 0}}>카프리 500ml</p>
                <p style={{fontSize: '40px', margin: 0}}>1(30)개</p>
            </div>
          </div>
          <hr />
          <div style={{width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                <p style={{ fontSize: 40, color: "#88B00C", marginBottom: "15%" }}>총 주문 수량</p>
                <p style={{ fontSize: 40, color: "#88B00C"}}>5 (150개)</p>
          </div>
          <h2 style={{ fontSize: 55 }}>배송지</h2>
          <p style={{ fontSize: "40px" }}>유빈이네 닭갈비</p>
          <p style={{ fontSize: "40px", marginTop: -20 }}>
            충청남도 천안시 동남구 상명대길31
          </p>
          <hr/>
          <h2 style={{ fontSize: 55 }}>납기요청일</h2>
          <p style={{ fontSize: "40px", marginTop: -20 }}>2023.08.01 까지</p>
          <hr style={{marginBottom: 100}}/>
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
