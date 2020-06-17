import { createGlobalStyle } from "styled-components";
import IndieFlower from '../assets/fonts/IndieFlower-Regular.ttf';
import SourceSansPro from '../assets/fonts/SourceSansPro-Regular.ttf';
import OpenSans from '../assets/fonts/OpenSans-Regular.ttf';
export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family:'India Flower';
  src: url(${IndieFlower}) format('truetype');
  font-style: normal;
  font-weight:300;
  font-display:swap;
  
}

@font-face {
  font-family: 'Source Sans Pro';
  src: url(${SourceSansPro}) format('truetype');
  font-display: swap;
}
@font-face {
  font-family:'Open Sans';
  src: url(${OpenSans}) format('truetype');
  font-display: swap;
}
*{
  margin:0;
  padding:0;
  box-sizing:border-box;

}

html{
  font-size:10px;
}

body{
    font-family:'Source Sans Pro';
}

a{
  text-decoration:none;
}
li{
  list-style:none;
}

`;
