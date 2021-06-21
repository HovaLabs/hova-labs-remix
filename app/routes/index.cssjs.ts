import { Image, styled } from "../design-system";

const STICKY_HEIGHT = 64;

export const Container = styled("div", {
  height: "100%",
  overflow: "auto",
  paddingTop: `${STICKY_HEIGHT}px`,
});

export const TopNav = styled("div", {
  position: "fixed",
  top: 0,
  display: "flex",
  width: "100%",
  height: `${STICKY_HEIGHT}px`,
  justifyContent: "space-between",
  alignItems: "center",
  background: "$background",
  zIndex: 1000,
});

export const Body = styled("div", {
  justifyContent: "flex-start",
  marginLeft: "$l",
  marginRight: "$l",
  "> div": {
    "&:not(:first-child)": {
      marginTop: "$l",
    },
  },
  "@bp1": {
    marginLeft: "$xl",
    marginRight: "$xl",
    "> div": {
      "&:not(:first-child)": {
        marginTop: "$xl",
      },
    },
  },
});

/** HERO START */
export const HeroContainer = styled("div", {
  width: "100%",
  height: "400px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const HeroTitle = styled("svg", {
  fill: "$onBackground",
  width: "100%",
  height: "400px",
  padding: "$l",
  "@bp1": {
    padding: "$xl",
  },
});
/** HERO END */

/** ABOUT START */
export const AboutContainer = styled("div", {
  backgroundColor: "$surface1",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  justifyContent: "space-between",
  padding: "$l",
  "@bp1": {
    padding: "$xl",
  },
});
export const AboutTextContainer = styled("div", {
  flexGrow: 1,
  flexBasis: "50%",
  maxWidth: "600px",
  "> *": {
    "&:not(:first-child)": {
      marginTop: "$m",
    },
  },
  "@bp1": {
    "> *": {
      "&:not(:first-child)": {
        marginTop: "$l",
      },
    },
  },
});
export const AboutImageContainer = styled("div", {
  flexBasis: "50%",
  flexGrow: 1,
  minWidth: "240px",
  maxHeight: "500px",
  "::before": {
    content: "",
    width: "1px",
    marginLeft: "-1px",
    float: "left",
    height: 0,
    paddingTop: "100%",
  },
  "::after": {
    content: "",
    display: "table",
    clear: "both",
  },
  marginBottom: "-$l",
  "@bp1": {
    marginBottom: "-$xl",
  },
});
export const AboutImage = styled(Image, {
  minWidth: "240px",
  maxWidth: "100%",
  maxHeight: "500px",
  alignSelf: "center",
});
/** ABOUT END */

/** SERVICES START */
export const ServicesContainer = styled("div", {
  backgroundColor: "$surface1",
  padding: "$xl",
});
/** SERVICES END */

/** EVENTS START */
export const EventsAreaContainer = styled("div", {
  backgroundColor: "$surface1",
  padding: "$xl",
});
/** EVENTS END */

/** BLOG START */
export const NewOnTheBlogContainer = styled("div", {
  backgroundColor: "$surface1",
  padding: "$xl",
});
/** BLOG END */
