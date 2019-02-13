import React from "react";
import Pin from "Commons/Icons/Pin";
import Question from "Commons/Icons/Question";
import People from "Commons/Icons/People";
import Phone from "Commons/Icons/Phone";
import SearchBox from "Commons/SearchBox/SearchBox";
import "./Menu.scss";

const navItems = [
  [Pin, "Find a deal"],
  [Question, "Find instructions"],
  [People, "Ask the Community"],
  [Phone, "Take contact"]
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
              <Icon className="menu-navbar-icon" /> {content}
            </li>
          ))}
        </ul>
        <div style={{ marginLeft: "auto" }}>
          <SearchBox />
        </div>
      </nav>
      <div className="menu-content">
        {contentItem.map(content => (
          <div className="menu-content-item">{content}</div>
        ))}
      </div>
    </div>
  );
}
