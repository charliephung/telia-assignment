import React from "react";
import PropTypes from "prop-types";
import { withLanguage } from "Features/Language/Language";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Header.scss";

const Header = React.memo(function({ language }) {
  return (
    <header className="header">
      <img
        alt="headerimg"
        src="/img/header-img.jpg"
        className="header__background"
      />
      <div className="header__content">
        <TransitionGroup>
          {[
            <CSSTransition
              appear={true}
              key={0}
              timeout={0}
              classNames="slide-left"
            >
              <h1 className="header-heading-1 color-purple-1 ">
                {language.header.heading1}
              </h1>
            </CSSTransition>,
            <CSSTransition
              appear={true}
              key={1}
              timeout={0}
              classNames="slide-right"
            >
              <h5 className="header-heading-5 color-gray-1">
                {language.header.heading2}
              </h5>
            </CSSTransition>
          ]}
        </TransitionGroup>
      </div>
      <TransitionGroup className="header__icon">
        <CSSTransition appear={true} key={0} timeout={0} classNames="fade">
          <picture
            style={{
              transition: "4000ms all ease"
            }}
          >
            <img
              className="header__icon__background"
              alt="headericon"
              src="/img/header-icon.png"
            />
          </picture>
        </CSSTransition>
      </TransitionGroup>
    </header>
  );
});

Header.propTypes = {
  language: PropTypes.object
};
Header.defaultProps = {};

const getContext = context => ({
  language: context.language
});

export default withLanguage(Header, getContext);
