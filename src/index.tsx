import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./pages/Theme/Themes";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
