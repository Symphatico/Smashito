//Pitudo el autocomplete, sirve para todo
import React, { Component } from "react";
import M from "materialize-css";
import history from "../../history";

class Autocomplete extends Component {
  componentDidMount() {
    let { data } = this.props;
    const options = {
      data: data
    };
    this.instance = M.Autocomplete.init(this._Autocomplete, options);
  }

  componentDidUpdate() {
    if (this.instance) {
      this.instance.destroy();
      let { data } = this.props;
      const options = {
        data: data,
        onAutocomplete: info => {
          history.push(`/characters/${info}/rates`);
        }
      };

      this.instance = M.Autocomplete.init(this._Autocomplete, options);
    }
  }
  render() {
    return (
      <div className="input-field col s4 right">
        <i className="material-icons prefix">textsms</i>
        <input
          ref={el => (this._Autocomplete = el)}
          type="text"
          id="autocomplete-input"
          className="autocomplete"
        />
        <label htmlFor="autocomplete-input">Autocomplete</label>
      </div>
    );
  }
}

export default Autocomplete;
