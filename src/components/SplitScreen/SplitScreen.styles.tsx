import { MEDIA } from "@constants/layout";
import Image from "next/image";
import styled from "styled-components";

export const SlantedDivTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 200px;
  margin-top: -140px;
  color: ${(props) => props.theme.colors.white};
  clip-path: polygon(0 70%, 100% 0, 100% 100%, 0 100%);
`;

export const SlantedDivBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 200px;
  color: ${(props) => props.theme.colors.white};
  clip-path: polygon(0 0, 100% 0, 100% 30%, 0 100%);
`;

export const SplitScreenContainerTop = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 100;
  background-color: red;
  overflow: hidden;
  margin-top: -150px;
  background-color: ${(props) => props.theme.colors.primary};
  clip-path: polygon(0% 150px, 100% 0%, 100% 100%, 0% 100%);
`;

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ActivitiesTitleContainer = styled.div``;

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

export const ActivitiesBtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  justify-items: center;
  align-items: center;
  gap: 8px;
`;

export const ActivityBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.secondary70};
  border-radius: 10px;
  width: 120px;
  height: 120px;
  color: ${(props) => props.theme.colors.secondary};

  p:first-child {
    font-size: 36px;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.secondary20};
  }
`;

export const SplitScreenContainerBottom = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: red;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary};
  clip-path: polygon(0% 0%, 100% 0%, 100% calc(100vh - 150px), 0% 100%);
`;

export const Img = styled(Image)`
  width: 100%;
  object-fit: cover;
  z-index: 10;
`;
