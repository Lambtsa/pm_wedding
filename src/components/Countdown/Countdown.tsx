import {
  CountdownContainer,
  CountdownTimerContainer,
  Dalahast,
  InnerContainer,
  // SlantedDiv,
  Subtitle,
  TimerContainer,
  TimerSubtitle,
  TimerTitle,
  Title,
} from "./Countdown.styles";

export const Countdown = (): JSX.Element => {
  return (
    <>
      <CountdownContainer>
        <InnerContainer>
          <Title>14 Juillet 2023</Title>
          <Subtitle>Les genévriers, 67420 Plaine</Subtitle>
          <CountdownTimerContainer>
            <TimerContainer>
              <TimerTitle>13</TimerTitle>
              <TimerSubtitle>Jours</TimerSubtitle>
            </TimerContainer>
            <TimerContainer>
              <TimerTitle>23</TimerTitle>
              <TimerSubtitle>Heures</TimerSubtitle>
            </TimerContainer>
            <TimerContainer>
              <TimerTitle>45</TimerTitle>
              <TimerSubtitle>Minutes</TimerSubtitle>
            </TimerContainer>
          </CountdownTimerContainer>
        </InnerContainer>
        <Dalahast />
      </CountdownContainer>
      {/* <SlantedDiv>
        
      </SlantedDiv> */}
    </>
  );
};
