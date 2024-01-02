import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headermenu from "./Headermenu";
import "./header.css";
const PortHeader = () => {
  const [isChk, setIsChk] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    setIsChk(!isChk);
  };
  return (
    <header>
      <h2>
        <Link to="/">PORTFOLIO</Link>
      </h2>
      <a href="#" className="ham-btn" onClick={onClick}>
        <span>bar1</span>
        <span>bar2</span>
        <span>bar3</span>
      </a>
      <Headermenu isChk={isChk} onClick={onClick} />
    </header>
  );
};

export default PortHeader;
