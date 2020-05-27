import React from "react";

// Components
import CookieItem from "./CookieItem";
import SearchBar from "./SearchBar";

// Data
import cookies from "../cookies";

// Styling
import { ListWrapper } from "../styles";

const CookieList = (props) => {
  const cookieList = cookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));

  return (
    <div>
      <SearchBar searchCookies={props.searchCookies} />
      <ListWrapper>{cookieList}</ListWrapper>
    </div>
  );
};

export default CookieList;
