import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  textColor: {
    defaultText: "#5F6368",
    activeText: "#2d3436",
    inactiveText: "#b2bec3",
  },
  bgColor: {
    mainBg: "#fff",
    subBg: "#F1F3F4",
  },
  accentColor: "#FEEFC3",
};

export const darkTheme: DefaultTheme = {
  textColor: {
    defaultText: "#5F6368",
    activeText: "#dfe6e9",
    inactiveText: "#b2bec3",
  },
  bgColor: {
    mainBg: "#202124",
    subBg: "#525355",
  },
  accentColor: "#FEEFC3",
};
