import {
  HeaderContainer,
  HeaderLink,
  HeaderLinksContainer,
} from "./Header.styles";
import { ReactComponent as DalaHast } from "@assets/dalahast.svg";

export const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <DalaHast />
      <HeaderLinksContainer>
        <HeaderLink>Our story</HeaderLink>
        <HeaderLink>Activities</HeaderLink>
        <HeaderLink>Travel</HeaderLink>
        <HeaderLink>Contact us</HeaderLink>
      </HeaderLinksContainer>
    </HeaderContainer>
  );
};
