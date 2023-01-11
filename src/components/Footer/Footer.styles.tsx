import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  color: ${(props) => props.theme.colors.secondary70};
  background-color: ${(props) => props.theme.colors.primaryDark};
  padding: 32px;
  font-size: 12px;
`;
