import { CONTAINER, MEDIA } from "@constants/layout";
import styled from "styled-components";

export const CountdownTimerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(60px, 150px));
  grid-template-rows: minmax(60px, 150px);
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media ${MEDIA.MOBILE} {
    gap: 8px;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 8px;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.theme.colors.primary10};

  @supports not (aspect-ratio: 1/1) {
    height: 150px;

    @media ${MEDIA.TABLET} {
      height: 100px;
    }

    @media ${MEDIA.MOBILE} {
      height: 80px;
    }
  }
`;

export const TimerSubtitle = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-style: italic;

  @media screen and (max-width: ${CONTAINER.TABLET}px) {
    font-size: 12px;
    line-height: 12px;
  }

  @media screen and (max-width: ${CONTAINER.TABLET}px) {
    font-size: 10px;
    line-height: 10px;
  }
`;

export const TimerTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 36px;
  line-height: 36px;
  font-family: ${(props) => props.theme.fonts.parisienne};

  @media ${MEDIA.TABLET} {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const TimerMessage = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 24px;
  line-height: 24px;
  font-style: italic;
`;
