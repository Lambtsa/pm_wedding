import { CONTAINER, MEDIA } from "@constants/layout";
import styled from "styled-components";

export const LocalisationContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  margin-top: -150px;
  height: calc(100vh + 300px);
  color: ${(props) => props.theme.colors.primary};
  clip-path: polygon(0 150px, 100% 0, 100% calc(100% - 150px), 0 100%);
`;

export const LocalisationInnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-content: center;
  gap: 16px;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.secondary};
  max-width: ${CONTAINER.PC}px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 0;
  gap: 8px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 48px;
  line-height: 48px;
  font-family: ${(props) => props.theme.fonts.parisienne};

  @media ${MEDIA.MOBILE} {
    font-size: 36px;
    line-height: 36px;
  }
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.primary70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-style: italic;
  margin-bottom: 16px;
`;

export const SmallTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.montserrat};
  text-align: left;
  font-size: 24px;
  line-height: 24px;
`;

export const SmallSubtitle = styled.p`
  color: ${(props) => props.theme.colors.primary70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: left;
  font-size: 16px;
  line-height: 16px;
  font-style: italic;
  margin-bottom: 16px;
`;