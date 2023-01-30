import { CONTAINER, MEDIA } from "@constants/layout";
import styled from "styled-components";

export const CountdownTimerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: 150px;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media ${MEDIA.TABLET} {
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: 100px;
  }

  @media ${MEDIA.MOBILE} {
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: 80px;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.theme.colors.secondary20};

  @media ${MEDIA.TABLET} {
    width: 100px;
    height: 100px;
  }

  @media ${MEDIA.MOBILE} {
    width: 80px;
    height: 80px;
  }
`;

export const TimerSubtitle = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-style: italic;

  @media screen and (max-width: ${CONTAINER.TABLET}px) {
    font-size: 12px;
    line-height: 12px;
  }
`;

export const TimerTitle = styled.h3`
  color: ${(props) => props.theme.colors.secondary};
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
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 24px;
  line-height: 24px;
  font-style: italic;
`;
