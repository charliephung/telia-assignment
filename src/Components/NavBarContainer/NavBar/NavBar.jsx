import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "Commons/Nav/Nav";
import Icon from "Commons/Icons/Logo";
import User from "Commons/Icons/User";
import Burger from "Commons/Icons/Burger";
import Cart from "Commons/Icons/Cart";
import "./NavBar.scss";

const language = ["FI", "SV", "EN"];
class NavBar extends Component {
  state = { openMenu: false };

  onClickMenu = () => {
    const { onChange } = this.props;
    this.setState(
      ({ openMenu }) => ({ openMenu: !openMenu }),
      () => {
        onChange(this.state.openMenu);
      }
    );
  };

  render() {
    const { showLanguage } = this.props;
    const showLanguageClassName = showLanguage
      ? "navbar-span navbar-span--show"
      : "navbar-span";
    return (
      <Nav addClass="box-shadow-1">
        <Nav.List>
          <Nav.Item>
            <Icon className="navbar-brand" />
          </Nav.Item>
        </Nav.List>
        <span className={showLanguageClassName}>
          <ul>
            {language.map(l => (
              <li>{l}</li>
            ))}
          </ul>
        </span>
        <Nav.List addClass="right">
          <Nav.Item addClass="navbar-item" onClick={this.onClickMenu}>
            <Burger
              open={this.state.openMenu}
              className="navbar-icon"
              backgroundcolor={"#b246ea"}
              width={"4rem"}
              height={".6rem"}
            />
            Menu
          </Nav.Item>
          <Nav.Item addClass="navbar-item">
            <User className="navbar-icon" />
            Login
          </Nav.Item>
          <Nav.Item addClass="navbar-item">
            <Cart className="navbar-icon" />
          </Nav.Item>
        </Nav.List>
      </Nav>
    );
  }
}

NavBar.propTypes = {
  onChange: PropTypes.func,
  showLanguage: PropTypes.bool
};
NavBar.defaultProps = {
  onChange: () => {}
};

export default NavBar;
