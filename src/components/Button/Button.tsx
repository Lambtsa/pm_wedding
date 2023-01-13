import React from "react";
import { ButtonStyled } from "./Button.styles";

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps): JSX.Element => {
  return <ButtonStyled>{text}</ButtonStyled>;
};
