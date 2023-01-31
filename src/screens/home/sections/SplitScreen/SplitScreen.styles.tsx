import { CONTAINER, MEDIA } from "@constants/layout";
import Image from "next/image";
import styled from "styled-components";
import { ReactComponent as Dala } from "@assets/dalahast.svg";

export const SplitScreenContainerTop = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-content: center;
  min-height: 100vh;
  z-index: 100;
  overflow: hidden;
  margin-top: -150px;
  background-color: ${(props) => props.theme.colors.primary};
  clip-path: polygon(0% 150px, 100% 0%, 100% 100%, 0% 100%);

  img {
    margin-top: -150px;
  }

  > div {
    /* Because of the slant the content doesn't look centered even though it is. We therefore use half of the slant height to readjust */
    margin-top: 75px;
  }

  @media ${MEDIA.TABLET} {
    grid-template-columns: 1fr;

    img {
      display: none;
    }
  }
`;

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 150px 16px;
`;

export const ActivitiesTitleContainer = styled.div``;

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

export const ActivityText = styled.p`
  color: ${(props) => props.theme.colors.secondary70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 14px;
  line-height: 14px;
`;

export const ActivitiesBtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  justify-items: center;
  align-items: center;
  gap: 8px;
`;

export const ActivityBtn = styled.button<{
  selected: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.secondary70};
  border-radius: 10px;
  width: 120px;
  height: 120px;
  color: ${(props) => props.theme.colors.secondary};

  background-color: ${(props) =>
    props.selected ? props.theme.colors.secondary20 : "transparent"};

  p:first-child {
    font-size: 36px;
  }

  /* @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover */
  @media (hover: hover) {
    /* when hover is supported */
    :hover {
      background-color: ${(props) => props.theme.colors.secondary20};
      box-shadow: 0 0 10px 10px ${(props) => props.theme.colors.primaryDark};
    }
  }

  @media ${MEDIA.MOBILE} {
    width: 100px;
    height: 100px;
  }
`;

export const ActivitiesFormContainer = styled.form`
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

export const SplitScreenContainerBottom = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-content: center;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary};
  clip-path: polygon(0% 0%, 100% 0%, 100% calc(100vh - 150px), 0% 100%);

  img {
    margin-top: -150px;
  }

  > div {
    /* Because of the slant the content doesn't look centered even though it is. We therefore use half of the slant height to readjust */
    margin-bottom: 75px;
  }

  @media ${MEDIA.TABLET} {
    grid-template-columns: 1fr;
    background-color: ${(props) => props.theme.colors.primaryDark};
    clip-path: polygon(0% 0%, 100% 0%, 100% calc(100vh - 50px), 0% 100%);

    img {
      display: none;
    }
  }
`;

export const Img = styled(Image)`
  width: 100%;
  object-fit: cover;
  z-index: 10;
  height: calc(100% + 300px);
`;

export const Dalahast = styled(Dala)`
  position: absolute;
  bottom: 32px;
  left: 16px;
  path {
    stroke: ${(props) => props.theme.colors.secondary};
  }
`;
