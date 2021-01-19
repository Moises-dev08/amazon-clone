import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/search.css";

const Search = () => {
  const [query, setState] = useState();
  const [result, setState] = useState();
  const [loading, setState] = useState();
  const [message, setState] = useState();

  const handleOnInputChange = (e) => {
    const query = e.target.value;
    setState({ query, loading: true, message: "" });
  };

  return (
    <div className="container">
      {/*Search Input*/}
      <label className="search-label" htmlFor="search-input">
        <input
          type="text"
          value=""
          id="search-input"
          placeholder="Search..."
          onChange={handleOnInputChange}
        />
        <SearchIcon />
      </label>
    </div>
  );
};

export const Search;
