import { useLanguage } from "@context/LanguageContext";
import { formatDate } from "@helpers/formatDate";
import { useTranslation } from "@hooks/useTranslation";
import { config } from "config";
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
  language: string;
  emoji: string;
  created_at: string;
}

export const News = (): JSX.Element | null => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  /* ######################################## */
  /* DATA */
  /* ######################################## */
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${config.backendUrl}/api/news`);
      const data = (await response.json()) as NewsItem[];

      const newByLocale = data.filter(
        (newsItem) => newsItem.language === locale
      );
      setNewsItems(newByLocale);
    };

    fetchData();
  }, [locale]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const webSocket = new WebSocket(config.websocket);

    webSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.event === "onConnect") {
        return console.log(data.payload);
      }

      if (data.event === "latestNews") {
        const received = data.payload as NewsItem[];
        const newByLocale = received.filter(
          (newsItem) => newsItem.language === locale
        );
        setNewsItems(newByLocale);
      }
    };
  }, [locale]);

  if (!newsItems.length) {
    return null;
  }

  return (
    <>
      <NewsContainer>
        <InnerContainer>
          <Title>{t({ id: "news.title" })}</Title>
          <Subtitle>{t({ id: "news.subtitle" })}</Subtitle>
          <NewsArticleContainer>
            {newsItems.map((item) => (
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
