import React, { Component } from "react";
import Section from "Features/Section/Section";
import Menu from "./Menu/Menu";
import NavBar from "./NavBar/NavBar";
import "./NavBarContainer.scss";

export default class NavBarContainer extends Component {
  state = { openMenu: true };
  render() {
    const { openMenu } = this.state;
    return (
      <>
        <Section config={{ threshold: 1 }}>
          {({ entry }) =>
            entry.intersectionRatio === 1 ? (
              <div className="navbar-container--fixed">
                <NavBar
                  onChange={openMenu => this.setState(() => ({ openMenu }))}
                  showLanguage={true}
                />
              </div>
            ) : (
              <div className="navbar-container--fixed">
                <NavBar
                  onChange={openMenu => this.setState(() => ({ openMenu }))}
                />
              </div>
            )
          }
        </Section>
        {openMenu && <Menu />}
      </>
    );
  }
}
