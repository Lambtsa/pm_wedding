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
  Dalahast,
  ActivityText,
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
import { useTranslation } from "@hooks/useTranslation";
import { useLanguage } from "@context/LanguageContext";

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
  title: FormatjsIntl.Message["ids"];
  icon: string;
}

export const SplitScreen = (): JSX.Element => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
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
    name: z
      .string({
        required_error: t({ id: "activities.form.name.placeholderError" }),
      })
      .min(1, { message: t({ id: "contact.form.minError" }) })
      .trim(),
    email: z
      .string({
        required_error: t({ id: "activities.form.email.placeholderError" }),
      })
      .min(1, { message: t({ id: "contact.form.minError" }) })
      .trim(),
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
  const { control, formState, handleSubmit, reset, clearErrors } = useForm({
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

  useEffect(() => {
    clearErrors();
  }, [clearErrors, locale]);

  const activities: Activity[] = useMemo(
    () => [
      {
        id: "horse",
        icon: "🐎",
        title: "activities.horse",
      },
      {
        id: "boules",
        icon: "👴🏻",
        title: "activities.boules",
      },
      {
        id: "climbing",
        icon: "🧗🏻",
        title: "activities.climbing",
      },
      {
        id: "volleyball",
        icon: "🏐",
        title: "activities.volleyball",
      },
      {
        id: "hiking",
        icon: "🥾",
        title: "activities.hiking",
      },
      {
        id: "paragliding",
        icon: "🪂",
        title: "activities.paragliding",
      },
      {
        id: "yoga",
        icon: "🧘🏼‍♂️",
        title: "activities.yoga",
      },
      {
        id: "spa",
        icon: "🧖",
        title: "activities.spa",
      },
    ],
    []
  );

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

  const hasActivities = !!activities.length;
  return (
    <>
      <SplitScreenContainerTop id="activites">
        <Img alt="" src={Couple} />
        <ActivitiesContainer>
          <ActivitiesTitleContainer>
            <Title>{t({ id: "activities.selectTitle" })}</Title>
            <Subtitle>{t({ id: "activities.selectSubtitle" })}</Subtitle>
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
                  <ActivityText>{t({ id: activity.title })}</ActivityText>
                </ActivityBtn>
              ))}
            <Forward />
          </ActivitiesBtnContainer>
        </ActivitiesContainer>
      </SplitScreenContainerTop>
      <SplitScreenContainerBottom>
        <ActivitiesContainer>
          <ActivitiesTitleContainer>
            <Title>{t({ id: "activities.validateTitle" })}</Title>
            <Subtitle>{t({ id: "activities.validateSubtitle" })}</Subtitle>
          </ActivitiesTitleContainer>
          <ActivitiesFormContainer onSubmit={onSubmit}>
            <InputText
              type="text"
              control={control}
              name="name"
              error={formErrors.name}
              placeholder={t({ id: "activities.form.name.placeholder" })}
            />
            <InputText
              type="text"
              control={control}
              name="email"
              error={formErrors.email}
              placeholder={t({ id: "activities.form.email.placeholder" })}
            />
            <Button text={t({ id: "activities.form.submit" })} />
          </ActivitiesFormContainer>
          <Dalahast />
        </ActivitiesContainer>
        <Img alt="" src={Family} />
      </SplitScreenContainerBottom>
    </>
  );
};
