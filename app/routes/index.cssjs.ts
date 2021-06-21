import { styled } from "../design-system";

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
  marginLeft: "$xl",
  marginRight: "$xl",
  "> div": {
    "&:not(:first-child)": {
      marginTop: "$xl",
    },
  },
});

export const HeroContainer = styled("div", {
  width: "100%",
  height: "400px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const AboutContainer = styled("div", {
  backgroundColor: "$surface1",
  padding: "$xl",
});

export const ServicesContainer = styled("div", {
  backgroundColor: "$surface1",
  padding: "$xl",
});

export const EventsAreaContainer = styled("div", {
  backgroundColor: "$surface1",
  padding: "$xl",
});

export const NewOnTheBlogContainer = styled("div", {
  backgroundColor: "$surface1",
  padding: "$xl",
});
