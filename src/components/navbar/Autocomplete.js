//Pitudo el autocomplete, sirve para todo
import React, { Component } from "react";
import M from "materialize-css";
//Esto ya es para esta aplicacion
import { characterInfo } from "../../actions/characterAction";
import { connect } from "react-redux";

class Autocomplete extends Component {
  async componentDidMount() {
    let reserva = {};
    await this.props.characterInfo();
    let { characters } = this.props;
    for (let i = 0; i < characters.length; i++) {
      reserva = characters[i];
    }
    console.log(reserva);
    this.instance = M.Autocomplete.init(this._Autocomplete, reserva.id);
  }
  render() {
    return (
      <div class="input-field col s4 right">
        <i class="material-icons prefix">textsms</i>
        <input
          ref={el => (this._Autocomplete = el)}
          type="text"
          id="autocomplete-input"
          class="autocomplete"
        />
        <label for="autocomplete-input">Autocomplete</label>
      </div>
    );
  }
}
//Sirve para esta aplicacion
const mapStateToProps = state => {
  return { characters: state.characterInfo.characterInfo };
};
//Quepex
export default connect(mapStateToProps, { characterInfo })(Autocomplete);
