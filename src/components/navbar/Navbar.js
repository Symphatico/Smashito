import React from "react";
import { Link } from "react-router-dom";
import Autocomplete from "./Autocomplete";

class Navbar extends React.Component {
  autocomplete() {
    let data = {
      Apple: null,
      Microsoft: null,
      Google: "https://placehold.it/250x250"
    };
    return data;
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="/characters" className="brand-logo">
              Logo
            </Link>
            <form>
              <Autocomplete data={this.autocomplete()} />
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
