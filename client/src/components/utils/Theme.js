import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary:"#00C4EA",
    background: "#FFFFFF",
    headerText:"#627387", 
    mainTitle:"#2A2542",
    text:"#79899A",
    statusErrorBackground:"#151729"
    
  },
  fonts:{
    india:'India Flower',
    sourceSans:'Source Sans Pro',
  }
 
 
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

