import React, { useEffect } from "react";
import PortHeader from "./PortHeader";
import { Link, useLocation } from "react-router-dom";
import "../styles/Mobile.css";
import "../styles/desktop.css";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  const path = process.env.PUBLIC_URL;
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const location = useLocation();

  useEffect(() => {
    // URL의 쿼리 파라미터를 확인하여 조건에 맞는 경우에 스크롤합니다.
    if (location.search === "?scrollTo=bottom") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [location]); // location이 변경될 때마다 이 효과를 재실행합니다.

  return (
    <div>
      <ScrollToTop />
      <PortHeader />
      <section className="mainWrapper">
        <h2>Welcome To Portfolio</h2>
        <p>
          끊임없이 도전하면 불가능한 일도 이룰 수 있고, <br />
          우리는 이를 통해 세상을 변화시킬수 있습니다.
        </p>
        <img src={`${path}/images/portfolio.png`} alt="portfolio" />
      </section>
      <section className="linkContainer">
        <img src={`${path}/images/titicon.png`} alt="tit" />
        <h2>
          Meet Our <br />
          <span>Go to the Link</span>
        </h2>
        <p>
          항상 초심을 잃지 않고 꾸준히 공부하여,
          <br />
          매일 성장하는 프론트엔드 개발자가 되겠습니다.
        </p>
        <div className="linkWrapper">
          <div>
            <h6>바로가기</h6>
            <Link to="/projects">Projects</Link>
          </div>
          <div>
            <h6>바로가기</h6>
            <Link to="/skills">Skills</Link>
          </div>
          <div>
            <h6>바로가기</h6>
            <Link to="/?scrollTo=bottom" onClick={scrollToBottom}>
              <span>About</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="aboutBox">
        <h2>ABOUT</h2>
        <div className="textWrapper">
          <div className="textBox">
            <span>NAME</span>
            <h3>김경석</h3>
          </div>
          <div className="textBox">
            <span>BIRTH</span>
            <h3>1999.12.20</h3>
          </div>
          <div className="textBox">
            <span>E-MAIL</span>
            <h3>bisuflash1@naver.com</h3>
          </div>
          <div className="textBox">
            <span>CONTACT</span>
            <h3>010-7311-1691</h3>
          </div>
          <a href="https://github.com/kimgs1234" target="_blank">
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
