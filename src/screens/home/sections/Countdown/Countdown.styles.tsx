import { CONTAINER, MEDIA } from "@constants/layout";
import styled from "styled-components";
import { ReactComponent as Dala } from "@assets/dalahast.svg";

export const CountdownContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  margin-top: -150px;
  color: ${(props) => props.theme.colors.white};
  clip-path: polygon(0% 150px, 100vw 0%, 100vw calc(100% - 150px), 0% 100%);

  @media ${MEDIA.TABLET} {
    clip-path: polygon(0% 120px, 100vw 0%, 100vw calc(100% - 120px), 0% 100%);
    margin-top: -120px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 300px 16px;
  max-width: ${CONTAINER.TABLET}px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 48px;
  line-height: 48px;
  font-family: ${(props) => props.theme.fonts.parisienne};
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.secondary};
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
