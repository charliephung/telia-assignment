import React, { Component } from "react";
import { Language } from "Features/Language/Language";
import DynamicImport from "Features/DynamicImport/DynamicImport";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Language>
        <DynamicImport
          load={() => import("Components/NavBarContainer/NavBarContainer")}
          render={Comp => Comp && <Comp />}
        />
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
      </Language>
    );
  }
}

export default App;
