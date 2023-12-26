import React, { Component } from "react";

class Task6 extends Component {
  hello() {
    alert("Hello");
  }
  bye() {
    alert("Bye");
  }
  render() {
    return (
      <div>
        <button onClick={this.hello}> Hello </button>
        <button onClick={this.bye}>Bye</button>
      </div>
    );
  }
}

export default Task6;
