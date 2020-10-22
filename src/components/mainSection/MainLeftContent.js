import React from "react";

import { stringConstants } from "../../constants";
import {LeftContainer,MainTitle,MainParagraph,MainButton} from './styles'




export const MainLeftContent = () => {
  return (
      
    <LeftContainer>
      <MainTitle>{stringConstants.MAIN_TITLE}</MainTitle>
      <MainParagraph textStart>{stringConstants.MAIN_TEXT}</MainParagraph>
      <MainButton to="/login" padding={'2.5rem 6rem'} fontWeight={700}>Get Started</MainButton>
    </LeftContainer>
  );
};


