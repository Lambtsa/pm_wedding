import styled from "styled-components";
import { ReactComponent as Dala } from "@assets/dalahast45.svg";
import Link from "next/link";
import { MEDIA } from "@constants/layout";

export const HeaderContainer = styled.header`
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

export const HeaderLinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const BurgerMenuBtn = styled.button`
  display: none;

  @media ${MEDIA.TABLET} {
    display: block;
  }
`;

export const CloseBtn = styled.button<{
  isOpen: boolean;
}>`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 20;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  svg {
    path {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const HeaderLinksList = styled.ul<{
  isOpen: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media ${MEDIA.TABLET} {
    position: fixed;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    left: 0;
    top: 0;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.primary};
    z-index: 10;
    width: 100vw;
    height: 100vh;
    scroll-behavior: none;

    a {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const HeaderLinksListItem = styled.li`
  list-style: none;
`;

export const HeaderLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-style: italic;
  scroll-behavior: smooth;

  /* @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover */
  @media (hover: hover) {
    /* when hover is supported */
    :hover {
      text-decoration: underline;
    }
  }
`;

export const Dalahast = styled(Dala)`
  path {
    stroke: ${(props) => props.theme.colors.primary};
  }
`;
