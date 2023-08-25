import React from "react";
import logo from "../images/logo.svg";
import LoginForm from "components/LoginForm";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const placeholder = "가맹점 코드"
    return(
        <div className="LoginContainer">
            <Link to="/" style={{position: 'absolute', top: 50, left: 40}}>
                <FaChevronLeft size="70"/>
            </Link>
            <img src={logo} alt="아성주류발주어플" style={{width: 350, marginBottom: "400px"}} />
            <LoginForm placeholder={placeholder}/>
            <Link to="/FranchHome" style={{position: 'absolute', bottom: 100}}>
                <button style={{width: 300, height: 100}}>프로필 페이지</button>
            </Link>
        </div>
    );
};

export default Login;