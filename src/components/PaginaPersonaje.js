import React from "react";
import "./ListaPersonajes.css";
import ListaPersonajes from "./ListaPersonajes";

class PaginaPersonaje extends React.Component {
  render() {
    const { data } = this.props.location;
    return (
      <div>
        <div className="container center">
          <img className="imagenPersonaje" src={data.img} alt="Soy la imagen" />
          <h3>{data.id}</h3>
        </div>
        <div>
          <ListaPersonajes votar={true} />
        </div>
      </div>
    );
  }
}

export default PaginaPersonaje;
