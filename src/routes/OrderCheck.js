import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import Modal from "react-modal";
const OrderCheck = ({ userObj }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };
  const date = state ? formatDate(state.selectedDate) : null;
  const quantities = state ? state.quantities : null;
  
  let totalQuantity = 0;
  if (quantities) {
    Object.values(quantities).forEach((quantity) => {
      totalQuantity += quantity;
    });
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleConfirmOrder = () => {
    navigate('/OrderEnd', {
      state: {
        date: date,
        quantities: quantities,
        totalQuantity: totalQuantity
      }
    });
    closeModal();
  };

  return (
    <div className="container">
      <header className="header">
        <Link to="/Order" style={{ backgroundColor: "black" }}>
          <FaChevronLeft
            size="16"
            style={{
              position: "absolute",
              left: 25,
              top: 25,
              color: "#383838",
            }}
          />
        </Link>
        <p style={{ fontSize: "16px", fontWeight: "700", color: "#555555" }}>
          발주확인
        </p>
      </header>
      <div
        style={{
          width: "90%",
          height: "100vh",
        }}
      >
        <h2 style={{ fontSize: "22px", fontWeight: 700 }}>배송지</h2>
        <p style={{ fontSize: "18px", fontWeight: 700, color: "#555", margin: "0px" }}>
          {userObj.companyName}
        </p>
        <p style={{ fontSize: "16px", color: "#BDBDBD" }}>
          {userObj.address}
        </p>
        <hr />
        <h2 style={{ fontSize: "22px", fontWeight: 700 }}>납기요청일</h2>
        <p
          style={{
            fontSize: "18px",
            color: "#555",
            fontWeight: 500,
          }}
        >
          {date} 까지
        </p>
        <hr/>
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 700 }}>주문 내역</h2>
          <div>
            {quantities &&
              Object.entries(quantities).map(([drinkName, quantity]) => {
                if (quantity > 0) {
                  return (
                    <div
                      key={drinkName}
                      style={{
                        width: "100%",
                        flexDirection: "row",
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "14px"
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
              {totalQuantity} ({totalQuantity * 30}개)
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 120,
        }}
      >
        <button
          className="basic_btn"
          style={{
            backgroundColor: "#587302",
            fontWeight: 500,
          }}
          onClick={openModal}
        >
          주문하기
        </button>
        
        <Modal
          overlayClassName="modal-backdrop"
          className="modal"
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="주문 확인"
        >
          <h2 style={{fontSize: 60}}>주문하시겠습니까?</h2>
          <button className="basic_btn modalBtn" style={{backgroundColor: '#BDBDBD', marginTop: 30, width: 600}} onClick={handleConfirmOrder}>주문하기</button>
          
            <MdClose
              onClick={closeModal}
              size="65"
              style={{
                position: "absolute",
                right: 50,
                top: 60,
                color: "#383838",
              }}
            />
          
        </Modal>
      </div>
    </div>
  );
};

export default OrderCheck;
