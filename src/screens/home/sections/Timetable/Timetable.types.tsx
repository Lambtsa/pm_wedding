import { TranslationKey } from "@helpers/language";
import { ReactNode } from "react";

export interface TimesType {
  id: string;
  event: TranslationKey;
  icon: ReactNode;
  time: string;
}
