import React from "react";
import PropTypes from "prop-types";
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
import "./DropDownMenu.scss";

const DropDownMenu = React.memo(function({
  className = "dropdown-menu",
  addClass = "",
  language,
  onCloseClick = () => {},
  ...rest
}) {
  const display = language.menu;
  const navItems = [
    [Pin, display.nav0],
    [Question, display.nav1],
    [People, display.nav2],
    [Phone, display.nav3]
  ];
  const contentItem = [
    [Tablet, display.item0],
    [Sim, display.item1],
    [Wifi, display.item2],
    [Dot, display.item3],
    [Video, display.item4],
    [Service, display.item5],
    [Shopping, display.item6],
    [LiigaLogo, display.item7]
  ];
  const newClassName = classnames(className, addClass);

  return (
    <div {...rest} className={newClassName}>
      <div className="box-shadow-1">
        <Container addClass="dropdown-menu__container">
          <Nav addClass="dropdown-menu__nav">
            <Nav.List addClass="dropdown-menu__list">
              {navItems.map(([Icon, content], index) => (
                <Nav.Item key={index} className="dropdown-menu__item">
                  <Icon className="dropdown-menu__icon" /> {content}
                </Nav.Item>
              ))}
            </Nav.List>
            <div className="dropdown-menu__left">
              <SearchBox placeHolder={display.searchbox} />
            </div>
          </Nav>
        </Container>
        <div style={{ backgroundColor: "white" }}>
          <Container addClass="dropdown-menu__content">
            {contentItem.map(([Icon, content], index) => (
              <div key={index} className="dropdown-menu__content__item">
                <Icon className="dropdown-menu__content__icon" />
                {content}
              </div>
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
});

DropDownMenu.propTypes = {
  className: PropTypes.string,
  addClass: PropTypes.string,
  onCloseClick: PropTypes.func
};
export default DropDownMenu;
