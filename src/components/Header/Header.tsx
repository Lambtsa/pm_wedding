import {
  HeaderContainer,
  HeaderLink,
  HeaderLinksContainer,
  LanguageContainer,
} from "./Header.styles";
import { ReactComponent as DalaHast } from "@assets/dalahast.svg";
import { ReactComponent as EN } from "@assets/uk.svg";
import { ReactComponent as ES } from "@assets/es.svg";
import { ReactComponent as FR } from "@assets/fr.svg";

export const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <DalaHast />
      <HeaderLinksContainer>
        <HeaderLink>Our story</HeaderLink>
        <HeaderLink>Activities</HeaderLink>
        <HeaderLink>Travel</HeaderLink>
        <HeaderLink>Contact us</HeaderLink>
        <LanguageContainer>
          <FR />
          <ES />
          <EN />
        </LanguageContainer>
      </HeaderLinksContainer>
    </HeaderContainer>
  );
};
