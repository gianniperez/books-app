import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import { useAppContext } from "./context/appContext";
import "../stylesheets/SearchBar.css";
import { NavLink } from "react-router-dom";

export const SearchBar = ({ setResults }) => {

  const [input, setInput] = useState("");
  const { addToResults } = useAppContext();

  const fetchData = (value) => {
    fetch("https://example-data.draftbit.com/books?_limit=50")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((book) => {
          return value && book && book.title.toLowerCase().includes(value);
        });
        setResults(results);
        addToResults(results);
      });
  };

  const handleChange = (value) => {
      setInput(value);
      fetchData(value.toLowerCase());
  };

  const clearInput = () => {
    setResults([]);
    setInput("");
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") (
        clearInput()
    )
  };

  return (
    <div className="search-container">
      <li>
        <NavLink to="/Results" >
          <input
            className="text-container"
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={handleSubmit}
           />
        </NavLink>
      </li>
      <li>
          {input.length === 0 ? (
            <NavLink to="/Results"><CgSearch className="icon" /></NavLink>
          ) : (
            <MdClose className="icon" onClick={clearInput} />
          )}
      </li>
    </div>
  );
};

SearchBar.propTypes = {
  setResults: PropTypes.func,
};
