import React, { Component } from "react";
import Header from "Components/Header/Header";
import NavBarContainer from "Components/NavBarContainer/NavBarContainer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <NavBarContainer />
        <Header />
        <div style={{ height: "2000px" }} />
      </>
    );
  }
}

export default App;
