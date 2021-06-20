import { createCss } from "@stitches/react";
import { theme, darkTheme } from "../theme";

export const createStitches = () => {
  const css = createCss({
    theme,
    media: {
      bp1: "(min-width: 768px)",
      bp2: "(min-width: 1024px)",
    },
  });

  const dark = css.theme("dark", darkTheme);
  return {
    ...css,
    darkTheme: dark,
  };
};

export const { global, styled, toString } = createStitches();
