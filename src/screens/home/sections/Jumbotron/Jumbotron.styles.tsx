import { CONTAINER, MEDIA } from "@constants/layout";
import styled from "styled-components";

export const JumbotronContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: calc(100vh + 150px);
  color: ${(props) => props.theme.colors.white};
  clip-path: polygon(0% 0%, 100vw 0%, 100vw calc(100% - 150px), 0% 100%);

  @media ${MEDIA.TABLET} {
    clip-path: polygon(0% 0%, 100vw 0%, 100vw calc(100% - 120px), 0% 100%);
  }
`;

export const JumbotronInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  max-width: ${CONTAINER.TABLET}px;
  margin-top: -75px;

  svg:last-child {
    rotate: 180deg;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 72px;
  line-height: 72px;
  font-family: ${(props) => props.theme.fonts.parisienne};

  @media ${MEDIA.MOBILE} {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-style: italic;
`;
