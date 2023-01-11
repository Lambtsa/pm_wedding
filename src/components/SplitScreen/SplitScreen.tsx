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
  ActivitiesFormContainer,
} from "./SplitScreen.styles";
import Couple from "@assets/images/IMG_6151.webp";
import Family from "@assets/images/IMG_5351.webp";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { ReactComponent as Forward } from "@assets/forward.svg";
import { Button } from "@components/Button";
import { TypeOf, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputText } from "@components/InputText";

type ActivityType =
  | "horse"
  | "boules"
  | "climbing"
  | "volleyball"
  | "hiking"
  | "paragliding"
  | "yoga"
  | "spa";

interface Activity {
  id: ActivityType;
  title: string;
  icon: string;
}

export const SplitScreen = (): JSX.Element => {
  /* ################################################## */
  /* State */
  /* ################################################## */
  const [isLoading, setIsLoading] = useState(false);
  const [selectedActivities, setSelectedActivities] = useState<ActivityType[]>(
    []
  );

  /* ################################################## */
  /* Forms */
  /* ################################################## */
  const validationSchema = z.object({
    name: z.string().trim(),
    email: z.string().trim(),
  });

  type FormFields = TypeOf<typeof validationSchema>;

  const defaultValues: FormFields = useMemo(
    () => ({
      name: "",
      email: "",
    }),
    []
  );

  /**
   * Options chosen
   * https://react-hook-form.com/api/useform/
   */
  const { control, formState, handleSubmit, reset } = useForm({
    defaultValues,
    mode: "onSubmit",
    shouldFocusError: true,
    /* All errors from each field will be gathered */
    criteriaMode: "all",
    resolver: zodResolver(validationSchema),
  });

  const formErrors = useMemo(() => {
    return formState.errors;
  }, [formState.errors]);

  useEffect(() => {
    reset(defaultValues, { keepDefaultValues: true });
  }, [reset, defaultValues]);

  const activities: Activity[] = useMemo(
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

  useEffect(() => {
    console.log({ selectedActivities });
  }, [selectedActivities]);

  /* ################################################## */
  /* Actions */
  /* ################################################## */
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isLoading) {
        return;
      }

      setIsLoading(true);

      handleSubmit(async (formFields) => {
        console.log({ formFields });
        setIsLoading(false);
      })();
    },
    [handleSubmit, isLoading]
  );

  const handleOnChange = useCallback(
    (id: ActivityType) => {
      console.log({ id });
      if (selectedActivities.includes(id)) {
        const filteredActivities = selectedActivities.filter(
          (activity) => activity !== id
        );
        setSelectedActivities(filteredActivities);
      } else {
        setSelectedActivities([...selectedActivities, id]);
      }
    },
    [selectedActivities]
  );

  // const createActivityString = useMemo(
  //   () => {

  //     "Vous avez sélectionné le tournoi de pétanques et la parapente. Remplissez le formulaire en dessous pour valider votre choix."
  //   },
  //   []
  // )

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
                <ActivityBtn
                  selected={!!selectedActivities.includes(activity.id)}
                  onClick={() => handleOnChange(activity.id)}
                  key={activity.id}
                >
                  <p>{activity.icon}</p>
                  <p>{activity.title}</p>
                </ActivityBtn>
              ))}
            <Forward />
          </ActivitiesBtnContainer>
        </ActivitiesContainer>
      </SplitScreenContainerTop>
      <SplitScreenContainerBottom>
        <ActivitiesContainer>
          <ActivitiesTitleContainer>
            <Title>Activités</Title>
            <Subtitle>
              {
                "Vous avez sélectionné le tournoi de pétanques et la parapente. N'oubliez pas de valider votre choix."
              }
            </Subtitle>
          </ActivitiesTitleContainer>
          <ActivitiesFormContainer onSubmit={onSubmit}>
            <InputText
              type="text"
              control={control}
              name="name"
              error={formErrors.name}
              placeholder="Prénom"
            />
            <InputText
              type="text"
              control={control}
              name="email"
              error={formErrors.email}
              placeholder="Email"
            />
            <Button />
          </ActivitiesFormContainer>
        </ActivitiesContainer>
        <Img alt="" src={Family} />
      </SplitScreenContainerBottom>
    </>
  );
};
