import { CountdownTimer } from "@components/CountdownTimer";
import { useTranslation } from "@hooks/useTranslation";
import {
  CountdownContainer,
  Dalahast,
  InnerContainer,
  Subtitle,
  Title,
} from "./Countdown.styles";

export const Countdown = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <CountdownContainer>
        <InnerContainer id="when">
          <Title>{t({ id: "countdown.date" })}</Title>
          <Subtitle>{t({ id: "countdown.weddingAddress" })}</Subtitle>
          <CountdownTimer />
        </InnerContainer>
        <Dalahast />
      </CountdownContainer>
    </>
  );
};
