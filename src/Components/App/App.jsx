import React, { Component } from "react";
import { Language } from "Features/Language/Language";
import Loading from "Commons/Loading";
import DynamicImport from "Features/DynamicImport/DynamicImport";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Language>
        <DynamicImport
          load={() => import("Components/NavBarContainer/NavBarContainer")}
          render={Comp => (Comp === null ? null : <Comp />)}
        />
        <DynamicImport
          load={() => import("Components/Header/Header")}
          render={Comp =>
            Comp === null ? (
              <Loading />
            ) : (
              <>
                <Comp />
                <div style={{ height: "2000px" }} />
              </>
            )
          }
        />
      </Language>
    );
  }
}

export default App;
