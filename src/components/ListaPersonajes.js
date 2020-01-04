import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ListaPersonajes.css";
import { characterInfo, getAllVotes } from "../actions/characterAction";

class ListaPersonajes extends React.Component {
  async componentDidMount() {
    await this.props.characterInfo();
    await this.props.getAllVotes();
  }

  sortProps() {
    const { characters } = this.props;
    return characters
      ? characters.sort(function(a, b) {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
        })
      : null;
  }

  renderVotos(character2) {
    const { votar, character1, votes } = this.props;
    //Booleano para generar los votos
    //Personaje seleccionado, Character2=Personaje en la lista
    const voto = votes
      ? votes.filter(
          v => v.chars.includes(character1) && v.chars.includes(character2)
        )
      : null;
    console.log(voto);

    if (votar === true) {
      return (
        <div className="row" char1={character1} char2={character2}>
          <div className="col s6">
            <a href="#!" className="waves-effect waves-teal btn-flat">
              <i className="material-icons">thumb_up</i>
            </a>
          </div>
          <div className="col s6">
            <a href="#!" className="waves-effect waves-teal btn-flat">
              <i className="material-icons">thumb_down</i>
            </a>
          </div>
          <p>Total de votos: 0</p>
          <p>Diferencia de votos: 0</p>

          <span className="badge green"></span>
          <span className="badge red"></span>
        </div>
      );
    }
  }
  renderCard() {
    let { characters, character1 } = this.props;
    characters = characters
      ? characters.filter(c => c.id !== character1)
      : null;
    return characters
      ? characters.map((info, index) => {
          return (
            <div id={info.id} key={index}>
              <div className="col s1 m2 ">
                <div className="card">
                  <div className="card-image">
                    <img src={info.url} alt="Pelaste" className="height" />
                    <Link
                      to={`/characters/${info.id}/rates`}
                      className="btn-floating halfway-fab waves-effect waves-light red"
                    >
                      <i className="material-icons">arrow_forward</i>
                    </Link>
                  </div>
                  <div className="card-content">
                    <p>{info.id}</p>
                    {this.renderVotos(info.id)}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      : null;
  }

  render() {
    return (
      <div className="container">
        {/* Carta del personaje */}
        <div className="row">{(this.sortProps(), this.renderCard())}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characterInfo.characterInfo,
    votes: state.characterInfo.votes
  };
};

const mapFunctionsToProps = {
  characterInfo,
  getAllVotes
};

export default connect(mapStateToProps, mapFunctionsToProps)(ListaPersonajes);
