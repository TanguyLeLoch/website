import styled from 'styled-components';
import colors from '../../../utils/style/colors';
const Title = styled.h3`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 24px;
`;
function Rubrik({ title, children }) {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
}
export default Rubrik;
