import React, { Component } from "react";
import Container from "Commons/Container/Container";
import MobileForm from "./MobileForm/MobileForm";
import Nav from "Commons/Nav/Nav";
import classnames from "classnames";
import "./LoginForm.scss";

const navItems = [
  "With mobile certificate",
  "With username",
  "With banking codes"
];
const things = [
  "Pay bills in a couple of clicks",
  "Update your subscription and service",
  "Subscribe to TV channels",
  "Find the PUK code",
  "Stay connected to our customer service around the clock",
  "And much more!"
];

export default class LoginForm extends Component {
  state = { activeItem: 0 };

  onItemClick = activeItem => {
    this.setState(state => {
      if (state.activeItem === activeItem) return null;
      return { activeItem };
    });
  };

  render() {
    const { className = "login-form", addClass = "", ...rest } = this.props;
    const { activeItem } = this.state;
    const newClassName = classnames(className, addClass);
    return (
      <div {...rest} className={newClassName}>
        <Container
          style={{
            backgroundColor: "white"
          }}
        >
          <br />
          <br />
          <h1 className="color-gray-3">LOGIN</h1>
          <Nav addClass="color-gray-1">
            <Nav.List>
              {navItems.map((content, index) => (
                <Nav.Item
                  onClick={() => this.onItemClick(index)}
                  key={index}
                  addClass={classnames("login-form__item", {
                    "login-form__item": index === activeItem
                  })}
                >
                  {content}
                </Nav.Item>
              ))}
              <div
                className={classnames(
                  "login-form__item__underbar",
                  `login-form__item__underbar--active--${activeItem}`
                )}
              />
            </Nav.List>
          </Nav>
        </Container>
        <div className="login-form__body">
          <Container addClass="login-form__container">
            <MobileForm />
            <div />
            <div>
              <h3>Sign in and keep things right for you:</h3>
              <ul>
                {things.map((content, index) => (
                  <li key={index}>{content}</li>
                ))}
              </ul>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
