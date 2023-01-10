import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 16px;
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const HeaderLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const HeaderLink = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-style: italic;
`;
