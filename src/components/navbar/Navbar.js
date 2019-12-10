import React from "react";
import { Link } from "react-router-dom";
import Autocomplete from "./Autocomplete";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <Link to="/characters" class="brand-logo">
              Logo
            </Link>
            <form>
              <Autocomplete />
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
