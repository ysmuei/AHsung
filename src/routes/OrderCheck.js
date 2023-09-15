import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import Modal from "react-modal";
import axios from "axios";

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
  const session = state ? state.sessionData : null;
  console.log("오데체크", session);
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
  const url = "/order/";
  // 주문 확인 후 서버로 데이터 전송
  const sendOrderData = async () => {
    try {
      const response = await axios.post(
        url,
        {
          date: date,
          quantities: quantities,
          totalQuantity: totalQuantity,
          sessionData: session, // 세션 데이터 추가
        },
        {
          withCredentials: true, // 쿠키 포함
          headers: {
            "Content-Type": "application/json",
            // 'Cookie': `sessionid=${session.session_id}`  // JSON 데이터를 보낼 경우 설정
          },
        }
      );

      // 성공적으로 요청을 보냈을 때 처리할 코드
      console.log("주문 요청 성공:", response.data);

      // 주문 확인 후 페이지 이동
      navigate("/OrderEnd", {
        state: {
          date: date,
          quantities: quantities,
          totalQuantity: totalQuantity,
        },
      });

      closeModal();
    } catch (error) {
      // 요청 중에 오류가 발생했을 때 처리할 코드
      console.error("주문 요청 오류:", error);
    }
  };

  return (
    <div className="container">
      <header>
        <Link to="/Order">
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
        <p style={{ fontSize: "20px", fontWeight: "700", color: "#555555" }}>
          발주확인
        </p>
      </header>
      <div
        style={{
          width: "100%",
          height: "100vh",
          padding: "0% 4%",
        }}
      >
        <h2 style={{ fontSize: "22px", fontWeight: 700 }}>배송지</h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#555",
            margin: "0px",
          }}
        >
          {session.상호명}
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#BDBDBD",
            marginTop: "2%",
            marginBottom: "6%",
          }}
        >
          {userObj.address}
        </p>
        <hr />
        <h2
          style={{
            fontSize: "22px",
            fontWeight: 700,
            marginTop: "6%",
            marginBottom: "0%",
          }}
        >
          납기요청일
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#555",
            fontWeight: 500,
            margin: "5% 0%",
          }}
        >
          {date} 까지
        </p>
        <hr />
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
                        marginBottom: "14px",
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
          <h2 style={{ fontSize: 20 }}>주문하시겠습니까?</h2>
          <button className="basic_btn modalBtn" onClick={sendOrderData}>
            주문하기
          </button>

          <MdClose
            onClick={closeModal}
            size="34"
            style={{
              position: "absolute",
              right: 10,
              top: 10,
              color: "#383838",
            }}
          />
        </Modal>
      </div>
    </div>
  );
};

export default OrderCheck;
