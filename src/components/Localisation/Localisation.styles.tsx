import styled from "styled-components";

export const LocalisationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  margin-top: -150px;
  height: calc(100vh + 300px);
  color: ${(props) => props.theme.colors.primary};
  /* color: ${(props) => props.theme.colors.white}; */
  clip-path: polygon(0 150px, 100% 0, 100% calc(100% - 150px), 0 100%);
`;
