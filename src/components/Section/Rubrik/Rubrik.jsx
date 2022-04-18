import styled from 'styled-components';
import colors from '../../../utils/style/colors';
const Title = styled.h3`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 24px;
`;
const Elements = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
