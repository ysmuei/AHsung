import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import Modal from 'react-modal';
import axios from "axios";
// https://nykim.work/85
// 1. axios 전역 설정
axios.defaults.withCredentials = true; // withCredentials 전역 설정
const data = {
    code: 1004,
    companyName: "유빈이네 닭갈비유",
    salesPersonCode: 1,
    salesPerson: "정성진",
    representativeName: "서유빈",
    representativeResidentNumber: "010721-4******",
    phoneNumber: "041-573-6337",
    postalCode: "331-090",
    address: "충남 천안시 동남구 상명대길 31",
    representativeCellNumber: "010-1234-5678",
  };

  // height: calc(var(--vh, 1vh) * 100);

function App() {
  const [sessionData, setSessionData] = useState(null);
  const updateSessionData = (data) => {
    setSessionData(data);
  };
  Modal.setAppElement('#root');
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <AppRouter userObj={data} updateSessionData={updateSessionData} sessionData={sessionData}/>
  );
}
export default App;
