import styled from 'styled-components';
import colors from '../../../utils/style/colors';
import { SectionSubtitle } from '../../Section/SectionTitle';

const ElementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  justify-content: space-around;
  gap: 10px;
`;

const ElementFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledRubrik = styled.div``;
function Rubrik({ title, format, children }) {
  let Elements;
  if (format === 'grid') {
    Elements = ElementsGrid;
  } else {
    Elements = ElementFlex;
  }
  return (
    <StyledRubrik>
      <SectionSubtitle>{title}</SectionSubtitle>
      <Elements>{children}</Elements>
    </StyledRubrik>
  );
}
export default Rubrik;
