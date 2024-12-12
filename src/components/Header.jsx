import React from "react";
import "../styles/components.css";

const Header = () => {
  return (
    <header className="container flex">
      <h1>My Landing Page</h1>
      <nav>
        <ul className="flex">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
