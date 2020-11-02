
import styled, { keyframes } from "styled-components";


const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

// animation to slide out the home page to the left
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;
const CommonLayoutContainer = styled.div`
  height: 100vh;
  display: grid;
  background-image:url('https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1592482650/bg1_xtpgnp.png');
  background-repeat:no-repeat;
  background-attachment:fixed;
  background-position:center;
  background-size:cover;
  grid-template-columns: 1fr 90% 1fr;
  grid-template-rows: 1fr 4fr 1fr;
`;



const FormLayoutContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  
  &.page-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
  
`;

const ImgSide = styled.div`
  grid-column: 2/3;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export { CommonLayoutContainer, FormLayoutContainer, ImgSide };

