import { CONTAINER, MEDIA } from "@constants/layout";
import styled from "styled-components";
import { ReactComponent as Dala } from "@assets/dalahast.svg";

export const TimetableContainer = styled.section`
  position: relative;
  margin-top: -150px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  height: 100%;
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
  justify-content: center;
  gap: 16px;
  padding: 200px 16px;
  /* height: calc(100% + 300px); */
  min-height: 100%;
  max-width: ${CONTAINER.TABLET}px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 48px;
  line-height: 48px;
  font-family: ${(props) => props.theme.fonts.parisienne};
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.white};
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
    stroke: ${(props) => props.theme.colors.white};
  }

  @media ${MEDIA.TABLET} {
    bottom: 136px;
  }
`;

export const TimetableGrid = styled.div`
  display: grid;
  background: center no-repeat url("/images/pathway.svg");
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 8px;
  height: 900px;

  @media ${MEDIA.TABLET} {
    background: center no-repeat url("/images/pathway-mobile.svg");
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;

export const TimetableInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px;

  :nth-child(odd) {
    grid-column: 6 / span 1;
  }

  :nth-child(even) {
    grid-column: 1 / span 1;
  }

  :nth-child(1) {
    grid-row: 1 / span 1;
  }

  :nth-child(2) {
    grid-row: 2 / span 1;
  }

  :nth-child(3) {
    grid-row: 3 / span 1;
  }

  :nth-child(4) {
    grid-row: 4 / span 1;
  }

  :nth-child(5) {
    grid-row: 5 / span 1;
  }

  :nth-child(6) {
    grid-row: 6 / span 1;
  }

  @media ${MEDIA.TABLET} {
    :nth-child(odd) {
      grid-column: 1 / span 1;
    }

    :nth-child(even) {
      grid-column: 3 / span 1;
    }

    :nth-child(1) {
      grid-row: 1 / span 1;
    }

    :nth-child(2) {
      grid-row: 2 / span 1;
    }

    :nth-child(3) {
      grid-row: 3 / span 1;
    }

    :nth-child(4) {
      grid-row: 4 / span 1;
    }

    :nth-child(5) {
      grid-row: 5 / span 1;
    }

    :nth-child(6) {
      grid-row: 6 / span 1;
    }
  }
`;

export const TimetableIconWrapper = styled.div`
  margin-bottom: 8px;

  svg {
    path {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;

export const TimetableInfoTitle = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.parisienne};
  text-align: center;
  font-size: 32px;
  line-height: 36px;
`;
export const TimetableInfoSubtitle = styled.p`
  color: ${(props) => props.theme.colors.secondary70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 16px;
`;
