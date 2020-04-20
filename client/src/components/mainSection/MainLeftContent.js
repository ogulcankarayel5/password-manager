import React from "react";
import styled,{css} from "styled-components";
import { stringConstants } from "../../constants";
import { Title, Text,Button} from "../utils";

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:flex-start;
  padding:2rem;
  flex: 1;
 
`;

const defaultWidth = css`
width:65%;
`

const MainTitle = styled(Title)`
   
  color: ${(props) => props.theme.colors.mainTitle};
  font-size: 6rem;
  ${defaultWidth};
`;

const MainParagraph = styled(Text)`

  margin-top:3rem;
  ${defaultWidth};
`;

const MainButton = styled(Button)`
   
    margin-top:3rem;

`

export const MainLeftContent = () => {
  return (
      
    <LeftContainer>
      <MainTitle>{stringConstants.MAIN_TITLE}</MainTitle>
      <MainParagraph>{stringConstants.MAIN_TEXT}</MainParagraph>
      <MainButton to="/" padding={'2.5rem 6rem'} fontWeight={700}>Get Started</MainButton>
    </LeftContainer>
  );
};


