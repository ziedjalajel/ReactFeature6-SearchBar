import React from "react";
import { DeleteButtonStyled, DetailWrapper } from "../styles";

const CookieDetail = (props) => {
  const cookie = props.cookie;

  const handleDelete = () => {
    props.deleteCookie(cookie.id);
  };

  return (
    <DetailWrapper>
      <h1>{cookie.name}</h1>
      <img src={cookie.image} alt={cookie.name} />
      <p>{cookie.description}</p>
      <p>{cookie.price} KD</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </DetailWrapper>
  );
};

export default CookieDetail;
