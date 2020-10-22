
import styled from 'styled-components';


const HeaderContainer = styled.header`


grid-column:2/3;
grid-row:1/2;
display:flex;
align-items:center;
font-family:${props=>props.theme.fonts.india};
`



const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 700;

  & div {
    justify-self: start;
    flex: 1;
  }
  svg {
    height: 3rem;
    width: 3rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex: 1;

  justify-content: space-between;

  & li a {
    color: ${(props) => props.theme.colors.headerText};
  }


`;

export {HeaderContainer,Nav,NavList}
