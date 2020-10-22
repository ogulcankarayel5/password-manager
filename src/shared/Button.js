import {Link} from 'react-router-dom'
import styled from "styled-components";

export const Button = styled(Link)`
  font-size:${props=>props.fontSize ?? '2rem'};
  color:${props=>props.theme.colors.background};
  background-color:${props=>props.color? props.color : props.theme.colors.primary};
  padding:${props=>props.padding ?? '2rem'};
  border-radius: 25%/50%;
  font-weight:${props=>props.fontWeight ?? 500};
  cursor:pointer;
  

`;

Button.displayName='Button'