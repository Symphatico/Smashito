import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ListaPersonajes.css";
import {
  characterInfo,
  getAllVotes,
  newVote
} from "../actions/characterAction";
import InputFilter from "./InputFilter";

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

  //Indicadores verdes y rojo
  indicadores(votosPositivos, votosNegativos) {
    if (votosPositivos > votosNegativos) {
      return <span className="badge green"></span>;
    } else {
      if (votosPositivos < votosNegativos) {
        return <span className="badge red"></span>;
      }
    }
  }

  //Sube el voto a la base de datos
  voto = async (character1, character2, bandera) => {
    const { userId, isSignedIn } = this.props;
    if (isSignedIn) {
      let voto = {};
      //Bandera sera 1 si es voto a favor, 0 si es negativo
      if (bandera === 1) {
        voto = {
          chars: [character1, character2],
          winner: character1,
          userId
        };
      } else {
        voto = {
          chars: [character1, character2],
          winner: character2,
          userId
        };
      }
      await this.props.newVote(voto);
    }
  };

  renderVotos(character2) {
    let totalVotos = null;
    let votosAFavor = null;
    let votosNegativo = null;
    const { votar, character1, votes, isSignedIn, userId } = this.props;
    //Booleano para generar los votos
    //Personaje seleccionado, Character2=Personaje en la lista
    const voto = votes //Obtiene el arreglo de objetos de los personajes que se han votado
      ? votes.filter(
          v => v.chars.includes(character1) && v.chars.includes(character2)
        )
      : null;
    if (voto !== null) {
      //Para no tronar en el primer render
      totalVotos = voto.length;
      for (let i = 0; i < totalVotos; i++) {
        //Recorre el arreglo obtenido y si el winner es el seleccionado, se incrementa un voto a favor
        if (voto[i].winner === character1) {
          votosAFavor = votosAFavor + 1;
        } else {
          votosNegativo = votosNegativo + 1;
        }
      }
    }

    if (votar === true) {
      let userVote =
        votes &&
        votes.find(
          e =>
            e.userId === userId &&
            e.chars.includes(character1) &&
            e.chars.includes(character2)
        );

      const dislikeButton =
        userVote && userVote.winner === character2 ? "red" : "blue";
      const likeButton =
        userVote && userVote.winner === character1 ? "green" : "blue";

      const isDisabled = isSignedIn ? "" : "disabled";

      return (
        <div className="row">
          <div className="col s6">
            <a
              onClick={() => this.voto(character1, character2, 1)}
              href="#!"
              className={`waves-effect waves-teal btn-flat ${likeButton} ${isDisabled}`}
            >
              <i className="material-icons">thumb_up</i>
            </a>
          </div>
          <div className="col s6">
            <a
              onClick={() => this.voto(character1, character2, 0)}
              href="#!"
              className={`waves-effect waves-teal btn-flat ${dislikeButton} ${isDisabled}`}
            >
              <i className="material-icons">thumb_down</i>
            </a>
          </div>
          <p>Total de votos: {totalVotos}</p>
          <p>Diferencia de votos: {votosAFavor - votosNegativo}</p>

          {this.indicadores(votosAFavor, votosNegativo)}
        </div>
      );
    }
  }

  renderCard() {
    let { characters, character1, filter } = this.props;

    //Filtra el personaje que fue seleccionado,porque no existen los dittos
    characters = characters
      ? characters.filter(c => c.id !== character1)
      : null;
    //Si en el autocomplete se ingresa un string, se filtra el arreglo y renderiza el personaje seleccionado
    // characters = filter ? characters.filter(c => c.id === filter) : characters;
    //Render a las cartas
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
    this.sortProps();
    return (
      <div className="container">
        {/*AutoComplete*/}
        <div>
          <InputFilter />
        </div>
        {/* Carta del personaje */}
        <div className="row">{this.renderCard()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characterInfo.characterInfo,
    votes: state.characterInfo.votes,
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

const mapFunctionsToProps = {
  characterInfo,
  getAllVotes,
  newVote
};

export default connect(mapStateToProps, mapFunctionsToProps)(ListaPersonajes);
