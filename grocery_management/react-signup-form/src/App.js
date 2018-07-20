import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Signup";
import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Signup />
      </div>
    );
  }
}

export default App;
