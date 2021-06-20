import { styled } from "../design-system";

export const Container = styled("div", {
  height: "100%",
  overflow: "auto",
});

export const TopNav = styled("div", {
  position: "fixed",
  top: 0,
  display: "flex",
  width: "100%",
  height: "64px",
  justifyContent: "space-between",
  alignItems: "center",
  background: "$background",
  zIndex: 1000,
});

export const Body = styled("div", {});
