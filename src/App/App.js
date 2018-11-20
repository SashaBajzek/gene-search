import React, { Component } from "react";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
// TODO type ahead (click to get to variants) & back clear in search bar clear out
// spend <3 hours
// dylan.reinhardt@invitae.com

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox />
      </div>
    );
  }
}

export default App;
