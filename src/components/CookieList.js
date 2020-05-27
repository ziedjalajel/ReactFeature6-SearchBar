import React, { useState } from "react";

// Components
import CookieItem from "./CookieItem";
import SearchBar from "./SearchBar";

// Data
import cookies from "../cookies";

// Styling
import { ListWrapper } from "../styles";

const CookieList = () => {
  const [_cookies, setCookies] = useState(cookies);
  const [query, setQuery] = useState("");

  const cookieList = _cookies
    .filter((cookie) => cookie.name.includes(query))
    .map((cookie) => <CookieItem cookie={cookie} key={cookie.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{cookieList}</ListWrapper>
    </div>
  );
};

export default CookieList;
