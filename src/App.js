import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import history from "./history";
import Principal from "./components/Principal";
import PaginaPersonaje from "./components/PaginaPersonaje";
import Navbar from "./components/navbar/Navbar";
import AgregarPersonaje from "./components/AgregarPersonaje";
import votesDemo from "./components/votesDemo";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Navbar />
            <Route
              path="/"
              exact
              component={() => <Redirect to="/characters" />}
            />
            <Route
              path={`/characters/:characterId/rates`}
              exact
              component={PaginaPersonaje}
            />
            <Route path="/addCharacter" exact component={AgregarPersonaje} />
            <Route path="/characters" exact component={Principal} />
            <Route path="/votes" exact component={votesDemo} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
