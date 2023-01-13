import { LanguageToggle } from "@components/LanguageToggle";
import { routes } from "@helpers/routes";
import { useTranslation } from "@hooks/useTranslation";
import Link from "next/link";
import {
  Dalahast,
  HeaderContainer,
  HeaderLink,
  HeaderLinksContainer,
} from "./Header.styles";

export const Header = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <HeaderContainer>
      <Link href={routes.index()}>
        <Dalahast />
      </Link>
      <HeaderLinksContainer>
        <HeaderLink scroll={false} href="#">
          {t({ id: "header.ourStory" })}
        </HeaderLink>
        <HeaderLink scroll={false} href="#activites">
          {t({ id: "header.activities" })}
        </HeaderLink>
        <HeaderLink scroll={false} href="#localisation">
          {t({ id: "header.location" })}
        </HeaderLink>
        <HeaderLink scroll={false} href="#contact">
          {t({ id: "header.contact" })}
        </HeaderLink>
        <LanguageToggle />
      </HeaderLinksContainer>
    </HeaderContainer>
  );
};
