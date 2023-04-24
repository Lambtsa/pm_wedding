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
  ForwardLink,
  ImageWrapper,
} from "./SplitScreen.styles";
import Couple from "@assets/images/IMG_6022.jpg";
import Family from "@assets/images/IMG_5933.jpg";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { ReactComponent as Forward } from "@assets/forward.svg";
import { Button } from "@components/Button";
import { TypeOf, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputText } from "@components/InputText";
import { useTranslation } from "@hooks/useTranslation";
import { useLanguage } from "@context/LanguageContext";
import { useToast } from "@context/ToastContext";
import { config } from "config";
import { TranslationKey } from "@helpers/language";

enum ActivityType {
  Horse = "horse",
  Boules = "boules",
  Climbing = "climbing",
  Volleyball = "volleyball",
  Hiking = "hiking",
  Paragliding = "paragliding",
  Yoga = "yoga",
  Spa = "spa",
}

interface Activity {
  id: ActivityType;
  title: TranslationKey;
  icon: string;
}

export const SplitScreen = (): JSX.Element => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const { addToast } = useToast();
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
        id: ActivityType.Horse,
        icon: "🐎",
        title: "activities.horse",
      },
      {
        id: ActivityType.Boules,
        icon: "👴🏻",
        title: "activities.boules",
      },
      {
        id: ActivityType.Climbing,
        icon: "🧗🏻",
        title: "activities.climbing",
      },
      {
        id: ActivityType.Volleyball,
        icon: "🏐",
        title: "activities.volleyball",
      },
      {
        id: ActivityType.Hiking,
        icon: "🥾",
        title: "activities.hiking",
      },
      {
        id: ActivityType.Paragliding,
        icon: "🪂",
        title: "activities.paragliding",
      },
      {
        id: ActivityType.Yoga,
        icon: "🧘🏼‍♂️",
        title: "activities.yoga",
      },
      {
        id: ActivityType.Spa,
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

      if (!selectedActivities.length) {
        addToast({
          type: "warning",
          title: "activities.error.noActivities.title",
          message: "activities.error.noActivities.message",
        });
        return;
      }

      handleSubmit(
        async (formFields) => {
          setIsLoading(true);
          const response = await fetch(`${config.backendUrl}/api/email`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formFields.name,
              email: formFields.email,
              activities: selectedActivities,
            }),
          });

          if (!response.ok) {
            addToast({
              type: "danger",
              title: "activities.error.serverError.title",
              message: "activities.error.serverError.message",
            });
          } else {
            addToast({
              type: "success",
              title: "activities.error.success.title",
              message: "activities.error.success.message",
            });
            /* Reset the forms after valid response */
            reset(defaultValues, { keepDefaultValues: true });
            setSelectedActivities([]);
          }
          setIsLoading(false);
        },
        (err) => {
          console.log({ err });
          addToast({
            type: "danger",
            title: "activities.error.serverError.title",
            message: "activities.error.serverError.message",
          });
          setIsLoading(false);
        }
      )();
    },
    [
      addToast,
      defaultValues,
      handleSubmit,
      isLoading,
      reset,
      selectedActivities,
    ]
  );

  const handleOnChange = useCallback(
    (id: ActivityType) => {
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
      <SplitScreenContainerTop>
        <ImageWrapper>
          <Img alt="" src={Family} />
        </ImageWrapper>
        <ActivitiesContainer id="activities">
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
            <ForwardLink href={"#contactForm"}>
              <Forward />
            </ForwardLink>
          </ActivitiesBtnContainer>
        </ActivitiesContainer>
      </SplitScreenContainerTop>
      <SplitScreenContainerBottom id="contactForm">
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
              type="email"
              control={control}
              name="email"
              error={formErrors.email}
              placeholder={t({ id: "activities.form.email.placeholder" })}
            />
            <Button
              btnType="primary"
              text={t({ id: "activities.form.submit" })}
            />
          </ActivitiesFormContainer>
          <Dalahast />
        </ActivitiesContainer>
        <ImageWrapper>
          <Img alt="" src={Couple} />
        </ImageWrapper>
      </SplitScreenContainerBottom>
    </>
  );
};
