import React, { Component } from "react";
import Icon from "Commons/Icons/Logo";
import User from "Commons/Icons/User";
import Burger from "Commons/Icons/Burger";
import Cart from "Commons/Icons/Cart";
import "./NavBar.scss";

const List = props => <ul className="navbar-list">{props.children}</ul>;
const Item = props => <li className="navbar-item">{props.children}</li>;

export default class NavBar extends Component {
  static List = List;
  static Item = Item;
  state = { menuOpen: true };

  render() {
    const { showLanguage } = this.props;
    const { menuOpen } = this.state;
    return (
      <nav className={`navbar navbar`}>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Icon className="navbar-brand" />
          </li>
          {showLanguage ? (
            <span className="navbar-list-back">
              <ul>
                <li>FI</li>
                <li>SV</li>
                <li>EN</li>
              </ul>
            </span>
          ) : (
            <span className="navbar-list-back navbar-list-back--show">
              <ul>
                <li>FI</li>
                <li>SV</li>
                <li>EN</li>
              </ul>
            </span>
          )}
        </ul>
        <ul className="navbar-list right">
          <li
            onClick={e =>
              this.setState(state => ({ menuOpen: !state.menuOpen }))
            }
            className="navbar-item"
          >
            <div className="navbar-icon">
              <Burger
                open={menuOpen}
                className="navbar-icon"
                backgroundcolor={"#b246ea"}
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
}
