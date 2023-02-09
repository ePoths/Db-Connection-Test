import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import router from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
