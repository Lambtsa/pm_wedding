import { Map } from "@components/Map";
import { useTranslation } from "@hooks/useTranslation";
import {
  LocalisationContainer,
  LocalisationInnerContainer,
  LocalisationWrapper,
  SmallSubtitle,
  SmallSubtitleList,
  SmallSubtitleWrapper,
  SmallTitle,
  Subtitle,
  TextContainer,
  Title,
} from "./Localisation.styles";

export const Localisation = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <LocalisationContainer>
      <LocalisationWrapper id="localisation">
        <div>
          <Title>{t({ id: "location.title" })}</Title>
          <Subtitle>{t({ id: "location.subtitle" })}</Subtitle>
        </div>
        <LocalisationInnerContainer>
          <Map />
          <TextContainer>
            <SmallTitle>{t({ id: "location.where.title" })}</SmallTitle>
            <SmallSubtitle>
              {t({ id: "location.where.subtitle" })}
            </SmallSubtitle>
            <SmallTitle>{t({ id: "location.airport.title" })}</SmallTitle>
            <SmallSubtitleWrapper>
              <SmallSubtitleList>
                {t({ id: "location.airport.first" })}
              </SmallSubtitleList>
              <SmallSubtitleList>
                {t({ id: "location.airport.second" })}
              </SmallSubtitleList>
              <SmallSubtitleList>
                {t({ id: "location.airport.third" })}
              </SmallSubtitleList>
            </SmallSubtitleWrapper>
            <SmallTitle>{t({ id: "location.station.title" })}</SmallTitle>
            <SmallSubtitleWrapper>
              <SmallSubtitleList>
                {t({ id: "location.station.first" })}
              </SmallSubtitleList>
              <SmallSubtitleList>
                {t({ id: "location.station.second" })}
              </SmallSubtitleList>
            </SmallSubtitleWrapper>
          </TextContainer>
        </LocalisationInnerContainer>
      </LocalisationWrapper>
    </LocalisationContainer>
  );
};
