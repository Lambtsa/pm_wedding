import { LOCALES } from "@constants/locales";
import { useLanguage } from "@context/LanguageContext";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useCallback,
  useMemo,
} from "react";
import { StyledBtn } from "./LanguageToggleBtn.styles";
import { ReactComponent as EN } from "@assets/uk.svg";
import { ReactComponent as ES } from "@assets/es.svg";
import { ReactComponent as FR } from "@assets/fr.svg";

type LocaleType = keyof typeof LOCALES;

interface LanguageToggleBtnProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  locale: LocaleType;
}

export const LanguageToggleBtn = ({
  locale,
}: LanguageToggleBtnProps): JSX.Element => {
  const { locale: currentLocale, setLocale } = useLanguage();

  const Flag = useMemo(() => {
    switch (locale) {
      case "EN": {
        return EN;
      }
      case "ES": {
        return ES;
      }
      case "FR": {
        return FR;
      }
    }
  }, [locale]);

  const handleOnClick = useCallback(
    (id: LocaleType) => {
      console.log({ currentLocale, locale, id });
      if (currentLocale === locale) {
        return;
      }
      setLocale(id);
    },
    [currentLocale, locale, setLocale]
  );

  return (
    <StyledBtn onClick={() => handleOnClick(locale)}>
      <Flag />
    </StyledBtn>
  );
};
