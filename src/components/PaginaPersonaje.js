import React from "react";
import "./ListaPersonajes.css";
import ListaPersonajes from "./ListaPersonajes";
import { connect } from "react-redux";
import { getCharacter } from "../actions/characterAction";
import Spinner from "./Spinner";
import Autocomplete from "./navbar/Autocomplete";

class PaginaPersonaje extends React.Component {
  state = { filter: "" };

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

  autocomplete() {
    const { characters } = this.props;
    if (!characters) return null;
    let characterData = {};
    characters.forEach(element => {
      characterData[element.id] = element.url;
    });
    return characterData;
  }

  onAutoComplete = characterId => {
    this.setState({ filter: characterId });
  };

  renderPersonaje() {
    const data = this.props.character;
    return (
      <div>
        <div className="container center row">
          <div className="row">
            <img
              className="imagenPersonaje"
              src={data.url}
              alt="Soy la imagen"
            />
            <h3>{data.id}</h3>
          </div>
          <div className="row ">
            <div className="col s12">
              <Autocomplete
                data={this.autocomplete()}
                id="personaje"
                className="col s12"
                onAutoComplete={this.onAutoComplete}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <ListaPersonajes
            filter={this.state.filter}
            votar={true}
            character1={data.id}
          />
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
    characters: state.characterInfo.characterInfo,
    isLoading: state.characterInfo.isLoading
  };
};

export default connect(mapStateToProps, { getCharacter })(PaginaPersonaje);
