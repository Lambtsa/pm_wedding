import { CONTAINER, MEDIA } from "@constants/layout";
import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const ActivitiesTitleContainer = styled.div`
  max-width: ${CONTAINER.MOBILE}px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
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
  color: ${(props) => props.theme.colors.secondary70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  font-style: italic;
  margin-bottom: 16px;
`;

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  /* gap: 16px; */
  width: 100%;
  max-width: ${CONTAINER.MOBILE}px;

  button {
    margin-top: 16px;
  }
`;
