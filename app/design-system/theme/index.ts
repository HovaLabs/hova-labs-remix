import { colorsDarkTheme, colorsLightTheme } from "./colors";

export const theme = {
  colors: colorsLightTheme,
};

export const darkTheme = {
  ...theme,
  colors: colorsDarkTheme,
};
