// export global styles here
// This file will also automatically populate the theme's css
import { global } from "../design-system";

export const globalStyles = global({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Oxygen, sans-serif",
  },
  div: {
    alignItems: "stretch",
    border: "0 solid black",
    boxSizing: "border-box",
    display: "flex",
    flexBasis: "auto",
    flexDirection: "column",
    flexShrink: 0,
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: "relative",
  },
  "h1, h2, h3, h4, h5, h6, p": {
    color: "$onBackground",
    fontWeight: "normal",
  },
  "html, body": {
    width: "100%",
    height: "100%",
    backgroundColor: "$background",
  },
});
