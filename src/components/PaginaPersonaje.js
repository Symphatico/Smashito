import React from "react";
import { connect } from "react-redux";
import { characterInfo } from "../actions/characterAction";

class PaginaPersonaje extends React.Component {
  async componentDidMount() {
    await this.props.characterInfo();
  }
  render() {
    return (
      <div className="container">
        <img src="/" alt="PELASTE(Soy la imagen)" />
        <h3>*Nombre del Personaje</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { characters: state.characterInfo.characterInfo };
};

export default connect(mapStateToProps, { characterInfo })(PaginaPersonaje);
