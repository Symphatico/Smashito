import React, { Component } from "react";

export default class InputFilter extends Component {
  onChangeInput = event => {
    const { onInputChange } = this.props;
    onInputChange(event.target.value);
  };

  render() {
    return (
      <div>
        <input
          placeholder="Placeholder"
          id="first_name"
          type="text"
          className="validate"
          onChange={this.onChangeInput}
        />
      </div>
    );
  }
}
