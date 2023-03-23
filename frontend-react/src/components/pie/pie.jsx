import React, { Component } from "react";
import "./pie.css";

class PieChart extends Component {
  state = {};

  getColor = () => {
    if (this.props.value === this.props.total) return "#62BE70";
    return "orange";
  };

  render() {
    return (
      <div
        class="pie animate"
        style={{
          "--p": (this.props.value / this.props.total) * 100,
          "--c": this.getColor(),
        }}
      >
        {this.props.value}
      </div>
    );
  }
}

export default PieChart;
