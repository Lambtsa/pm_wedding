import { LOCALES } from "@constants/locales";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import EN from "@locales/en_UK.json";
import ES from "@locales/es_ES.json";
import FR from "@locales/fr_FR.json";
import { MessageFormatElement } from "react-intl";

interface UseLanguageReturnType {
  locale: keyof typeof LOCALES;
  setLocale: Dispatch<SetStateAction<keyof typeof LOCALES>>;
  translations: Record<string, string> | Record<string, MessageFormatElement[]>;
}

export const useLanguage = (): UseLanguageReturnType => {
  const [locale, setLocale] = useState<keyof typeof LOCALES>("FR");

  const translations = useMemo(() => {
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

  return {
    locale,
    setLocale,
    translations,
  };
};
