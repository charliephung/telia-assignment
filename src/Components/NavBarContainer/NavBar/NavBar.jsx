import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "Commons/Nav/Nav";
import classnames from "classnames";
import { Logo, User, Burger, Cart } from "Commons/Icons";
import "./NavBar.scss";

const languages = ["FI", "SV", "EN"];
const navItems = [[Burger, "MENU"], [User, "LOGIN"], [Cart, ""]];

class NavBar extends Component {
  render() {
    const { showLanguage, activeItem, onItemClick, ...rest } = this.props;

    return (
      <Nav {...rest}>
        <Nav.List>
          <Logo className="navbar__brand" />
        </Nav.List>
        <span
          className={classnames("navbar__span", {
            "navbar__span navbar__span--show": showLanguage
          })}
        >
          <ul>
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </span>
        <Nav.List addClass="right">
          {navItems.map(([Item, content], index) => (
            <Nav.Item
              key={index}
              addClass={classnames("navbar__item", {
                "navbar__item navbar__item--active": activeItem === index
              })}
              onClick={() => onItemClick(index)}
            >
              <Item
                open={activeItem === 0 ? true : false}
                addClass="navbar__icon"
              />
              {content}
            </Nav.Item>
          ))}
        </Nav.List>
      </Nav>
    );
  }
}

NavBar.propTypes = {
  onChange: PropTypes.func,
  showLanguage: PropTypes.bool,
  onItemClick: PropTypes.func,
  activeItem: PropTypes.number
};
NavBar.defaultProps = {
  onChange: () => {},
  onItemClick: () => {},
  activeItem: null
};

export default NavBar;
