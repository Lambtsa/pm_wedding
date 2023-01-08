import type { DefaultTheme } from "styled-components";

/**
 * @see https://coolors.co/38393d-262626-dd9f93-fffeed-329a91
 */
const colors = {
  chelseaCucumber: "#75B068",
  eerieBlack: "#262626",
  eerieBlack20: "rgba(38, 38, 38, 0.2)",
  eerieBlack70: "rgba(38, 38, 38, 0.7)",
  ivory: "#FFFEED",
  ivory20: "rgba(255, 254, 237, 0.2)",
  ivory70: "rgba(255, 254, 237, 0.7)",
  newYorkPink: "#E08585",
  oldRose: "#b68278",
  onyx: "#38393D",
  pastelPink: "#DD9F93",
  pastelPink20: "rgba(221, 159, 147, 0.2)",
  tiffanyBlue: "#3CBBB1",
  tiffanyBlue20: "rgba(60, 187, 177, 0.2)",
  viridianGreen: "#329A91",
};

const fonts = {
  notoSerif: "'Noto Serif', serif",
};

const fontWeights = {
  bold: "700",
  regular: "400",
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
