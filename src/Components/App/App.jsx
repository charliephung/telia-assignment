import React, { Component } from "react";
import { Language } from "Features/Language/Language";
import DynamicImport from "Features/DynamicImport/DynamicImport";
import "./App.scss";

const NavBarContainer = () => (
  <DynamicImport
    load={() => import("Components/NavBarContainer/NavBarContainer")}
    render={Comp => Comp && <Comp />}
  />
);
const Header = () => (
  <DynamicImport
    load={() => import("Components/Header/Header")}
    render={Comp =>
      Comp && (
        <>
          <Comp />
          <div style={{ height: "2000px" }} />
        </>
      )
    }
  />
);

class App extends Component {
  render() {
    return (
      <Language>
        <NavBarContainer />
        <Header />
      </Language>
    );
  }
}

export default App;
