import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DimensionContext } from '../../utils/context';
import { useState } from 'react';
import Icon from '../../utils/Icon';

const StyledNav = styled.nav`
  background-color: #10101b;
  border-bottom: 2px solid ${colors.secondary};
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
`;
const Brand = styled(Link)`
  text-decoration: none;
  align-self: center;
  justify-self: center;
`;
const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  padding: 5px;
  text-decoration: underline;
`;

const Hamburger = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
`;
const Links = styled.div``;
function NavBar() {
  const windowDimension = useContext(DimensionContext);
  const [burgerExtended, setBurgerExtended] = useState(false);
  const toggleBurgerExtended = () => {
    console.log('toggle');
    setBurgerExtended(!burgerExtended);
  };
  return (
    <StyledNav>
      <Content>
        {windowDimension.isUnderBreakpoint && (
          <Hamburger onClick={toggleBurgerExtended}>{burgerExtended ? <Icon icon="fa-xmark" /> : <Icon icon="fa-bars" />}</Hamburger>
        )}
        <Brand to="/">
          <h1>Tanguy Le Loch</h1>
        </Brand>
        {!windowDimension.isUnderBreakpoint && (
          <Links>
            <StyledLink to="/">Description</StyledLink>
            <StyledLink to="projects">Projects</StyledLink>
          </Links>
        )}
      </Content>
    </StyledNav>
  );
}
export default NavBar;
