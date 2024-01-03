import React from "react";
import PortHeader from "./PortHeader";
import "../styles/Mobile.css";
import "../styles/desktop.css";
import ScrollToTop from "./ScrollToTop";
const Skills = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div>
      <ScrollToTop />
      <PortHeader />
      <section className="skillWrapper">
        <img src={`${path}/images/titicon.png`} alt="tit" />
        <h2>SKILL</h2>
        <div>
          <h3>HTML5&CSS3</h3>
          <menu>
            <li>미디어쿼리를 이용해 반응형웹 제작</li>
            <li>flex / grid / positon 을 이용해 레이아웃 구현</li>
            <li>CSS 애니메이션 간단하게 구현 가능</li>
            <li>웹 접근성을 고려한 시맨틱 마크업</li>
          </menu>
        </div>
        <div>
          <h3>JAVASCRIPT</h3>
          <menu>
            <li>const 와 let 그리고 객체 리터럴 방식 사용</li>
            <li>map,filter와 같은 함수 사용</li>
            <li>setInterval,setTimeout와 같은 비동기 함수 사용s</li>
            <li>async와 await 로 비동기 통신 가능</li>
            <li>addEventListener로 동적 이벤트 구현</li>
            <li>구조분해 할당</li>
            <li>axios를 이용해 REST API와 통신</li>
            <li>로컬스토리지를 이용하여 웹에 정보를 저장 및 이용</li>
            <li>자바스크립트 애니메이션 활용</li>
          </menu>
        </div>
        <div>
          <h3>REACT</h3>
          <menu>
            <li>리액트로 CRUD 구현가능</li>
            <li>useState,useRef 등으로 상태관리 가능</li>
            <li>context API로 간단한 웹구조 전역 상태관리 가능</li>
            <li>Redux와 Redux toolkit으로 복잡한 웹구조 전역 상태관리 가능</li>
            <li>useEffect 사용으로 함수 업데이트</li>
          </menu>
        </div>
        <div>
          <h3>Node.js</h3>
          <menu>
            <li>express로 서버 구축</li>
            <li>axios로 데이터 요청</li>
            <li>express로 CRUD 구현 가능</li>
          </menu>
        </div>
        <div>
          <h3>MongoDB</h3>
          <menu>
            <li>간단한 로그인 / 회원가입 구현</li>
            <li>프론트와 연결하여 간단한 게시판 구현</li>
          </menu>
        </div>
        <div>
          <h3>Tool</h3>
          <menu>
            <li>git bash 를 이용하여 git에 배포</li>
            <li>git organization 을 통해 팀과 협업</li>
            <li>git hub 를 통하여 버전 관리</li>
            <li>figma를 이용해 디자이너와 협업</li>
          </menu>
        </div>
      </section>
    </div>
  );
};

export default Skills;
