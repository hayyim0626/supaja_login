import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Information from "../../Image/s_ptn_academy_banner.png";
import "./Main.scss";

export default function Main() {
  return (
    <>
      <Navbar />
      <div className="main">
        <article className="mainBanner">
          <div className="titles">
            <h3 className="subtitle">실시간 화상수업</h3>
            <h1 className="maintitle">명문대 선생님의 1:1 학습지도</h1>
            <div className="line" />
            <div className="description">
              <div className="descTop">검증된 공부 전문가를</div>
              <div className="descBottom">
                <span>나만의 학습멘토</span>로 만나보세요
              </div>
              <button className="btn">무료 체험수업 신청하기</button>
            </div>
          </div>
        </article>
        <article className="information">
          <img className="infoImg" src={Information} alt="informationImg" />
        </article>
      </div>
      <Footer />
    </>
  );
}
