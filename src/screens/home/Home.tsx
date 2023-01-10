import { Jumbotron } from "@components/Jumbotron";
import { Header } from "@components/Header";
import { Countdown } from "@components/Countdown";
import { Main } from "@components/Main";
import { SplitScreen } from "@components/SplitScreen";
import { Localisation } from "@components/Localisation";
import { Contact } from "@components/Contact";
import { Footer } from "@components/Footer";

export const HomeScreen = (): JSX.Element => {
  return (
    <Main>
      <Header />
      <Jumbotron />
      <Countdown />
      <SplitScreen />
      <Localisation />
      <Contact />
      <Footer />
    </Main>
  );
};
