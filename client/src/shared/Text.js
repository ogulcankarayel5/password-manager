import styled from "styled-components";


export const Text = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
  line-height:1.5;
  margin-top:${props=>props.marginTop ? props.marginTop : 0};
  text-align:${props=>props.textStart ? "start" : "center"};
`;
