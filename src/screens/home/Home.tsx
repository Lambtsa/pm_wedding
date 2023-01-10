import {
  EighthDiv,
  FifthDiv,
  FirstDiv,
  ForthDiv,
  SecondDiv,
  SeventhDiv,
  SixthDiv,
  ThirdDiv,
} from "./Home.styles";
import { Jumbotron } from "@components/Jumbotron";
import { Header } from "@components/Header";
import { Countdown } from "@components/Countdown";
import { Main } from "@components/Main";

export const HomeScreen = (): JSX.Element => {
  return (
    <Main>
      <Header />
      <Jumbotron />
      <Countdown />
      <SixthDiv />
      <FirstDiv>Hello World</FirstDiv>
      <SecondDiv />
      <ThirdDiv />
      <ForthDiv>Hello World</ForthDiv>
      <FifthDiv />
      <SeventhDiv />
      <EighthDiv>Hello World</EighthDiv>
    </Main>
  );
};
