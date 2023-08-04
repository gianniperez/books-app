import "../stylesheets/NavBar.css";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";
import { GoHeartFill } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

function NavBar() {
  const [results, setResults] = useState([]);

  return (
    <nav>
      <ul>
        <NavLink icon="/icon.svg" to="/" className="logo">
          <div>BookWorm</div>
          <ReactSVG src="icon2.svg" className="icon-bw"/>
        </NavLink>
        <div className="search-bar-container">
          <SearchBar setResults={setResults}/>
          <SearchResultsList results={results} />
        </div>
        <NavLink to="/Favorites" className="fav">
          <GoHeartFill />
          <div>Favorites</div>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
