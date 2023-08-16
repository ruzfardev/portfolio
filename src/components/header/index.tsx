import React from "react";
import "./style.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">ruzfardev</div>
        <ul>
          <li className="button type2">
            <a href="#home">Home</a>
          </li>
          <li className="button type2">
            <a href="#about">About</a>
          </li>
          <li className="button type2">
            <a href="#projects">Projects</a>
          </li>
          <li className="button type2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
