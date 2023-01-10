import type { DefaultTheme } from "styled-components";

/**
 * @see https://coolors.co/38393d-262626-dd9f93-fffeed-329a91
 */
const colors = {
  primary: "#284135",
  primary10: "rgba(40, 65, 53, 0.1)",
  primaryDark: "#21352B",
  secondary: "#FFFEEB",
  white: "#FFFEEB",
};

const fonts = {
  montserrat: "'Montserrat', sans-serif",
  parisienne: "'Parisienne', cursive",
};

const fontWeights = {
  bold: "700",
  regular: "400",
  light: "300",
};

const zIndexes = {
  toast: 1000,
};

export const theme: DefaultTheme = {
  colors,
  fonts,
  fontWeights,
  zIndexes,
};
