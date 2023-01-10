import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  margin-top: -150px;
  height: 100vh;
  color: ${(props) => props.theme.colors.white};
  clip-path: polygon(0% 150px, 100% 0, 100% 100%, 0 100%);
`;
