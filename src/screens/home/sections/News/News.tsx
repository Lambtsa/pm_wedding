import { useTranslation } from "@hooks/useTranslation";
import { useMemo } from "react";
import {
  NewsContainer,
  Dalahast,
  InnerContainer,
  Subtitle,
  Title,
  NewsArticleContainer,
  ArticleContainer,
  ArticleEmoji,
  ArticleInnerContainer,
  ArticleDate,
  ArticleSubtitle,
  ArticleTitle,
} from "./News.styles";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  emoji: string;
  date: string;
}

export const News = (): JSX.Element => {
  const { t } = useTranslation();

  const newsItems: NewsItem[] = useMemo(
    () => [
      {
        id: "1",
        title: "The arsonist has oddly shaped feet",
        description:
          "Lorem ipsum dolor sit amet consectetur. Purus ac egestas morbi aliquam aliquam eleifend mauris.",
        emoji: "🗞",
        date: "12 février 2023",
      },
      {
        id: "1",
        title: "The arsonist has oddly shaped feet",
        description:
          "Lorem ipsum dolor sit amet consectetur. Mi arcu id interdum vitae vitae erat. Pretium ultricies ornare risus vulputate non sed. Aliquet lectus gravida metus risus. In fermentum adipiscing laoreet nunc vestibulum eget vehicula mattis pellentesque.",
        emoji: "📰",
        date: "12 février 2023",
      },
      {
        id: "1",
        title: "The arsonist has oddly shaped feet",
        description:
          "Lorem ipsum dolor sit amet consectetur. Purus ac egestas morbi aliquam aliquam eleifend mauris.",
        emoji: "🗞",
        date: "12 février 2023",
      },
    ],
    []
  );

  const hasItems = !!newsItems.length;

  return (
    <>
      <NewsContainer>
        <InnerContainer>
          <Title>{t({ id: "news.title" })}</Title>
          <Subtitle>{t({ id: "news.subtitle" })}</Subtitle>
          <NewsArticleContainer>
            {hasItems &&
              newsItems.map((item) => (
                <ArticleContainer key={item.id}>
                  <ArticleEmoji>{item.emoji}</ArticleEmoji>
                  <ArticleInnerContainer>
                    <div>
                      <ArticleTitle>{item.title}</ArticleTitle>
                      <ArticleDate>{item.date}</ArticleDate>
                    </div>
                    <ArticleSubtitle>{item.description}</ArticleSubtitle>
                  </ArticleInnerContainer>
                </ArticleContainer>
              ))}
          </NewsArticleContainer>
        </InnerContainer>
        <Dalahast />
      </NewsContainer>
    </>
  );
};
