import React, { useState, useEffect } from "react";
import "./Login.scss";

export default function Login() {
  const [loginData, setLoginData] = useState("");
  const [passwordData, setPasswordData] = useState("");

  const clickBtn = () => {
    fetch(`https://api.supaja.com:8000/test-api/sign-in`, {
      method: "POST",
      body: JSON.stringify({
        id: loginData,
        pw: passwordData,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "존재하지 않는 이메일입니다.") {
          alert(res.message);
        } else if (res.message === "비밀번호가 일치하지 않습니다.") {
          alert(res.message);
        } else {
          localStorage.setItem("token", res.access_token);
          alert("로그인 성공!");
          setLoginData("");
          setPasswordData("");
        }
      });
  };

  return (
    <div className="Login">
      <div className="studentLogin">학생 로그인</div>
      <div className="email">
        <div className="emailText">이메일 주소</div>
        <input
          type="text"
          className="emailInput"
          value={loginData}
          onChange={(e) => setLoginData(e.target.value)}
        />
      </div>
      <div className="password">
        <div className="passwordText">비밀번호</div>
        <input
          type="password"
          className="passwordInput"
          value={passwordData}
          onChange={(e) => setPasswordData(e.target.value)}
        />
      </div>
      <button className="loginBtn" onClick={clickBtn}>
        로그인
      </button>
      <div className="signUp">
        <span className="signUpText">수파자 계정이 없으신가요?</span>
        <span className="signUpBtn">회원가입</span>
      </div>
    </div>
  );
}
