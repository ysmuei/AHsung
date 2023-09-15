import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ placeholder, updateSessionData }) => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const isFormValid = code !== "" && password !== "";

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "username") {
      setCode(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const url = "/accounts/login";

  const handleLogin = async (event) => {
    event.preventDefault();
    window.navigator.vibrate([1000]);
    if (isFormValid) {
      try {
        const data = JSON.stringify({
          username: code,
          password: password,
        });

        const response = await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        console.log("로그인 성공:", response);
        console.log(response.data);
        // 로그인 성공 시 세션 상태를 변경
        setLoggedIn(true);
        // 세션 데이터를 App.js의 콜백 함수에 전달
        updateSessionData(response.data);
        // 로그인 성공 후 페이지 이동
        if (code === "1") {
          // 관리자 아이디로 로그인한 경우 ManagerHome.js로 이동
          navigate("/ManagerHome");
        } else {
          // 가맹점 아이디로 로그인한 경우 FranchHome.js로 이동
          navigate("/FranchHome");
        }
      } catch (error) {
        console.error("로그인 실패:", error);
        // 실패한 후에 필요한 동작 수행
      }
    }
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleLogin}
      >
        <input
          name="username"
          type="number"
          inputMode="numeric"
          placeholder={placeholder}
          required
          value={code}
          onChange={onChange}
          className={`loginInput ${isFormValid ? "greenBorder" : ""}`}
        />
        <input
          name="password"
          type="password"
          inputMode="numeric"
          placeholder="비밀번호"
          required
          value={password}
          onChange={onChange}
          className={`loginInput ${isFormValid ? "greenBorder" : ""}`}
        />
        <input
          type="submit"
          className={`loginInput loginSubmit ${
            isFormValid ? "greenButton" : ""
          }`}
          value="로그인"
        />
      </form>

    </>
  );
};

export default LoginForm;
