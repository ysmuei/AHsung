import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid = email !== "" && password !== ""; // 이메일과 비밀번호 모두 입력되었는지 확인
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <>
      <form className="container">
        <input
          name="email"
          type="email"
          placeholder="가맹점 코드"
          required
          value={email}
          onChange={onChange}
          className="loginInput"
        />
        <br/>
        <br/>
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          value={password}
          onChange={onChange}
          className="loginInput"
        />
        <br/><br/><br/><br/>
        <input type="submit" className={`loginInput loginSubmit ${isFormValid ? "greenButton" : ""}`} value="로그인" />
      </form>
    </>
  );
};

export default LoginForm;
