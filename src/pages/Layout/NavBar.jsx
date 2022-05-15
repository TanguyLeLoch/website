import styled from 'styled-components';
import colors from '../../utils/style/colors';

const StyledNav = styled.nav`
  background-color: #10101b;
  border-bottom: 2px solid ${colors.secondary};
  /* position: fixed; */
  width: 100%;
`;

function NavBar() {
  return (
    <StyledNav>
      <h1>Tanguy Le Loch</h1>
    </StyledNav>
  );
}
export default NavBar;
