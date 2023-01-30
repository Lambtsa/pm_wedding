import { CONTAINER, MEDIA } from "@constants/layout";
import styled from "styled-components";
import { ReactComponent as Dala } from "@assets/dalahast.svg";

export const NewsContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  min-height: 100vh;
  /* min-height: calc(100vh + 300px); */
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
  padding: 150px 16px;
  padding-bottom: 300px;
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

export const NewsArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const ArticleContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary10};
`;

export const ArticleEmoji = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 48px;
`;

export const ArticleInnerContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ArticleTitle = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: left;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 8px;
`;

export const ArticleSubtitle = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: left;
  font-size: 16px;
  line-height: 16px;
`;

export const ArticleDate = styled.p`
  color: ${(props) => props.theme.colors.primary70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: left;
  font-size: 16px;
  line-height: 16px;
  font-style: italic;
`;
