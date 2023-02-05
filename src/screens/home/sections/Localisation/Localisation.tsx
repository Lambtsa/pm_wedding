import { Map } from "@components/Map";
import { useTranslation } from "@hooks/useTranslation";
import {
  LocalisationContainer,
  LocalisationInnerContainer,
  LocalisationWrapper,
  SmallSubtitleLink,
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
      <LocalisationWrapper>
        <div id="localisation">
          <Title>{t({ id: "location.title" })}</Title>
          <Subtitle>{t({ id: "location.subtitle" })}</Subtitle>
        </div>
        <LocalisationInnerContainer>
          <Map />
          <TextContainer>
            <SmallTitle>{t({ id: "location.where.title" })}</SmallTitle>
            <SmallSubtitleLink
              href={"https://goo.gl/maps/2BT5AkcmRXR7dgx6A"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t({ id: "location.where.subtitle" })}
            </SmallSubtitleLink>
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
