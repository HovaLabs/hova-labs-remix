import { colorsDarkTheme, colorsLightTheme } from "./colors";
import { space } from "./space";

export const theme = {
  colors: colorsLightTheme,
  space,
};

export const darkTheme = {
  ...theme,
  colors: colorsDarkTheme,
};
