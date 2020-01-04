import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllVotes } from "../actions/characterAction";

class votesDemo extends Component {
  async componentDidMount() {
    await this.props.getAllVotes();
  }
  render() {
    console.log(this.props.votes);
    return <h1>hola</h1>;
  }
}

const mapStateToProps = state => {
  return {
    votes: state.characterInfo.votes
  };
};

export default connect(mapStateToProps, { getAllVotes })(votesDemo);
