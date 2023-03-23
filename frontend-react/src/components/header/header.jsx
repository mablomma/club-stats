import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <a href="/" className="branding">
          <img src={require("../../assets/img/team_icons/977.png")} alt="" />
          <h1>
            <span>Player Stats</span> Center
          </h1>
        </a>
      </header>
    );
  }
}

export default Header;
