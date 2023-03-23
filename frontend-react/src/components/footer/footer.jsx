import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className="d-flex justify-content-between align-items-center flex-column-reverse flex-sm-row">
          <span>Club Brugge | Player Stats Center</span>
          <img
            className="mt-4 mb-2 mt-sm-0 mb-sm-0"
            src={require("../../assets/img/club-footer-icon.png")}
            alt=""
          />
          <span>Michiel Blommaert &copy; 2023</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
