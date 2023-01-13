import styled from "styled-components";
import { ReactComponent as Dala } from "@assets/dalahast.svg";
import Link from "next/link";

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

export const HeaderLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-style: italic;
  scroll-behavior: smooth;

  :hover {
    text-decoration: underline;
  }
`;

export const Dalahast = styled(Dala)`
  path {
    stroke: ${(props) => props.theme.colors.primary};
  }
`;
