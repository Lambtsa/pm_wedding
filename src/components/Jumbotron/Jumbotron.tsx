import {
  JumbotronContainer,
  JumbotronInnerContainer,
  Subtitle,
  Title,
} from "./Jumbotron.styles";
import { ReactComponent as DecorationIcon } from "@assets/deco.svg";

export const Jumbotron = (): JSX.Element => {
  return (
    <JumbotronContainer>
      <JumbotronInnerContainer>
        <DecorationIcon />
        <div>
          <Title>Pierre & Michelle</Title>
          <Subtitle>
            Le bonheur est la seule chose qui se double si on le partage
          </Subtitle>
        </div>
        <DecorationIcon />
      </JumbotronInnerContainer>
    </JumbotronContainer>
  );
};
