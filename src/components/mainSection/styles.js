
import styled, { css } from 'styled-components';
import { Button, Text, Title } from '../../shared';

//MainContent
const MainContainer = styled.div`

grid-column:2/3;
grid-row:2/3;
display:flex;
align-items:center;
justify-content:center;


`


//MainLeftContent
const LeftContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:flex-start;
padding:2rem;
flex: 1;


`;

const defaultWidth = css`
width:60%;
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


//MainRightContent
const RightContainer=styled.div`

flex:1;

`

export { RightContainer, MainButton, MainParagraph, MainContainer, LeftContainer, MainTitle };

