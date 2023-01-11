import { CONTAINER, MEDIA } from "@constants/layout";
import styled from "styled-components";
import { ReactComponent as Dala } from "@assets/dalahast.svg";

export const CountdownContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.colors.white};
  /* TODO: figure out mobile */
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 150px), 0 100%);
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  max-width: ${CONTAINER.TABLET}px;
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
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-style: italic;
  margin-bottom: 16px;
`;

export const Dalahast = styled(Dala)`
  position: absolute;
  right: 16px;
  bottom: 166px;
  path {
    stroke: ${(props) => props.theme.colors.primary};
  }
`;

export const CountdownTimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.theme.colors.primary10};
`;

export const TimerSubtitle = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-style: italic;
`;

export const TimerTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 36px;
  line-height: 36px;
  font-family: ${(props) => props.theme.fonts.parisienne};

  @media ${MEDIA.MOBILE} {
    font-size: 24px;
    line-height: 24px;
  }
`;
