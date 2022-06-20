// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Call a friend.</h1>
      <p>your friendly contact app</p>
    </div>
  );
};

export default Header;
