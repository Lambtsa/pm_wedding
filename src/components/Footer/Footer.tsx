import { SocialIcons } from "@components/SocialIcons";
import { FooterContainer } from "./Footer.styles";

export const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <SocialIcons />
      {`© ${new Date().getFullYear()} P&M. Tous droits réservés`}
    </FooterContainer>
  );
};
