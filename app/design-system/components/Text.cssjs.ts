import { styled } from "../stitches";

export const Text = styled("p", {
  lineHeight: "150%",
  fontSize: "16px",
  "@bp1": {
    fontSize: "18px",
  },
  "@bp2": {
    fontSize: "24px",
  },
  variants: {
    font: {
      titleLarge: {
        fontSize: "35px",
        "@bp1": {
          fontSize: "46px",
        },
        "@bp2": {
          fontSize: "70px",
        },
      },
      titleMedium: {
        fontSize: "25px",
        "@bp1": {
          fontSize: "32px",
        },
        "@bp2": {
          fontSize: "50px",
        },
      },
      titleSmall: {
        fontSize: "20px",
        "@bp1": {
          fontSize: "22px",
        },
        "@bp2": {
          fontSize: "30px",
        },
      },
    },
  },
});
