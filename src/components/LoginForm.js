import React, { useState, useEffect } from "react";
import axios from 'axios';

const LoginForm = ({ placeholder }) => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [sessionData, setSessionData] = useState(null); // 세션 데이터를 저장할 상태 변수

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

  const url = '/accounts/login';

  const handleLogin = async (event) => {
    event.preventDefault();

    if (isFormValid) {
      try {
        const data = JSON.stringify({
          username: code,
          password: password,
        });

        const response = await axios.post(url, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
          },
        });

        console.log("로그인 성공:", response);
        console.log(response.data.sessionData);
        // 로그인 성공 시 세션 상태를 변경
        setLoggedIn(true);

        // 성공한 후에 필요한 동작 수행
      } catch (error) {
        console.error("로그인 실패:", error);
        // 실패한 후에 필요한 동작 수행
      }
    }
  };

  useEffect(() => {
    // 세션 확인을 위한 API 요청
    axios.get('/api/check-session')
      .then((response) => {
        if (response.data.loggedIn) {
          // 서버에서 로그인 상태를 확인한 경우
          setLoggedIn(true);
          setSessionData(response.data.sessionData); // 세션 데이터 저장
          console.log("세션 데이터:", response.data.sessionData); // 세션 데이터 콘솔 출력
        }
      })
      .catch((error) => {
        console.error('세션 확인 실패:', error);
      });
  }, []);

  return (
    <>
      {loggedIn ? (
        <div>
          세션이 활성화되었습니다.
          {sessionData && (
            <pre>
              세션 데이터:
              {JSON.stringify(sessionData, null, 2)} {/* 세션 데이터를 예쁘게 출력 */}
            </pre>
          )}
        </div>
      ) : (
        <form
          style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}
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
            className={`loginInput loginSubmit ${isFormValid ? "greenButton" : ""}`}
            value="로그인"
          />
        </form>
      )}
    </>
  );
};

export default LoginForm;
