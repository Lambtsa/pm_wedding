import {
  ActivitiesTitleContainer,
  ContactContainer,
  ContactInnerContainer,
  ContactOuterContainer,
  SmallSubtitle,
  SmallTitle,
  Subtitle,
  Title,
} from "./Contact.styles";
import { useTranslation } from "@hooks/useTranslation";

export const Contact = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <ContactContainer>
      <ContactOuterContainer>
        <ActivitiesTitleContainer>
          <Title>{t({ id: "contact.title" })}</Title>
          <Subtitle>{t({ id: "contact.subtitle" })}</Subtitle>
        </ActivitiesTitleContainer>
        <ContactInnerContainer id="contact">
          <ActivitiesTitleContainer>
            <SmallTitle>{t({ id: "contact.phone.michelle.title" })}</SmallTitle>
            <div>
              ☎️{" "}
              <SmallSubtitle href="tel:+33766697212">
                {t({ id: "contact.phone.michelle.subtitle" })}
              </SmallSubtitle>
            </div>
            <div>
              📬{" "}
              <SmallSubtitle href="mailto:sanchez.michelle91@gmail.com">
                {t({ id: "contact.email.michelle.subtitle" })}
              </SmallSubtitle>
            </div>
          </ActivitiesTitleContainer>
          <ActivitiesTitleContainer>
            <SmallTitle>{t({ id: "contact.phone.pierre.title" })}</SmallTitle>
            <div>
              ☎️{" "}
              <SmallSubtitle href="tel:+33766613207">
                {t({ id: "contact.phone.pierre.subtitle" })}
              </SmallSubtitle>
            </div>
            <div>
              📬{" "}
              <SmallSubtitle href="mailto:augepierre67@gmail.com">
                {t({ id: "contact.email.pierre.subtitle" })}
              </SmallSubtitle>
            </div>
          </ActivitiesTitleContainer>
        </ContactInnerContainer>
      </ContactOuterContainer>
    </ContactContainer>
  );
};
