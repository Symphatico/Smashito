import React from "react";
import "./ListaPersonajes.css";
import ListaPersonajes from "./ListaPersonajes";
import { connect } from "react-redux";
import { characterInfo } from "../actions/characterAction";
import Spinner from "./Spinner";

class PaginaPersonaje extends React.Component {
  getData() {
    const { characters } = this.props;
    const { characterId } = this.props.match.params;
    const currentCharacter = characters.find(c => c.id === characterId);
    const data = {
      id: currentCharacter.id,
      img: currentCharacter.url
    };
    return data;
  }

  renderPersonaje() {
    const data = this.getData();
    console.log(data);
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

  render() {
    const { characters } = this.props;
    return characters ? this.renderPersonaje() : <Spinner />;
  }
}

const mapStateToProps = state => {
  return { characters: state.characterInfo.characterInfo };
};

export default connect(mapStateToProps, { characterInfo })(PaginaPersonaje);
