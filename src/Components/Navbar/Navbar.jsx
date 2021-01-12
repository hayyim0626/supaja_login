import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="Navbar">
      <div className="logo">수파자</div>
      <div className="groupLecture">
        <div className='text'>
          <div>그룹 강의 </div>
          <div className="live"> Live</div>
        </div>
        <div className="line" />
      </div>
      <div className="knowHow">공부 노하우</div>
      <div className="usage">이용방법</div>
      <div className="signIn">회원가입</div>
      <div className="login">로그인</div>
      <div className="freeExperience">무료체험 신청</div>
    </header>
  );
}
