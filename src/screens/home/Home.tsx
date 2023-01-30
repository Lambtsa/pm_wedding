import { Jumbotron } from "@screens/home/sections/Jumbotron";
import { Header } from "@screens/home/sections/Header";
import { Countdown } from "@screens/home/sections/Countdown";
import { Main } from "@components/Main";
import { SplitScreen } from "@screens/home/sections/SplitScreen";
import { Localisation } from "@screens/home/sections/Localisation";
import { Contact } from "@screens/home/sections/Contact";
import { Footer } from "@screens/home/sections/Footer";
import { useEffect } from "react";

export const HomeScreen = (): JSX.Element => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/ping");
      const data = await response.json();
      console.log({ data });
    };

    fetchData();
  }, []);
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
