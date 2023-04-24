import { useTranslation } from "@hooks/useTranslation";
import { v4 as uuid } from "uuid";
import {
  TimetableContainer,
  Dalahast,
  InnerContainer,
  Subtitle,
  Title,
  TimetableGrid,
  TimetableInfoWrapper,
  TimetableInfoTitle,
  TimetableInfoSubtitle,
  TimetableIconWrapper,
} from "./Timetable.styles";
import { ReactComponent as Music } from "@assets/music.svg";
import { ReactComponent as Church } from "@assets/church.svg";
import { ReactComponent as Food } from "@assets/food.svg";
import { ReactComponent as Rings } from "@assets/rings.svg";
import { ReactComponent as Wine } from "@assets/wine.svg";
import { ReactComponent as Photos } from "@assets/photos.svg";
import { useMemo } from "react";
import { TimesType } from "./Timetable.types";

export const Timetable = (): JSX.Element | null => {
  const { t } = useTranslation();
  /* ######################################## */
  /* DATA */
  /* ######################################## */

  const times: TimesType[] = useMemo(
    () => [
      {
        id: uuid(),
        event: "timetable.welcoming",
        time: "14h00",
        icon: <Church />,
      },
      {
        id: uuid(),
        event: "timetable.ceremony",
        time: "16h30",
        icon: <Rings />,
      },
      {
        id: uuid(),
        event: "timetable.wine",
        time: "17h30",
        icon: <Wine />,
      },
      {
        id: uuid(),
        event: "timetable.photos",
        time: "18h00",
        icon: <Photos />,
      },
      {
        id: uuid(),
        event: "timetable.dinner",
        time: "20h00",
        icon: <Food />,
      },
      {
        id: uuid(),
        event: "timetable.dance",
        time: "23h00",
        icon: <Music />,
      },
    ],
    []
  );

  return (
    <>
      <TimetableContainer>
        <InnerContainer>
          <Title>{t({ id: "timetable.title" })}</Title>
          <Subtitle>{t({ id: "timetable.subtitle" })}</Subtitle>
          <TimetableGrid>
            {times.map((time) => (
              <TimetableInfoWrapper key={time.id}>
                <TimetableIconWrapper>{time.icon}</TimetableIconWrapper>
                <TimetableInfoTitle>{time.time}</TimetableInfoTitle>
                <TimetableInfoSubtitle>
                  {t({ id: time.event })}
                </TimetableInfoSubtitle>
              </TimetableInfoWrapper>
            ))}
          </TimetableGrid>
        </InnerContainer>
        <Dalahast />
      </TimetableContainer>
    </>
  );
};
