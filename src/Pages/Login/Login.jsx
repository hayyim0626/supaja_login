import React, { useState, useEffect } from "react";
import "./Login.scss";


export default function Login() {
  return (
    <div className="Login">
      <div className="studentLogin">학생 로그인</div>
      <div className="email">
        <div className="emailText">이메일 주소</div>
        <input type="text" className="emailInput" />
      </div>
      <div className="password">
        <div className="passwordText">비밀번호</div>
        <input type="password" className="passwordInput" />
      </div>
      <button className="loginBtn">로그인</button>
      <div className="signUp">
        <span className="signUpText">수파자 계정이 없으신가요?</span>
        <span className="signUpBtn">회원가입</span>
      </div>
    </div>
  );
}
