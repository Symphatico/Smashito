import React from "react";
import { connect } from "react-redux";
import { newCharacter } from "../actions/characterAction";
import { Link, Redirect } from "react-router-dom";

class AgregarPersonaje extends React.Component {
  redirectPage() {
    return <Redirect to="/" />;
  }
  addCharacter = async () => {
    //Sacar el valor de los inputs
    let info = this.getInputValue();
    const dummyCharacter = {
      id: info.idNuevo,
      url: info.UrlNuevo
    };
    await this.props.newCharacter(dummyCharacter);
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
          <a class="btn-floating btn-large waves-effect waves-light red right">
            <i onClick={this.addCharacter} class="material-icons">
              add
            </i>
          </a>
        </Link>
      </div>
    );
  }
}

export default connect(null, { newCharacter })(AgregarPersonaje);
