import React from "react";

// Components
import CookieItem from "./CookieItem";

// Styling
import { ListWrapper } from "../styles";

const CookieList = props => {
  const cookieList = props.cookies.map(cookie => (
    <CookieItem
      cookie={cookie}
      key={cookie.id}
      deleteCookie={props.deleteCookie}
      selectCookie={props.selectCookie}
    />
  ));

  return <ListWrapper>{cookieList}</ListWrapper>;
};

export default CookieList;
