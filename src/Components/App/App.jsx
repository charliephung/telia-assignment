import React, { Component } from "react";
import Header from "Components/Header/Header";
import { Language } from "Features/Language/Language";
import NavBarContainer from "Components/NavBarContainer/NavBarContainer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Language>
        <NavBarContainer />
        <Header />
        <div style={{ height: "2000px" }} />
      </Language>
    );
  }
}

export default App;
