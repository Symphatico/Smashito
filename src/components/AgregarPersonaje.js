import React from "react";
import { connect } from "react-redux";
import { newCharacter } from "../actions/characterAction";
import { Link } from "react-router-dom";

class AgregarPersonaje extends React.Component {
  redirectPage = () => {
    const { history } = this.props;
    history.push("/");
  };
  addCharacter = async () => {
    //Sacar el valor de los inputs
    let info = this.getInputValue();
    const newInfoCharacter = {
      id: info.idNuevo,
      url: info.UrlNuevo,
      totalVotos: 0
    };
    await this.props.newCharacter(newInfoCharacter);
  };

  getInputValue() {
    return {
      idNuevo: this.refs.name.value,
      UrlNuevo: this.refs.URLimagen.value
    };
  }

  render() {
    return (
      <div className="container">
        <input
          ref="name"
          placeholder="Nombre Personaje"
          id="name"
          type="text"
        ></input>
        <input
          ref="URLimagen"
          placeholder="URL del personaje"
          id="URLimagen"
          type="text"
        ></input>
        <Link onClick={this.redirectPage} to="/">
          <a className="btn-floating btn-large waves-effect waves-light red right">
            <i onClick={this.addCharacter} className="material-icons">
              add
            </i>
          </a>
        </Link>
      </div>
    );
  }
}

export default connect(null, { newCharacter })(AgregarPersonaje);
