import React from "react";
import ListaPersonajes from "./ListaPersonajes";
import { Link } from "react-router-dom";

class Principal extends React.Component {
  render() {
    return (
      <div>
        <ListaPersonajes />
        <div className="container">
          <Link to="/addCharacter" className="waves-effect waves-light btn">
            Agregar Personaje
          </Link>
        </div>
      </div>
    );
  }
}

export default Principal;
