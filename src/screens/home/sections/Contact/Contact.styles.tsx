import { CONTAINER, MEDIA } from "@constants/layout";
import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  margin-top: -150px;
  color: ${(props) => props.theme.colors.white};
  clip-path: polygon(0% 150px, 100vw 0, 100vw 100%, 0 100%);

  @media ${MEDIA.TABLET} {
    clip-path: polygon(0% 120px, 100vw 0, 100vw 100%, 0 100%);
    margin-top: -120px;
  }
`;

export const ContactOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-top: 200px;
  padding-bottom: 100px;
`;
export const ContactInnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 16px;

  @media ${MEDIA.MOBILE} {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const ActivitiesTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
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

export const SmallTitle = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 32px;
  line-height: 32px;
  font-family: ${(props) => props.theme.fonts.montserrat};

  @media ${MEDIA.MOBILE} {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const SmallSubtitle = styled.a`
  color: ${(props) => props.theme.colors.secondary70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;

  /* @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover */
  @media (hover: hover) {
    /* when hover is supported */
    :hover {
      text-decoration: underline;
    }
  }
`;
