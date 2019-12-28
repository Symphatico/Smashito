import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ListaPersonajes.css";
import { characterInfo } from "../actions/characterAction";

class ListaPersonajes extends React.Component {
  async componentDidMount() {
    await this.props.characterInfo();
  }

  sortProps() {
    console.log(this.props);
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

  renderVotos() {
    const { votar } = this.props;
    const { characters } = this.props;
    console.log(characters);
    if (votar === true) {
      return (
        <div className="row">
          <div className="col s6">
            <a className="waves-effect waves-teal btn-flat">
              <i className="material-icons">thumb_up</i>
            </a>
          </div>
          <div className="col s6">
            <a className="waves-effect waves-teal btn-flat">
              <i className="material-icons">thumb_down</i>
            </a>
          </div>
        </div>
      );
    }
  }
  renderCard() {
    const { characters } = this.props;

    return characters
      ? characters.map((info, index) => {
          return (
            <div id={info.id} key={index}>
              <div className="col s1 m2 ">
                <div className="card">
                  <div className="card-image">
                    <img src={info.url} alt="Pelaste" className="height" />
                    <Link
                      to={{
                        pathname: `/characters/${info.id}/rates`,
                        data: { id: info.id, img: info.url }
                      }}
                      className="btn-floating halfway-fab waves-effect waves-light red"
                    >
                      <i className="material-icons">arrow_forward</i>
                    </Link>
                  </div>
                  <div className="card-content">
                    <p>{info.id}</p>
                    {this.renderVotos()}
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
  return { characters: state.characterInfo.characterInfo };
};

export default connect(mapStateToProps, { characterInfo })(ListaPersonajes);
