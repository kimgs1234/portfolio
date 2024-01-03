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
          <div>
            <img
              src={`${path}/images/나만의가계부.png`}
              alt="accountbook"
              className="accountimg"
            />
          </div>
          <div className="titleWrapper">
            {" "}
            <h3>가계부앱</h3>
            <h6>
              리액트를 학습하면서 진행한 팀프로젝트에서 만든 가계부 앱입니다.
            </h6>
            <p>
              #React #Css #react-router-dom #rechart # react-calendar #Express
              #MongoDB
            </p>
            <a
              href="https://github.com/kimks1234/accountBook"
              className="viewBtn"
              target="_blank">
              더보기
            </a>
          </div>
        </div>
        <div className="bigTitle">
          <div>
            <img
              src={`${path}/images/나만의가계부.png`}
              alt="accountbook"
              className="accountimg"
            />
          </div>
          <div className="titleWrapper">
            {" "}
            <h3>개인프로젝트</h3>
            <h6>리액트를 어느정도 다배우고 만든 개인프로젝트 사이트입니다.</h6>
            <p>#React</p>
            <a href="#" className="viewBtn">
              더보기
            </a>
          </div>
        </div>
        <div className="bigTitle">
          <div>
            <img
              src={`${path}/images/맹그로브.png`}
              alt="accountbook"
              className="accountimg"
            />
          </div>
          <div className="titleWrapper">
            <h3>맹그로브 클론 사이트</h3>
            <h6>
              자바스크립트를 학습하면서 진행한 팀프로젝트에서 만든 웹사이트
              입니다.
            </h6>
            <p>#Html #Css #JavaScript #responsiveWeb</p>
            <a href="#" className="viewBtn">
              더보기
            </a>
          </div>
        </div>
        <div className="bigTitle">
          <div>
            <img
              src={`${path}/images/포트폴리오.png`}
              alt="accountbook"
              className="accountimg"
            />
          </div>
          <div className="titleWrapper">
            <h3>포트폴리오</h3>
            <h6>리액트를 어느정도 배우고만든 개인 포트폴리오 사이트입니다.</h6>
            <p>#React #Css #react-routder-dom</p>
            <a href="#" className="viewBtn">
              더보기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
