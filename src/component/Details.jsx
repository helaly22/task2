import React, { Component } from "react";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course1: "React",
      course2: "Redux",
      course3: "Next",
    };
  }
  render() {
    return (
      <>
        <h1>Details</h1>
        <ul>
          <li>{this.state.course1}</li>
          <br />
          <li>{this.state.course2}</li>
          <br />
          <li>{this.state.course3}</li>
        </ul>
      </>
    );
  }
}
