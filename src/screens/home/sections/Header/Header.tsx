import { LanguageToggle } from "@components/LanguageToggle";
import { routes } from "@helpers/routes";
import { useTranslation } from "@hooks/useTranslation";
import Link from "next/link";
import {
  BurgerMenuBtn,
  CloseBtn,
  Dalahast,
  HeaderContainer,
  HeaderLink,
  HeaderLinksContainer,
  HeaderLinksList,
  HeaderLinksListItem,
} from "./Header.styles";
import { ReactComponent as BurgerMenu } from "@assets/burger.svg";
import { ReactComponent as CloseMenu } from "@assets/close24.svg";
import { useCallback, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import { TranslationKey } from "@helpers/language";

interface LinksType {
  id: string;
  uri: string;
  text: TranslationKey;
}

export const Header = (): JSX.Element => {
  const { t } = useTranslation();

  /* ######################################## */
  /* State */
  /* ######################################## */
  const [isOpen, setIsOpen] = useState(false);

  const links: LinksType[] = useMemo(
    () => [
      {
        id: uuid(),
        uri: "#when",
        text: "header.when",
      },
      {
        id: uuid(),
        uri: "#activities",
        text: "header.activities",
      },
      {
        id: uuid(),
        uri: "#localisation",
        text: "header.location",
      },
      {
        id: uuid(),
        uri: "#contact",
        text: "header.contact",
      },
    ],
    []
  );

  /* ######################################## */
  /* Actions */
  /* ######################################## */
  const handleOnClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const hasLinks = !!links.length;

  return (
    <HeaderContainer>
      <Link href={routes.index()}>
        <Dalahast />
      </Link>
      <HeaderLinksContainer>
        <HeaderLinksList isOpen={isOpen}>
          {hasLinks &&
            links.map((link) => (
              <HeaderLinksListItem key={link.id}>
                <HeaderLink
                  onClick={handleOnClick}
                  scroll={false}
                  href={link.uri}
                >
                  {t({ id: link.text })}
                </HeaderLink>
              </HeaderLinksListItem>
            ))}
          <HeaderLinksListItem>
            <LanguageToggle setIsOpen={setIsOpen} />
          </HeaderLinksListItem>
        </HeaderLinksList>
      </HeaderLinksContainer>
      <BurgerMenuBtn>
        <BurgerMenu onClick={handleOnClick} />
      </BurgerMenuBtn>
      <CloseBtn onClick={handleOnClick} isOpen={isOpen}>
        <CloseMenu />
      </CloseBtn>
    </HeaderContainer>
  );
};
