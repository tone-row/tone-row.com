import { SlangConfig } from "@tone-row/slang";

const palette = {
  black: ["#000000"],
  white: ["#ffffff", "#888", "#444444"],
  blue: ["#3d1be2", "#684de9"],
};

export const colors = {
  foreground: palette.black[0],
  background: palette.white[0],
  accent: palette.blue[0],
  secondary: palette.white[1],
};

export const darkmode: typeof colors = {
  foreground: palette.white[0],
  background: palette.black[0],
  accent: palette.blue[1],
  secondary: palette.white[2],
};

const config: Partial<SlangConfig> = {
  baseFontFamily: "nm",
  baseFontSizePx: 20,
  baseFontLineHeight: 1.35,
  baseFontLineHeightMobile: 1.45,
  typeScaleBase: 1.16,
  typeScaleBaseMobile: 1.15,
  inverseTypeScaleLineHeightMobile: 0.95,
  inverseTypeScaleLineHeight: 0.96,
  errorCorrectionTopPx: -2,
  errorCorrectionBottomPx: -2,
  errorCorrectionTopScale: 1.2,
  spacerPx: 6,
  palette,
  colors,
};

export default config;
