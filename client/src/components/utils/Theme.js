import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#FFFFFF",
    headerText:"#627387", 
    mainTitle:"#2A2542",
  },
 
 
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;