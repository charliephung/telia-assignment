import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Header.scss";

const Header = React.memo(function(props) {
  const headings = [
    <h1
      style={{
        transition: "1000ms all ease"
      }}
      className="header-heading-1 color-purple-1 "
    >
      WE ARE TELIA
    </h1>,
    <h5
      style={{
        transition: "500ms all ease"
      }}
      className="header-heading-5 color-gray-1"
    >
      Even better services both in and outside Finland.
    </h5>
  ];
  return (
    <header className="header">
      <img
        alt="headerimg"
        src="/img/header-img.jpg"
        className="header-background"
      />
      <div className="header-content">
        <TransitionGroup>
          {headings.map((heading, index) => (
            <CSSTransition
              appear={true}
              key={index}
              timeout={500}
              classNames="fade"
            >
              {heading}
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <picture className="header-icon">
        <img alt="headericon" src="/img/header-icon.png" />
      </picture>
    </header>
  );
});

Header.propTypes = {};
Header.defaultProps = {};
export default Header;
