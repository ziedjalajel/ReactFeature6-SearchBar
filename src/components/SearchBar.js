import React from "react";

// Styling
import { Search } from "../styles";

const SearchBar = props => {
  return (
    <Search
      placeholder="Search for a cookie name"
      onChange={event => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
