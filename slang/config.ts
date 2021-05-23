import { SlangConfig } from "@tone-row/slang";

const palette = {
  black: ["#000000"],
  white: ["#ffffff"],
};

export const colors = {
  foreground: palette.black[0],
  background: palette.white[0],
};

export const darkmode: typeof colors = {
  foreground: palette.white[0],
  background: palette.black[0],
};

const config: Partial<SlangConfig> = {
  baseFontFamily: "nm",
  baseFontSizePx: 20,
  baseFontLineHeight: 1.33,
  typeScaleBaseMobile: 1.1,
  inverseTypeScaleLineHeight: 0.98,
  errorCorrectionTopPx: -2,
  errorCorrectionBottomPx: -2,
  errorCorrectionTopScale: 1.2,
  spacerPx: 5,
  palette,
  colors,
};

export default config;
