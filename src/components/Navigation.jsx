import React from "react";
import "./App.css";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="../assets/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;
