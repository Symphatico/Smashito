import React from "react";
import "./ListaPersonajes.css";
import ListaPersonajes from "./ListaPersonajes";
import { connect } from "react-redux";
import { getCharacter } from "../actions/characterAction";
import Spinner from "./Spinner";

class PaginaPersonaje extends React.Component {
  async componentDidMount() {
    const { characterId } = this.props.match.params;
    await this.props.getCharacter(characterId);
  }

  async componentDidUpdate() {
    const { characterId } = this.props.match.params;
    const { character } = this.props;
    if (characterId !== character.id) {
      await this.props.getCharacter(characterId);
    }
  }
  renderPersonaje() {
    const data = this.props.character;
    return (
      <div>
        <div className="container center">
          <img className="imagenPersonaje" src={data.url} alt="Soy la imagen" />
          <h3>{data.id}</h3>
        </div>
        <div>
          <ListaPersonajes votar={true} character1={data.id} />
        </div>
      </div>
    );
  }

  render() {
    const { isLoading } = this.props;

    return !isLoading ? this.renderPersonaje() : <Spinner />;
  }
}

const mapStateToProps = state => {
  return {
    character: state.characterInfo.character,
    isLoading: state.characterInfo.isLoading
  };
};

export default connect(mapStateToProps, { getCharacter })(PaginaPersonaje);
