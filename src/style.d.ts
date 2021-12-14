import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: {
      defaultText: string;
      activeText: string;
      inactiveText: string;
    };
    bgColor: {
      mainBg: string;
      subBg: string;
    };
    accentColor: string;
  }
}
