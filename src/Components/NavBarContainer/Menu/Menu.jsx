import React from "react";
import Pin from "Commons/Icons/Pin";
import Question from "Commons/Icons/Question";
import People from "Commons/Icons/People";
import Phone from "Commons/Icons/Phone";
import Search from "Commons/Icons/Search";
import SearchBox from "Commons/SearchBox/SearchBox";
import "./Menu.scss";

const navItems = [
  [<Pin className="menu-navbar-icon" />, "Find a deal"],
  [<Question className="menu-navbar-icon" />, "Find instructions"],
  [<People className="menu-navbar-icon" />, "Ask the Community"],
  [<Phone className="menu-navbar-icon" />, "Take contact"]
];
const contentItem = [
  "Equipment",
  "Subscriptions",
  "Wide bands",
  "Dot",
  "TV and Entertainment",
  "Services",
  "Bidding",
  "League"
];

export default function Menu() {
  return (
    <div className="menu">
      <nav className="menu-navbar">
        <ul className="menu-navbar-list">
          {navItems.map(([Icon, content]) => (
            <li className="menu-navbar-item">
              {Icon} {content}
            </li>
          ))}
        </ul>
        <div style={{ marginLeft: "auto" }}>
          <SearchBox />
        </div>
      </nav>
      <ul className="menu-content">
        <li className="menu-content-item">Hello</li>
      </ul>
    </div>
  );
}
