import React from "react";
import Icon from "Commons/Icons/Logo";
import User from "Commons/Icons/User";
import Burger from "Commons/Icons/Burger";
import Cart from "Commons/Icons/Cart";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Icon className="navbar-brand" />
        </li>
      </ul>
      <ul className="navbar-list right">
        <li className="navbar-item">
          <div className="navbar-icon">
            <Burger
              className="navbar-icon"
              backgroundColor={"#b246ea"}
              width={"4rem"}
              height={".6rem"}
            />
          </div>
          Menu
        </li>
        <li className="navbar-item">
          <User className="navbar-icon" />
          Login
        </li>
        <li className="navbar-item">
          <Cart className="navbar-icon" />
        </li>
      </ul>
    </nav>
  );
}
