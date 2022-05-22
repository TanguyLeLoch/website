import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DimensionContext } from '../../utils/context';
import { useState } from 'react';
import Hamburger from '../utils/Hamburger';

const StyledNav = styled.nav`
  background-color: ${colors.navbar};
  width: 100%;
  position: relative;
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
`;

const StyledLinkPanel = styled(Link)`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 14 px;
  text-decoration: none;
  padding: 15px;
`;

const NavLeftPanel = styled.div`
  background: transparent;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${colors.navbar};
  top: 100%;
  left: 0;
  transition: transform 0.3s ease-out;
  ${(props) => !props.$burgerExtended && `transform: translateX(-100%);`};
  z-index: 10;
  border-right: 1px solid ${colors.secondary};
  border-bottom: 1px solid ${colors.secondary};
`;

const StyledLine = styled.hr`
  height: 2px;
  background-color: ${colors.secondary};
  border: 0;
`;
const Links = styled.div``;
const SpanLink = styled.span`
  position: relative;

  &:hover::after {
    transform: scaleX(1);
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    background: ${colors.secondary};
    transition: transform 0.3s ease-out;
  }
`;
function NavBar() {
  const windowDimension = useContext(DimensionContext);
  const [burgerExtended, setBurgerExtended] = useState(false);
  const toggleBurgerExtended = () => {
    setBurgerExtended(!burgerExtended);
  };
  return (
    <StyledNav>
      <Content>
        {windowDimension.isUnderBreakpoint && <Hamburger toggleBurgerExtended={toggleBurgerExtended} isExpanded={burgerExtended} />}
        <Brand to="/">
          <h1>Tanguy Le Loch</h1>
        </Brand>
        {!windowDimension.isUnderBreakpoint && (
          <Links>
            <StyledLink to="/">
              <SpanLink>Description</SpanLink>
            </StyledLink>
            <StyledLink to="projects">
              <SpanLink>Projects</SpanLink>
            </StyledLink>
          </Links>
        )}
      </Content>
      {windowDimension.isUnderBreakpoint && (
        <NavLeftPanel $burgerExtended={burgerExtended}>
          <StyledLinkPanel to="/" onClick={toggleBurgerExtended}>
            <SpanLink>Description</SpanLink>
          </StyledLinkPanel>
          <StyledLinkPanel to="projects" onClick={toggleBurgerExtended}>
            <SpanLink>Projects</SpanLink>
          </StyledLinkPanel>
        </NavLeftPanel>
      )}
      <StyledLine />
    </StyledNav>
  );
}
export default NavBar;
