import React from "react";
import "./Menu.scss";

export default function Menu() {
  return (
    <nav className="menu-navbar">
      <ul className="menu-navbar-list">
        <li className="menu-navbar-item">Find a deal</li>
        <li className="menu-navbar-item">Find instructions</li>
        <li className="menu-navbar-item">Ask the Community</li>
        <li className="menu-navbar-item">Take contact</li>
        <li className="menu-navbar-item">Search</li>
      </ul>
    </nav>
  );
}
