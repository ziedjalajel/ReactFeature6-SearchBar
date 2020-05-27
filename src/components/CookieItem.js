import React from "react";

// Styling
import { CookieWrapper, DeleteButton } from "../styles";

const CookieItem = props => {
  const cookie = props.cookie;

  return (
    <CookieWrapper>
      <img
        alt={cookie.name}
        src={cookie.image}
        onClick={() => props.selectCookie(cookie.id)}
      />
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
      <DeleteButton onClick={() => props.deleteCookie(cookie.id)}>
        Delete
      </DeleteButton>
    </CookieWrapper>
  );
};

export default CookieItem;
