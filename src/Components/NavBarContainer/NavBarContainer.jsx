import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import classnames from "classnames";
import Container from "Commons/Container/Container";
import Section from "Features/Section/Section";
import LoginForm from "./LoginForm/LoginForm";
import NavBar from "./NavBar/NavBar";
import Menu from "./Menu/Menu";

import "./NavBarContainer.scss";

export default class NavBarContainer extends Component {
  state = { activeItem: 1 };

  onItemClick = activeItem => {
    this.setState(state =>
      activeItem === state.activeItem ? { activeItem: null } : { activeItem }
    );
  };

  render() {
    const { activeItem } = this.state;
    const NavBarDropDown = [Menu, LoginForm][activeItem];
    return (
      <>
        <Section config={{ threshold: 1 }}>
          {({ entry }) => (
            <Container
              addClass={classnames("navbar__container--fixed", "box-shadow-1")}
            >
              <NavBar
                activeItem={activeItem}
                onItemClick={this.onItemClick}
                showLanguage={entry.intersectionRatio === 1 ? true : false}
              />
            </Container>
          )}
        </Section>
        <TransitionGroup>
          {NavBarDropDown && [
            <CSSTransition timeout={300} key={activeItem} classNames="drop">
              <NavBarDropDown
                style={{
                  transition: "300ms all ease"
                }}
              />
            </CSSTransition>,
            <CSSTransition timeout={1000} key={10} classNames="fade">
              <NavBarDropDownBackGround
                onClick={() => this.onItemClick(null)}
              />
            </CSSTransition>
          ]}
        </TransitionGroup>
      </>
    );
  }
}

function NavBarDropDownBackGround({ addClass = "", onClick, ...rest }) {
  return (
    <div
      {...rest}
      onClick={onClick}
      style={{
        transition: "1000ms all ease",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 5,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)"
      }}
    />
  );
}
