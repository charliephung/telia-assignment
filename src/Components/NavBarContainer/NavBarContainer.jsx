import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Container from "Commons/Container/Container";
import Section from "Features/Section/Section";
import FormContainer from "./FormContainer/FormContainer";
import NavBar from "./NavBar/NavBar";
import classnames from "classnames";
import Menu from "./Menu/Menu";
import "./NavBarContainer.scss";
import { withLanguage } from "Features/Language/Language";

const navbarContent = [
  {
    Comp: Menu,
    id: 0,
    animation: "drop"
  },
  {
    Comp: FormContainer,
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

  renderContent(navbarContent, state, language) {
    if (navbarContent[state]) {
      const { Comp, id, animation } = navbarContent[state];
      return [
        <CSSTransition timeout={300} key={id} classNames={animation}>
          <Comp
            language={language}
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
    const { language, updateLanguage } = this.props;
    return (
      <>
        <Section config={{ threshold: 1 }}>
          {({ entry, env }) => (
            <Container
              addClass={classnames("navbar__container--fixed", "box-shadow-1")}
            >
              <NavBar
                language={language}
                updateLanguage={updateLanguage}
                activeItem={activeItem}
                onItemClick={this.onItemClick}
                showLanguage={
                  env === "mobile"
                    ? true
                    : entry.intersectionRatio === 1
                    ? true
                    : false
                }
              />
            </Container>
          )}
        </Section>
        <TransitionGroup>
          {this.renderContent(navbarContent, activeItem, language)}
        </TransitionGroup>
      </>
    );
  }
}

NavBarContainer.propTypes = {
  language: PropTypes.object,
  updateLanguage: PropTypes.func
};

const getContext = context => ({
  language: context.language,
  updateLanguage: context.updateLanguage
});

export default withLanguage(NavBarContainer, getContext);
