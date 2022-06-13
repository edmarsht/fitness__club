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
        <NavLink to="/" activeClassName="selected">
          <p>Home</p>
        </NavLink>
        <NavLink to="/exercice" activeClassName="selected">
          <p>Exercice</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
