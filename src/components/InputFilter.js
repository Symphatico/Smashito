import React, { Component } from "react";

export default class InputFilter extends Component {
  state = { filter: "" };

  onChangeInput = event => {
    this.setState({ filter: event });
    console.log(this.state.filter);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onInputSubmit}>
          <input
            placeholder="Placeholder"
            id="first_name"
            type="text"
            className="validate"
            onChange={e => this.onChangeInput(e.target.value)}
          />
        </form>
      </div>
    );
  }
}
