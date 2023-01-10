import {
  SplitScreenContainerTop,
  SplitScreenContainerBottom,
  Img,
} from "./SplitScreen.styles";
import Couple from "@assets/images/IMG_6151.webp";
import Family from "@assets/images/IMG_5351.webp";

export const SplitScreen = (): JSX.Element => {
  return (
    <>
      <SplitScreenContainerTop>
        <Img alt="" src={Couple} />
        <p>test</p>
      </SplitScreenContainerTop>
      <SplitScreenContainerBottom>
        <p>test</p>
        <Img alt="" src={Family} />
      </SplitScreenContainerBottom>
    </>
  );
};
