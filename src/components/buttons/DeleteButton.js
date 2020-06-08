import React from "react";

// Styling
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteCookie(props.cookieId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
