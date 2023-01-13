import { Map } from "@components/Map";
import {
  LocalisationContainer,
  LocalisationInnerContainer,
  LocalisationWrapper,
  SmallSubtitle,
  SmallTitle,
  Subtitle,
  TextContainer,
  Title,
} from "./Localisation.styles";

export const Localisation = (): JSX.Element => {
  return (
    <LocalisationContainer>
      <LocalisationWrapper id="localisation">
        <div>
          <Title>Localisation</Title>
          <Subtitle>Les Genévriers, La Plaine</Subtitle>
        </div>
        <LocalisationInnerContainer>
          <Map />
          <TextContainer>
            <SmallTitle>Les Genévriers, La Plaine</SmallTitle>
            <SmallSubtitle>
              {
                "Lorem ipsum dolor sit amet consectetur. Est risus tellus vestibulum arcu rhoncus neque tortor."
              }
            </SmallSubtitle>
            <SmallTitle>Les Genévriers, La Plaine</SmallTitle>
            <SmallSubtitle>
              {
                "Lorem ipsum dolor sit amet consectetur. Est risus tellus vestibulum arcu rhoncus neque tortor."
              }
            </SmallSubtitle>
            <SmallTitle>Les Genévriers, La Plaine</SmallTitle>
            <SmallSubtitle>
              {
                "Lorem ipsum dolor sit amet consectetur. Est risus tellus vestibulum arcu rhoncus neque tortor."
              }
            </SmallSubtitle>
          </TextContainer>
        </LocalisationInnerContainer>
      </LocalisationWrapper>
    </LocalisationContainer>
  );
};
