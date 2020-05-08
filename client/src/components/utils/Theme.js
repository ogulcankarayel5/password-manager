import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary:"#00C4EA",
    background: "#FFFFFF",
    headerText:"#627387", 
    mainTitle:"#2A2542",
    text:"#79899A",
    statusErrorBackground:"#151729",
    errorButtonBackground:"#ff0562",
    formButtonColor:"#7041EE",
    formSocialPrimaryColor:"#4B85EB",
    formSocialSecondaryColor:"#4E6699",
    formInputBorderColor:"dodgerBlue"
    
    
  },
  fonts:{
    india:'India Flower',
    sourceSans:'Source Sans Pro',
  }
 
 
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

