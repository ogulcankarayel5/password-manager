import React from "react";
import styled,{css} from "styled-components";
import { MAIN_TITLE, MAIN_TEXT } from "../../utils/constants";
import { Title, Text,Button} from "../utils/MultipleComponent";

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

const MainLeftContent = () => {
  return (
      
    <LeftContainer>
      <MainTitle>{MAIN_TITLE}</MainTitle>
      <MainParagraph>{MAIN_TEXT}</MainParagraph>
      <MainButton to="/" padding={'2.5rem 6rem'} fontWeight={700}>Get Started</MainButton>
    </LeftContainer>
  );
};

export default MainLeftContent;
