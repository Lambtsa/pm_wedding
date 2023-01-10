import {
  SplitScreenContainerTop,
  SplitScreenContainerBottom,
  Img,
  ActivitiesContainer,
  Title,
  Subtitle,
  ActivitiesTitleContainer,
  ActivitiesBtnContainer,
  ActivityBtn,
} from "./SplitScreen.styles";
import Couple from "@assets/images/IMG_6151.webp";
import Family from "@assets/images/IMG_5351.webp";
import { useMemo } from "react";
import { ReactComponent as Forward } from "@assets/forward.svg";

export const SplitScreen = (): JSX.Element => {
  const activities = useMemo(
    () => [
      {
        id: "horse",
        icon: "🐎",
        title: "Balade à cheval",
      },
      {
        id: "boules",
        icon: "👴🏻",
        title: "Tournoi de pétanque",
      },
      {
        id: "climbing",
        icon: "🧗🏻",
        title: "Escalade",
      },
      {
        id: "volleyball",
        icon: "🏐",
        title: "Volleyball",
      },
      {
        id: "hiking",
        icon: "🥾",
        title: "Randonnée",
      },
      {
        id: "paragliding",
        icon: "🪂",
        title: "Parapente",
      },
      {
        id: "yoga",
        icon: "🧘🏼‍♂️",
        title: "Yoga",
      },
      {
        id: "spa",
        icon: "🧖",
        title: "Spa",
      },
    ],
    []
  );

  const hasActivities = !!activities.length;
  return (
    <>
      <SplitScreenContainerTop>
        <Img alt="" src={Couple} />
        <ActivitiesContainer>
          <ActivitiesTitleContainer>
            <Title>Activités</Title>
            <Subtitle>Séléctionnez une ou plusieurs activités</Subtitle>
          </ActivitiesTitleContainer>
          <ActivitiesBtnContainer>
            {hasActivities &&
              activities.map((activity) => (
                <ActivityBtn key={activity.id}>
                  <p>{activity.icon}</p>
                  <p>{activity.title}</p>
                </ActivityBtn>
              ))}
            <Forward />
          </ActivitiesBtnContainer>
        </ActivitiesContainer>
      </SplitScreenContainerTop>
      <SplitScreenContainerBottom>
        <p>test</p>
        <Img alt="" src={Family} />
      </SplitScreenContainerBottom>
    </>
  );
};
