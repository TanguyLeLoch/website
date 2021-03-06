import styled from 'styled-components';
import colors from '../../utils/style/colors';
const StyledHamburger = styled.button`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  position: relative;
  background-color: transparent;
  outline: none;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${colors.secondary};
    position: absolute;
    pointer-events: none;
    transition: opacity 0.3s 0.15s ease-out;
  }

  span:nth-child(1),
  span:nth-child(3) {
    transition: transform 0.3s ease-out;
  }
  span:nth-child(1) {
    transform: translateY(7px);
  }
  span:nth-child(3) {
    transform: translateY(-7px);
  }

  &.open span:nth-child(1) {
    transform: translate(0) rotate(135deg);
  }
  &.open span:nth-child(2) {
    opacity: 0;
    transition: opacity 0s ease-out;
  }
  &.open span:nth-child(3) {
    transform: translate(0) rotate(-135deg);
  }
`;

function Hamburger({ isExpanded, toggleBurgerExtended }) {
  let open = isExpanded ? 'open' : '';
  return (
    <StyledHamburger onClick={toggleBurgerExtended} type="button" className={open}>
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburger>
  );
}
export default Hamburger;
