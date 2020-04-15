import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family:'India';
  src: url("../assets/fonts/IndieFlower-Regular.ttf");
  font-style: normal;
}
*{
  margin:0;
  padding:0;
  box-sizing:border-box;

}

html{
  font-size:30px;
}

body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

`;
