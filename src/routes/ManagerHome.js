import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useState } from "react";

const ManagerHome = ({ userObj }) => {
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
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#F8F8F8" }}>
      <Profile userObj={userObj}/>
      <div className="manager">
        <div className="dropDown">
          <select
            value={selectedOption}
            onChange={(e) => handleSelect(e.target.value)}
            style={{ width : "287px", height: "50px", fontSize: 16, backgroundColor: 'white', color: 'black',display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: -30, marginBottom: 20, borderWidth: "2px",  borderRadius: 12, padding: 5}}
          >
            <option style={{fontSize: "16px", alignItems: 'center,', justifyContent: 'center', borderRadius: 30, display: 'flex'}} value="호차를 선택하세요" >호차를 선택하세요</option>
            {options.map((option, index) => (
              <option key={index} value={option} style={{fontSize: '20px', borderRadius: 30}}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <Link to="/OrderManager" className="managerHome_Link">
          <button className="basic_btn" style={{ backgroundColor: "#587302" }}>
            발주 가맹점 현황 확인하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManagerHome;