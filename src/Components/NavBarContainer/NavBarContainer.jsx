import React, { PureComponent } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { withLanguage } from "Features/Language/Language";
import IsScrollTop from "Features/IsScrollTop/IsScrollTop";
import FormContainer from "Components/FormContainer/FormContainer";
import ShoppingCart from "Components/ShoppingCart/ShoppingCart";
import DropDownMenu from "Components/DropDownMenu/DropDownMenu";
import NavBar from "./NavBar/NavBar";
import "./NavBarContainer.scss";

const navbarContent = [
  {
    Comp: DropDownMenu,
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
        </CSSTransition>
      ];
    }
    return null;
  }

  render() {
    const { activeItem } = this.state;
    const { language, updateLanguage } = this.props;
    return (
      <div className={"navbar-container"}>
        <IsScrollTop>
          {({ isScrollTop }) => (
            <NavBar
              language={language}
              updateLanguage={updateLanguage}
              activeItem={activeItem}
              onItemClick={this.onItemClick}
              showLanguage={isScrollTop ? true : false}
            />
          )}
        </IsScrollTop>
        <TransitionGroup>
          {this.renderContent(navbarContent, activeItem, language)}
        </TransitionGroup>
        <TransitionGroup>
          {activeItem !== null && (
            <CSSTransition timeout={300} key={10} classNames={"fade"}>
              <div
                onClick={() => this.onItemClick(null)}
                className="navbar-container__dark-background"
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
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
