import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useState } from "react";
import { FaTruck } from "react-icons/fa";

const ManagerHome = () => {
  const name = "아성주류 관리자";
  const [selectedOption, setSelectedOption] = useState("호차를 선택하세요");
  const options = [
    "1 호차",
    "2 호차",
    "3 호차",
    "4 호차",
    "5 호차",
    "6 호차",
    "7 호차",
    "8 호차",
    "9 호차",
    "10 호차",
  ];
  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#DFDFDF" }}>
      <Profile name={name} />
      <div className="manager">
        <div className="dropDown">
          <select
            value={selectedOption}
            onChange={(e) => handleSelect(e.target.value)}
            style={{ width : "90%", height: 120, fontSize: 40, backgroundColor: 'white', color: 'black',display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: -50, marginBottom: 20, border: 'black'}}
          >
            <option style={{fontSize: '20px', alignItems: 'center,', justifyContent: 'center'}} value="호차를 선택하세요" >호차를 선택하세요</option>
            {options.map((option, index) => (
              <option key={index} value={option} style={{fontSize: '20px'}}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <Link to="/" className="managerHome_Link">
          <button className="basic_btn" style={{ backgroundColor: "#587302" }}>
            발주 가맹점 현황 확인하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManagerHome;
