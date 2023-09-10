import React from "react";
import logo from "../images/logo.svg";
import LoginForm from "components/LoginForm";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManagerLogin = () => {
    const placeholder = "아이디"
    return(
        <div className="LoginContainer">
            <Link to="/" style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <FaChevronLeft size="16"
                style={{
                position: "absolute",
                left: 25,
                top: 25,
                color: "#383838",
                }}/>
            </Link>
            <img src={logo} alt="아성주류발주어플" style={{ width: "40%", marginBottom: "40%", marginTop: "20%" }} />
            <LoginForm placeholder={placeholder}/>
            <Link to="/ManagerHome" style={{position: 'absolute', bottom: 100}}>
                <button style={{ width: "100%", height: 80, backgroundColor: "purple" }}>프로필 페이지</button>
            </Link>
        </div>
    ); 
}

export default ManagerLogin;