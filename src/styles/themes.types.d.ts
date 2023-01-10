import "styled-components";

interface Colors {
  primary: string;
  primary10: string;
  primaryDark: string;
  secondary: string;
  white: string;
}

interface Fonts {
  montserrat: string;
  parisienne: string;
}

interface FontWeights {
  bold: string;
  regular: string;
  light: string;
}

interface ZIndexes {
  toast: number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
    fontWeights: FontWeights;
    zIndexes: ZIndexes;
  }
}
