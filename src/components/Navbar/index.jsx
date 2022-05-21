import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WidthContext } from '../../utils/context';

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
`;
const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  padding: 5px;
  text-decoration: underline;
`;
const Links = styled.div``;

function NavBar() {
  const windowWidth = useContext(WidthContext);

  return (
    <StyledNav>
      <Content>
        <Brand to="/">
          <h1>Tanguy Le Loch</h1>
        </Brand>
        <h1>{windowWidth.width}</h1>
        <Links>
          <StyledLink to="/">Description</StyledLink>
          <StyledLink to="projects">Projects</StyledLink>
        </Links>
      </Content>
    </StyledNav>
  );
}
export default NavBar;
