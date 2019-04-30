import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={'https://http:pm1.narvii.com/6488/ad82146543e9ec9e184ec360c6522075652300aa_hq.jpg'}/>
      </div>
    );
  }
}

export default App;
