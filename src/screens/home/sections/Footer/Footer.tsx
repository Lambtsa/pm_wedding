import { SocialIcons } from "@components/SocialIcons";
import { useTranslation } from "@hooks/useTranslation";
import { FooterContainer } from "./Footer.styles";

export const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <SocialIcons />
      {t({ id: "footer.copyright" }, { date: new Date().getFullYear() })}
    </FooterContainer>
  );
};
