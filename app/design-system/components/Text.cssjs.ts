import { styled } from "../stitches";

export const Text = styled("p", {
  color: "$onBackground",
  variants: {
    font: {
      titleLarge: {
        as: "h1",
        fontSize: "20px",
        "@bp1": {
          fontSize: "30px",
        },
        "@bp2": {
          fontSize: "40px",
        },
      },
      titleMedium: {
        fontSize: "30px",
        "@bp1": {
          fontSize: "20px",
        },
        "@bp2": {
          fontSize: "15px",
        },
      },
      titleSmall: {
        fontSize: "20px",
        "@bp1": {
          fontSize: "14px",
        },
        "@bp2": {
          fontSize: "8px",
        },
      },
    },
  },
});
