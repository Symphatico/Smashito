//Pitudo el autocomplete, sirve para todo
import React, { Component } from "react";
import M from "materialize-css";

class Autocomplete extends Component {
  componentDidMount() {
    let { data, onAutoComplete } = this.props;
    const options = {
      data: data,
      onAutocomplete: info => {
        onAutoComplete(info);
      }
    };
    this.instance = M.Autocomplete.init(this._Autocomplete, options);
  }

  componentDidUpdate() {
    if (this.instance) {
      this.instance.destroy();
      let { data, onAutoComplete } = this.props;
      const options = {
        data: data,
        onAutocomplete: info => {
          onAutoComplete(info);
        }
      };
      this.instance = M.Autocomplete.init(this._Autocomplete, options);
    }
  }
  render() {
    const { id, className } = this.props;

    return (
      <div className={`input-field ${className}`}>
        <i className="material-icons prefix">textsms</i>
        <input
          ref={el => (this._Autocomplete = el)}
          type="text"
          id={`autocomplete-input-${id}`}
          className="autocomplete"
        />
        <label htmlFor={`autocomplete-input-${id}`}>Autocomplete</label>
      </div>
    );
  }
}

export default Autocomplete;
