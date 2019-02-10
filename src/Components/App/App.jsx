import React, { Component } from "react";
import Header from "Components/Header/Header";
import NavBar from "Components/NavBar/NavBar";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Header />
      </>
    );
  }
}

export default App;
