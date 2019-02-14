import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Email, People, FingerPrint } from "Commons/Icons";
import { withLanguage } from "Features/Language/Language";
import BankCodeForm from "./BankCodeForm/BankCodeForm";
import UserNameForm from "./UserNameForm/UserNameForm";
import Container from "Commons/Container/Container";
import MobileForm from "./MobileForm/MobileForm";
import Slider from "Features/Slider/Slider";
import classnames from "classnames";
import Nav from "Commons/Nav/Nav";

import "./FormContainer.scss";

class LoginForm extends PureComponent {
  state = { activeItem: 0 };

  onLoginTabClick = activeItem => {
    this.setState(state => {
      if (state.activeItem === activeItem) return null;
      return { activeItem };
    });
  };

  render() {
    const {
      className = "login-form box-shadow-1",
      addClass = "",
      onCloseClick = () => {},
      language,
      ...rest
    } = this.props;

    const display = language.login;
    const navItems = [display.nav0, display.nav1, display.nav2];
    const things = [
      display.listItem0,
      display.listItem1,
      display.listItem2,
      display.listItem3,
      display.listItem4,
      display.listItem5
    ];
    const footerItems = [
      [Email, display.navFooter1],
      [People, display.navFooter2],
      [FingerPrint, display.navFooter3]
    ];
    const { activeItem } = this.state;

    const newClassName = classnames(className, addClass);
    const Forms = [MobileForm, UserNameForm, BankCodeForm];
    return (
      <div {...rest} className={newClassName}>
        <Container addClass="login-form__outer-container" style={{}}>
          <h1 className="login-form__heading color-gray-1">
            {display.heading0}
          </h1>
          <Nav addClass="color-gray-1">
            <Nav.List addClass="login-form__list">
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
              <Slider addClass={"login-form__slider"} showSlide={activeItem}>
                {Forms.map((Form, index) => (
                  <Form language={display} key={index} />
                ))}
              </Slider>
            </div>
            <div />
            <div className="login-form__container__right">
              <h3>{display.listHeading}</h3>
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

LoginForm.propTypes = {
  className: PropTypes.string,
  addClass: PropTypes.string,
  onCloseClick: PropTypes.func,
  language: PropTypes.object
};

const getContext = context => ({
  language: context.language
});

export default withLanguage(LoginForm, getContext);
