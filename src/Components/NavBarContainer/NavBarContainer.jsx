import React, { Component } from "react";
import Section from "Features/Section/Section";
import NavBar from "./NavBar/NavBar";
import Menu from "./Menu/Menu";
import "./NavBarContainer.scss";

export default class NavBarContainer extends Component {
  render() {
    return (
      <>
        <Section config={{ threshold: 1 }}>
          {({ entry }) =>
            entry.intersectionRatio === 1 ? (
              <div className="navbar-container--fixed">
                <NavBar />
              </div>
            ) : (
              <div className="navbar-container--fixed">
                <NavBar showLanguage={true} />
              </div>
            )
          }
        </Section>
        <Menu />
      </>
    );
  }
}
