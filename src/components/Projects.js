import React from "react";
import PortHeader from "./PortHeader";
import "../styles/Mobile.css";
import "../styles/desktop.css";
import ScrollToTop from "./ScrollToTop";
const Projects = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div>
      <ScrollToTop />
      <PortHeader />
      <section className="projectWrapper">
        <img src={`${path}/images/titicon.png`} alt="tit" className="titicon" />
        <h2>Projects</h2>
        <div className="bigTitle">
          <div className="accountWrapper">
            <img
              src={`${path}/images/나만의가계부1.png`}
              alt="accountbook"
              className="accountimg"
            />
          </div>
          <div className="titleWrapper">
            <h3>가계부앱</h3>
            <h6>
              #React #Css #React-router-dom #Rechart #React-calendar #Express
              #MongoDB
            </h6>
            <p>리액트 팀프로젝트</p>
            <a
              href="https://github.com/kimgs1234/accountBook"
              className="viewBtn"
              target="_blank">
              더보기
            </a>
          </div>
        </div>
        <div className="bigTitle">
          <div className="accountWrapper">
            <img
              src={`${path}/images/나만의가계부1.png`}
              alt="accountbook"
              className="accountimg"
            />
          </div>
          <div className="titleWrapper">
            <h3>개인프로젝트</h3>
            <h6>#React</h6>
            <p>리액트 개인프로젝트</p>
            <a href="#" className="viewBtn">
              더보기
            </a>
          </div>
        </div>
        <div className="bigTitle">
          <div className="accountWrapper">
            <img
              src={`${path}/images/맹그로브.png`}
              alt="accountbook"
              className="accountimg"
            />
          </div>
          <div className="titleWrapper">
            <h3>맹그로브 클론 사이트</h3>
            <h6>#Html #Css #JavaScript #responsiveWeb</h6>
            <p>자바스크립트 팀프로젝트</p>
            <a
              href="https://github.com/kimgs1234/Mangrove"
              className="viewBtn"
              target="_blank">
              더보기
            </a>
          </div>
        </div>
        <div className="bigTitle">
          <div className="accountWrapper">
            <img
              src={`${path}/images/포트폴리오.png`}
              alt="accountbook"
              className="accountimg"
            />
          </div>
          <div className="titleWrapper">
            <h3>포트폴리오</h3>
            <h6>#React #Css #React-router-dom </h6>
            <p>리액트 개인 포트폴리오</p>
            <a
              href="https://github.com/kimgs1234/portfolio"
              className="viewBtn"
              target="_blank">
              더보기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
