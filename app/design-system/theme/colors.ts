export type Colors = {
  onBackground: string;
  onSurface1: string;
  onSurface2: string;
  onPrimary: string;
  onSecondary: string;
  background: string;
  modalBackground: string;
  surface1: string;
  surface2: string;
  primary: string;
  secondary: string;
  highlight: string;
};

export const colorsLightTheme: Colors = {
  onBackground: "hsla(220, 7%, 8%, 1)",
  onSurface1: "hsla(220, 7%, 8%, 1)",
  onSurface2: "hsla(220, 7%, 8%, 1)",
  onPrimary: "hsla(0, 0%, 100%, 1)",
  onSecondary: "hsla(0, 0%, 95%, 1)",
  background: "hsla(0, 0%, 100%, 1)",
  modalBackground: "hsla(0, 0%, 100%, 0.9)",
  surface1: "hsla(0, 0%, 90%, 1)",
  surface2: "hsla(0, 0%, 80%, 1)",
  primary: "hsla(206, 31%, 45%,1)",
  secondary: "hsla(206, 31%, 25%,1)",
  highlight: "hsla(43, 74%, 49%,.4)",
};

export const colorsDarkTheme: Colors = {
  onBackground: "hsla(0, 0%, 100%, 1)",
  onSurface1: "hsla(0, 0%, 100%, 1)",
  onSurface2: "hsla(0, 0%, 100%, 1)",
  onPrimary: "hsla(0, 0%, 95%, 1)",
  onSecondary: "hsla(0, 0%, 0%, 1)",
  background: "hsl(0, 0%, 7%)",
  modalBackground: "hsla(0, 0%, 7%, 0.9)",
  surface1: "hsl(0, 0%, 12%)",
  surface2: "hsl(0, 0%, 18%)",
  primary: "hsla(206, 31%, 45%,1)",
  secondary: "hsla(206, 31%, 25%,1)",
  highlight: "hsla(282, 44%, 39%,.4)",
};
