import {
  JumbotronContainer,
  JumbotronInnerContainer,
  Subtitle,
  Title,
} from "./Jumbotron.styles";
import { ReactComponent as DecorationIcon } from "@assets/deco.svg";
import { useTranslation } from "@hooks/useTranslation";

export const Jumbotron = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <JumbotronContainer>
      <JumbotronInnerContainer>
        <DecorationIcon />
        <div>
          <Title>{t({ id: "jumbotron.title" })}</Title>
          <Subtitle>{t({ id: "jumbotron.subtitle" })}</Subtitle>
        </div>
        <DecorationIcon />
      </JumbotronInnerContainer>
    </JumbotronContainer>
  );
};
