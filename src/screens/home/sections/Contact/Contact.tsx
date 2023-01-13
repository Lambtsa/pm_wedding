import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivitiesTitleContainer,
  ContactContainer,
  ContactFormContainer,
  Subtitle,
  Title,
} from "./Contact.styles";
import { TypeOf, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputText } from "@components/InputText";
import { Button } from "@components/Button";
import { useTranslation } from "@hooks/useTranslation";
import { useLanguage } from "@context/LanguageContext";

export const Contact = (): JSX.Element => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  /* ################################################## */
  /* State */
  /* ################################################## */
  const [isLoading, setIsLoading] = useState(false);

  /* ################################################## */
  /* Forms */
  /* ################################################## */
  const validationSchema = z.object({
    name: z
      .string({
        required_error: t({ id: "contact.form.firstNameError" }),
      })
      .min(1, { message: t({ id: "contact.form.minError" }) })
      .trim(),
    email: z
      .string({
        required_error: t({ id: "contact.form.emailError" }),
      })
      .min(1, { message: t({ id: "contact.form.minError" }) })
      .trim(),
    message: z
      .string({
        required_error: t({ id: "contact.form.messageError" }),
      })
      .min(1, { message: t({ id: "contact.form.minError" }) }),
  });

  type FormFields = TypeOf<typeof validationSchema>;

  const defaultValues: FormFields = useMemo(
    () => ({
      name: "",
      email: "",
      message: "",
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
  }, [clearErrors, defaultValues, locale, reset]);

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

  return (
    <ContactContainer>
      <ActivitiesTitleContainer id="contact">
        <Title>{t({ id: "contact.title" })}</Title>
        <Subtitle>{t({ id: "contact.subtitle" })}</Subtitle>
      </ActivitiesTitleContainer>
      <ContactFormContainer onSubmit={onSubmit}>
        <InputText
          type="text"
          control={control}
          name="name"
          error={formErrors.name}
          placeholder={t({ id: "contact.form.firstName" })}
        />
        <InputText
          type="text"
          control={control}
          name="email"
          error={formErrors.email}
          placeholder={t({ id: "contact.form.email" })}
        />
        <InputText
          type="text"
          control={control}
          name="message"
          error={formErrors.message}
          placeholder={t({ id: "contact.form.message" })}
        />
        <Button text={t({ id: "contact.form.submit" })} />
      </ContactFormContainer>
    </ContactContainer>
  );
};
