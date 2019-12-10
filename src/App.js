import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import ListaPersonaje from "./components/ListaPersonajes";
import PaginaPersonaje from "./components/PaginaPersonaje";
import Navbar from "./components/navbar/Navbar";
import AgregarPersonaje from "./components/AgregarPersonaje";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Route
            path="/"
            exact
            component={() => <Redirect to="/characters" />}
          />
          <Route
            path="/characters/{characterId}/rates"
            exact
            component={PaginaPersonaje}
          />
          <Route path="/addCharacter" exact component={AgregarPersonaje} />
          <Route path="/characters" exact component={ListaPersonaje} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
