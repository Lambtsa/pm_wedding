import { useLanguage } from "@context/LanguageContext";
import { formatDate } from "@helpers/formatDate";
import { useTranslation } from "@hooks/useTranslation";
import { useEffect, useState } from "react";
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
  created_at: string;
}

export const News = (): JSX.Element => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  /* ######################################## */
  /* DATA */
  /* ######################################## */
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:80/api/news");
      const data = await response.json();
      console.log(data);
      setNewsItems(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const webSocket = new WebSocket("ws://localhost:80");

    webSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.event === "onConnect") {
        return console.log(data.payload);
      }

      if (data.event === "latestNews") {
        setNewsItems(data.payload as NewsItem[]);
      }
    };
  }, []);

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
                      <ArticleDate>
                        {formatDate(item.created_at, locale)}
                      </ArticleDate>
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
