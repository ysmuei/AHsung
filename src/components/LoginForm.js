import React, { useState } from "react";

const LoginForm = ( {placeholder} ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid = email !== "" && password !== ""; // 이메일과 비밀번호 모두 입력되었는지 확인
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "code") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <>
      <form>
        <input
          name="code"
          type="number"
          placeholder={placeholder}
          required
          value={email}
          onChange={onChange}
          className={`loginInput ${isFormValid ? "greenBorder" : ""}`}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          value={password}
          onChange={onChange}
          className={`loginInput ${isFormValid ? "greenBorder" : ""}`}
        />
        <br/><br/><br/><br/>
        <input type="submit" className={`loginInput loginSubmit ${isFormValid ? "greenButton" : ""}`} value="로그인" />
      </form>
    </>
  );
};

export default LoginForm;
