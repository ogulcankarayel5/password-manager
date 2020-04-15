import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#FFFFFF",
    
  },
 
 
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;