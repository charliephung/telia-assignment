import React from "react";
import Nav from "Commons/Nav/Nav";
import {
  Question,
  People,
  Pin,
  Phone,
  Tablet,
  Sim,
  Wifi,
  Dot,
  Video,
  Service,
  Shopping,
  LiigaLogo
} from "Commons/Icons";
import Container from "Commons/Container/Container";
import SearchBox from "Commons/SearchBox/SearchBox";
import classnames from "classnames";
import "./Menu.scss";

const navItems = [
  [Pin, "Find a deal"],
  [Question, "Find instructions"],
  [People, "Ask the Community"],
  [Phone, "Take contact"]
];
const contentItem = [
  [Tablet, "Equipment"],
  [Sim, "Subscriptions"],
  [Wifi, "Wide bands"],
  [Dot, "Dot"],
  [Video, "TV and Entertainment"],
  [Service, "Services"],
  [Shopping, "Bidding"],
  [LiigaLogo, "League"]
];

const Menu = React.memo(function({
  className = "menu",
  addClass = "",
  ...rest
}) {
  const newClassName = classnames(className, addClass);

  return (
    <div {...rest} className={newClassName}>
      <div className="box-shadow-1">
        <Container addClass="menu__container">
          <Nav>
            <Nav.List addClass="menu__list">
              {navItems.map(([Icon, content], index) => (
                <Nav.Item key={index} className="menu__item">
                  <Icon className="menu__icon" /> {content}
                </Nav.Item>
              ))}
            </Nav.List>
            <div style={{ marginLeft: "auto" }}>
              <SearchBox />
            </div>
          </Nav>
        </Container>
        <div style={{ backgroundColor: "white" }}>
          <Container addClass="menu__content">
            {contentItem.map(([Icon, content], index) => (
              <div key={index} className="menu__content__item">
                <Icon className="menu__content__icon" />
                {content}
              </div>
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
});
export default Menu;
