import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor.activeText};
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
