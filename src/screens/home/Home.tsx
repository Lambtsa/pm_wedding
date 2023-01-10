import {
  EighthDiv,
  FifthDiv,
  ForthDiv,
  SeventhDiv,
  ThirdDiv,
} from "./Home.styles";
import { Jumbotron } from "@components/Jumbotron";
import { Header } from "@components/Header";
import { Countdown } from "@components/Countdown";
import { Main } from "@components/Main";
import { SplitScreen } from "@components/SplitScreen";

export const HomeScreen = (): JSX.Element => {
  return (
    <Main>
      <Header />
      <Jumbotron />
      <Countdown />
      <SplitScreen />
      <ThirdDiv />
      <ForthDiv>Hello World</ForthDiv>
      <FifthDiv />
      <SeventhDiv />
      <EighthDiv>Hello World</EighthDiv>
    </Main>
  );
};
