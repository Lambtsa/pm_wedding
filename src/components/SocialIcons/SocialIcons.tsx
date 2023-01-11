import { SocialIconsContainer } from "./SocialIcons.styles";
import { ReactComponent as Facebook } from "@assets/facebook.svg";
import { ReactComponent as Instagram } from "@assets/instagram.svg";
import { ReactComponent as TikTok } from "@assets/tiktok.svg";
import { ReactComponent as Google } from "@assets/google.svg";

export const SocialIcons = (): JSX.Element => {
  return (
    <SocialIconsContainer>
      <Facebook />
      <Instagram />
      <TikTok />
      <Google />
    </SocialIconsContainer>
  );
};
