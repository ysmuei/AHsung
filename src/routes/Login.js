import React from "react";
import logo from "../images/logo.svg";
import LoginForm from "components/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  const placeholder = "가맹점 코드";
  return (
    <div className="LoginContainer">
      <Link
        to="/ManagerLogin"
        style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}
      >
        <img
          src={logo}
          alt="아성주류발주어플"
          style={{ width: "40%", marginBottom: "40%", marginTop: "20%" }}
        />
      </Link>
      <LoginForm placeholder={placeholder} />
      <Link to="/FranchHome" style={{ position: "absolute", bottom: 50 }}>
        <button
          style={{ width: "100%", height: 80, backgroundColor: "purple" }}
        >
          프로필 페이지
        </button>
      </Link>
    </div>
  );
};

export default Login;
