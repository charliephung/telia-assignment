import React, { PureComponent } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Container from "Commons/Container/Container";
import Section from "Features/Section/Section";
import LoginForm from "./LoginForm/LoginForm";
import NavBar from "./NavBar/NavBar";
import classnames from "classnames";
import Menu from "./Menu/Menu";
import "./NavBarContainer.scss";

const navbarContent = [
  {
    Comp: Menu,
    id: 0,
    animation: "drop"
  },
  {
    Comp: LoginForm,
    id: 1,
    animation: "drop"
  },
  { Comp: ShoppingCart, id: 2, animation: "slide-right" }
];

const NavBarMainBackGround = React.memo(function({
  addClass = "",
  onClick,
  ...rest
}) {
  return <div {...rest} onClick={onClick} className="navbar__background" />;
});

class NavBarContainer extends PureComponent {
  state = { activeItem: null };

  onItemClick = activeItem => {
    this.setState(state =>
      activeItem === state.activeItem ? { activeItem: null } : { activeItem }
    );
  };

  renderContent(navbarContent, state) {
    if (navbarContent[state]) {
      const { Comp, id, animation } = navbarContent[state];
      return [
        <CSSTransition timeout={300} key={id} classNames={animation}>
          <Comp
            style={{
              transition: "300ms all ease"
            }}
            onCloseClick={id === 2 ? () => this.onItemClick(null) : undefined}
          />
        </CSSTransition>,
        <CSSTransition timeout={1000} key={10} classNames="fade">
          <NavBarMainBackGround onClick={() => this.onItemClick(null)} />
        </CSSTransition>
      ];
    }
    return null;
  }

  render() {
    const { activeItem } = this.state;

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
          {this.renderContent(navbarContent, activeItem)}
        </TransitionGroup>
      </>
    );
  }
}

NavBarContainer.propTypes = {};
NavBarContainer.defaultProps = {};

export default NavBarContainer;
