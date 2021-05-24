import { SlangConfig } from "@tone-row/slang";

const palette = {
  black: ["#000000"],
  white: ["#ffffff"],
  blue: ["#3d1be2"],
};

export const colors = {
  foreground: palette.black[0],
  background: palette.white[0],
  accent: palette.blue[0],
};

export const darkmode: typeof colors = {
  foreground: palette.white[0],
  background: palette.black[0],
  accent: palette.blue[0],
};

const config: Partial<SlangConfig> = {
  baseFontFamily: "nm",
  baseFontSizePx: 20,
  baseFontLineHeight: 1.33,
  baseFontLineHeightMobile: 1.45,
  typeScaleBaseMobile: 1.15,
  inverseTypeScaleLineHeightMobile: 0.95,
  inverseTypeScaleLineHeight: 0.98,
  errorCorrectionTopPx: -2,
  errorCorrectionBottomPx: -2,
  errorCorrectionTopScale: 1.2,
  spacerPx: 5,
  palette,
  colors,
};

export default config;
