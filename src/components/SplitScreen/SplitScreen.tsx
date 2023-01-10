import {
  SlantedDivBottom,
  SlantedDivTop,
  SplitScreenContainer,
  Img,
} from "./SplitScreen.styles";
import Picture from "@assets/images/IMG_5351.webp";

export const SplitScreen = (): JSX.Element => {
  return (
    <>
      <SlantedDivTop />
      <SplitScreenContainer>
        <Img alt="" src={Picture} />
        <p>test</p>
      </SplitScreenContainer>
      <SlantedDivBottom />
    </>
  );
};
