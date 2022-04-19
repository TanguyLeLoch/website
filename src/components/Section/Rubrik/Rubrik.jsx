import styled from 'styled-components';
import colors from '../../../utils/style/colors';
const Title = styled.h3`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 24px;
`;
const Elements = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  justify-content: space-around;
`;
const StyledRubrik = styled.div``;
function Rubrik({ title, children }) {
  return (
    <StyledRubrik>
      <Title>{title}</Title>
      <Elements>{children}</Elements>
    </StyledRubrik>
  );
}
export default Rubrik;
