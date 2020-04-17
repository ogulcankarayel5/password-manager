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
  font-size:10px;
}

body{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}

a{
  text-decoration:none;
}
li{
  list-style:none;
}

`;
