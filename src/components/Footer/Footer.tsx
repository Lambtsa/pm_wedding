import { FooterContainer } from "./Footer.styles";

export const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      {`© ${new Date().getFullYear()} P&M. Tous droits réservés`}
    </FooterContainer>
  );
};
