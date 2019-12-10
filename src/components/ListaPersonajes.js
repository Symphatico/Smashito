import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { characterInfo } from "../actions/characterAction";

class ListaPersonajes extends React.Component {
  async componentDidMount() {
    await this.props.characterInfo();
  }

  renderCard() {
    const { characters } = this.props;
    return characters
      ? characters.map(info => {
          return (
            <div id={info.id}>
              <div class="col s1 m2">
                <div class="card">
                  <div class="card-image">
                    <img src={info.url} />
                    <Link
                      to="/characters/{characterId}/rates"
                      class="btn-floating halfway-fab waves-effect waves-light red"
                    >
                      <i class="material-icons">arrow_forward</i>
                    </Link>
                  </div>
                  <div class="card-content">
                    <p>{info.id}</p>
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
        <div class="row">{this.renderCard()}</div>

        {/* Boton para ir a agregar personaje */}
        <Link to="/addCharacter" class="waves-effect waves-light btn">
          Agregar Personaje
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { characters: state.characterInfo.characterInfo };
};
export default connect(mapStateToProps, { characterInfo })(ListaPersonajes);
