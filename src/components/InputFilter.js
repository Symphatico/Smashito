import React, { Component } from "react";

export default class InputFilter extends Component {
  render() {
    return (
      <div>
        <input value="Alvin" id="first_name2" type="text" class="validate" />
        <label class="active" for="first_name2">
          First Name
        </label>
      </div>
    );
  }
}
