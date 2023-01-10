import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.secondary70};
  background-color: ${(props) => props.theme.colors.primaryDark};
  padding: 16px;
  font-size: 12px;
`;
