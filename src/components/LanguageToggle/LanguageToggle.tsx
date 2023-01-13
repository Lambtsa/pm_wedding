import { LanguageContainer } from "./LanguageToggle.styles";
import { LanguageToggleBtn } from "./LanguageToggleBtn";

export const LanguageToggle = (): JSX.Element => {
  return (
    <LanguageContainer>
      <LanguageToggleBtn locale="FR" />
      <LanguageToggleBtn locale="ES" />
      <LanguageToggleBtn locale="EN" />
    </LanguageContainer>
  );
};
