import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/characterAction";

class GoogleOAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "508379505879-jfpbutc62oknnqosc1m69ddg1394ivqg.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <a class="waves-effect waves-light btn">
          <i class="material-icons left">cloud</i>Sign out
        </a>
      );
    } else {
      return (
        <a class="waves-effect waves-light btn">
          <i class="material-icons left">cloud</i>Sign in with Google
        </a>
      );
    }
  }
  render() {
    return <div className="fixed-action-btn">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleOAuth);
