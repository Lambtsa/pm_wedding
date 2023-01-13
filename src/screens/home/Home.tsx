import { Jumbotron } from "@screens/home/sections/Jumbotron";
import { Header } from "@screens/home/sections/Header";
import { Countdown } from "@screens/home/sections/Countdown";
import { Main } from "@components/Main";
import { SplitScreen } from "@screens/home/sections/SplitScreen";
import { Localisation } from "@screens/home/sections/Localisation";
import { Contact } from "@screens/home/sections/Contact";
import { Footer } from "@screens/home/sections/Footer";

export const HomeScreen = (): JSX.Element => {
  return (
    <Main>
      {/* TODO: Move sections into subfolder of home */}
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
