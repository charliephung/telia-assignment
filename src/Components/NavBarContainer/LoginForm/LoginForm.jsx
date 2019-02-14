import React, { PureComponent } from "react";
import { Email, People, FingerPrint } from "Commons/Icons";
import Container from "Commons/Container/Container";
import BankCodeForm from "./BankCodeForm/BankCodeForm";
import UserNameForm from "./UserNameForm/UserNameForm";
import MobileForm from "./MobileForm/MobileForm";
import Slider from "Features/Slider/Slider";
import classnames from "classnames";
import Nav from "Commons/Nav/Nav";

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
const footerItems = [
  [Email, "E-mail"],
  [People, "Community"],
  [FingerPrint, "Mobile certificate"]
];

export default class LoginForm extends PureComponent {
  state = { activeItem: 0 };

  onLoginTabClick = activeItem => {
    this.setState(state => {
      if (state.activeItem === activeItem) return null;
      return { activeItem };
    });
  };

  render() {
    const { className = "login-form", addClass = "", ...rest } = this.props;
    const { activeItem } = this.state;

    const newClassName = classnames(className, addClass);
    const Forms = [MobileForm, UserNameForm, BankCodeForm];
    return (
      <div {...rest} className={newClassName}>
        <Container
          style={{
            backgroundColor: "white",
            paddingTop: "3rem"
          }}
        >
          <h1 className="color-gray-3">LOGIN</h1>
          <Nav addClass="color-gray-1">
            <Nav.List>
              {navItems.map((content, index) => (
                <Nav.Item
                  onClick={() => this.onLoginTabClick(index)}
                  key={index}
                  addClass={"login-form__item"}
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
            <div className="login-form__container__left">
              <Slider
                sliderStyle={{
                  width: "70rem"
                }}
                showSlide={activeItem}
              >
                {Forms.map((Form, index) => (
                  <Form key={index} />
                ))}
              </Slider>
            </div>
            <div />
            <div className="login-form__container__right">
              <h3>Sign in and keep things right for you:</h3>
              <br />
              <ul>
                {things.map((content, index) => (
                  <li key={index}>{content}</li>
                ))}
              </ul>
            </div>
          </Container>
          <Container
            style={{
              backgroundColor: "white"
            }}
          >
            <Nav>
              <Nav.List addClass="login-form__footer">
                {footerItems.map(([Item, content], index) => (
                  <Nav.Item addClass="login-form__footer__item" key={index}>
                    <Item />
                    {content}
                  </Nav.Item>
                ))}
              </Nav.List>
            </Nav>
          </Container>
        </div>
      </div>
    );
  }
}
