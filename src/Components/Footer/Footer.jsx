import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="companyInformations">
        <div className="contact">
          <div className="phone">
            phone
            <span className="customerService">고객센터</span>
            <span className="tellNumber">02-2135-9632</span>
            <span className="date">
              (평일 10~18시, 주말 10시~18시, 공휴일 미운영)
            </span>
          </div>
          <div className="email">
            email
            <span className="emailInquire">이메일 문의</span>
            <span className="emailAddress">help@supaja.com</span>
          </div>
        </div>
        <div className="information">
          <div className="kakaoChannel">
            카카오톡 채녈@수파자 | help@supaja.com
          </div>
          <div className="companyInfo">
            (주) 수파자 | 대표이사 이명호 | 사업자등록번호: 361-86-01077 |
            통신판매번호 : 2018-서울강남-00930
          </div>
          <div className="address">
            서울특별시 강남구 테헤란로 129, 강남N타워 7층
          </div>
        </div>
      </div>
      <div className="line" />
      <div className="rights">© All Rights Reserved By Supaja</div>
    </div>
  );
}
