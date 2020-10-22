
import styled from "styled-components";
import img from '../../assets/images/bg1.png';
import {motion} from 'framer-motion'

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
  
`;

const ImgSide = styled.div`
  grid-column: 2/3;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export {CommonLayoutContainer,FormLayoutContainer,ImgSide}