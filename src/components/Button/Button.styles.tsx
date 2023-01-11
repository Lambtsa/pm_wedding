import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 16px 32px;
  border-radius: 10px;
  width: 240px;
`;
