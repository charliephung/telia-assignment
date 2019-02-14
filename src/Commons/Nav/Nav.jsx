import React, { Component } from "react";
import "./Nav.scss";

const List = ({ className, addClass = "", children, ...rest }) => {
  if (className === undefined) className = "nav-list " + addClass;
  else className += " " + addClass;
  return (
    <ul {...rest} className={className}>
      {children}
    </ul>
  );
};
const Item = ({ className, addClass = "", children, ...rest }) => {
  if (className === undefined) className = "nav-item " + addClass;
  else className += " " + addClass;

  return (
    <li {...rest} className={className}>
      {children}
    </li>
  );
};
const Link = ({ className, addClass = "", href = "", children, ...rest }) => {
  if (className === undefined) className = "nav-link " + addClass;
  else className += " " + addClass;

  return (
    <a href={href} {...rest} className={className}>
      {children}
    </a>
  );
};

export default class Nav extends Component {
  static List = List;
  static Item = Item;
  static Link = Link;

  render() {
    let { className, addClass = "", children, ...rest } = this.props;
    if (className === undefined) className = "nav " + addClass;
    else className += " " + addClass;
    return (
      <nav {...rest} className={className}>
        {children}
      </nav>
    );
  }
}
