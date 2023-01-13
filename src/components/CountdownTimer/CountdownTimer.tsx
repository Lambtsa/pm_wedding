import { useTranslation } from "@hooks/useTranslation";
import { useEffect, useMemo, useState } from "react";
import {
  CountdownTimerContainer,
  TimerContainer,
  TimerMessage,
  TimerSubtitle,
  TimerTitle,
} from "./CountdownTimer.styles";

export const CountdownTimer = (): JSX.Element => {
  const { t } = useTranslation();
  const [days, setDays] = useState<number | undefined>(undefined);
  const [hours, setHours] = useState<number | undefined>(undefined);
  const [minutes, setMinutes] = useState<number | undefined>(undefined);
  const [seconds, setSeconds] = useState<number | undefined>(undefined);

  const weddingDate = useMemo(() => Date.parse("July 14, 2023 12:00:00"), []);

  useEffect(() => {
    const updateEveryMinute = setInterval(() => {
      const currentTime = Date.now().valueOf();
      const delta: number = weddingDate - currentTime;

      const rawDays = Math.floor(delta / (1000 * 60 * 60 * 24));
      const rawHours = Math.floor(delta / (1000 * 60 * 60));
      const rawMinutes = Math.floor(delta / (1000 * 60));
      const rawSeconds = Math.floor(delta / 1000);

      setDays(rawDays);
      setHours(rawHours - rawDays * 24);
      setMinutes(rawMinutes - rawHours * 60);
      setSeconds(rawSeconds - rawMinutes * 60);
    }, 1000);

    return () => {
      clearInterval(updateEveryMinute);
    };
  }, [weddingDate]);

  if (!days && !hours && !minutes && !seconds) {
    return <TimerMessage>{t({ id: "timer.weddingOver" })}</TimerMessage>;
  }
  return (
    <CountdownTimerContainer>
      <TimerContainer>
        <TimerTitle>{days}</TimerTitle>
        <TimerSubtitle>{t({ id: "timer.days" })}</TimerSubtitle>
      </TimerContainer>
      <TimerContainer>
        <TimerTitle>{hours}</TimerTitle>
        <TimerSubtitle>{t({ id: "timer.hours" })}</TimerSubtitle>
      </TimerContainer>
      <TimerContainer>
        <TimerTitle>{minutes}</TimerTitle>
        <TimerSubtitle>{t({ id: "timer.minutes" })}</TimerSubtitle>
      </TimerContainer>
      <TimerContainer>
        <TimerTitle>{seconds}</TimerTitle>
        <TimerSubtitle>{t({ id: "timer.seconds" })}</TimerSubtitle>
      </TimerContainer>
    </CountdownTimerContainer>
  );
};
