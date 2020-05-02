import styled,{css} from "styled-components";
import {Link} from 'react-router-dom';

 const Title = styled.h1`
  font-size: 6rem;
  color: ${(props) => props.theme.colors.mainTitle};
`;

const Text = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
  line-height:1.5;
  margin-top:${props=>props.marginTop ? props.marginTop : 0};
  text-align:${props=>props.textStart ? "start" : "center"};
`;

const Button = styled(Link)`
  font-size:${props=>props.fontSize ?? '2rem'};
  color:${props=>props.theme.colors.background};
  background-color:${props=>props.color? props.color : props.theme.colors.primary};
  padding:${props=>props.padding ?? '2rem'};
  border-radius: 25%/50%;
  font-weight:${props=>props.fontWeight ?? 500};
  cursor:pointer;
  

`;


 const ResponsiveImage = styled.img`

  height:auto;
  max-width:100%;
`



const defaultFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export {Title,Text,Button,ResponsiveImage,defaultFlex};

