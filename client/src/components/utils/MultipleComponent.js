import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Title = styled.h1`
  font-size: 6rem;
  color: ${(props) => props.theme.colors.mainTitle};
`;

export const Text = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
  line-height:1.5;
`;

export const Button = styled(Link)`
  font-size:${props=>props.fontSize ?? '2rem'};
  color:${props=>props.theme.colors.background};
  background-color:${props=>props.theme.colors.primary};
  padding:${props=>props.padding ?? '2rem'};
  border-radius: 25%/50%;
  font-weight:${props=>props.fontWeight ?? 500};
  

`;

