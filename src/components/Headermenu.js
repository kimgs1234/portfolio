import React from "react";
import { Link } from "react-router-dom";

const Headermenu = ({ isChk, onClick }) => {
  return (
    <div className={isChk ? "active" : ""}>
      <a href="#" className="x-btn" onClick={onClick}>
        <span>bar</span>
        <span>bar</span>
      </a>
      <ul>
        <li>
          <Link to="/projects">PROJECT</Link>
        </li>
        <li>
          <Link to="/skills">SKILL</Link>
        </li>
        <li>
          <Link to="/">ABOUT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Headermenu;
