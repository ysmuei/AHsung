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
      <form style={{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
        <input
          name="code"
          type="number"
          inputMode="numeric"
          placeholder={placeholder}
          required
          value={email}
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
        <input type="submit" className={`loginInput loginSubmit ${isFormValid ? "greenButton" : ""}`} value="로그인" />
      </form>
    </>
  );
};

export default LoginForm;
