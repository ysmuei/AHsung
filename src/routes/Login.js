import React from "react";
import logo from "../images/logo.svg";
import LoginForm from "components/LoginForm";

const Login = () => {
    return(
        <div className="LoginContainer">
            <img src={logo} alt="아성주류발주어플" style={{ width: "380px", height: "150px", marginBottom: 0, marginTop: 600 }} />
            <LoginForm/>
        </div>
    );
};

export default Login;