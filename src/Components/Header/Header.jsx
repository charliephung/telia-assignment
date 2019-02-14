import React from "react";
import PropTypes from "prop-types";
import { withLanguage } from "Features/Language/Language";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Header.scss";

const Header = React.memo(function({ language }) {
  const headings = [
    <h1
      style={{
        transition: "all 1s cubic-bezier(.22,.68,0,1.71)"
      }}
      className="header-heading-1 color-purple-1 "
    >
      {language.header.heading1}
    </h1>,
    <h5
      style={{
        transition: "1s all cubic-bezier(.25,.75,.5,1.25)"
      }}
      className="header-heading-5 color-gray-1"
    >
      {language.header.heading2}
    </h5>
  ];
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
              {headings[0]}
            </CSSTransition>,
            <CSSTransition
              appear={true}
              key={1}
              timeout={0}
              classNames="slide-right"
            >
              {headings[1]}
            </CSSTransition>
          ]}
        </TransitionGroup>
      </div>
      <TransitionGroup>
        [
        <CSSTransition appear={true} key={0} timeout={0} classNames="fade">
          <picture
            style={{
              transition: "2000ms all ease"
            }}
            className="header__icon"
          >
            <TransitionGroup>
              <CSSTransition
                appear={true}
                key={0}
                timeout={0}
                classNames="fade"
              >
                <img
                  className="header__icon__background"
                  style={{
                    transition: "4000ms all ease"
                  }}
                  alt="headericon"
                  src="/img/header-icon.png"
                />
              </CSSTransition>
            </TransitionGroup>
          </picture>
        </CSSTransition>
        ]
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
