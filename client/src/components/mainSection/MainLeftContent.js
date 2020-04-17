import React from 'react'
import {MAIN_TITLE} from '../../utils/constants';
import styled from 'styled-components';

const LeftContainer = styled.div`

    display:flex;
    flex-direction:column;
    flex:1;


`

const MainTitle = styled.h1`
color:${props=>props.theme.colors.mainTitle};
font-size:6rem;
width:65%;
`

const MainParagraph = styled.p`
font-size:2rem;
color:#79899A;
`
const MainLeftContent = () => {
    return (
        <LeftContainer>
            <MainTitle>{MAIN_TITLE}</MainTitle>
            <MainParagraph></MainParagraph>
        </LeftContainer>
    )
}

export default MainLeftContent
