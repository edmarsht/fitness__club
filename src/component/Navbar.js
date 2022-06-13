import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <div className="navbar__links">
        <NavLink to="/" activeclassname="selected">
          <p>Home</p>
        </NavLink>
        <NavLink to="/exercice" activeclassname="selected">
          <p>Exercice</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
