import styled from 'styled-components';
import colors from '../../../utils/style/colors';
import Text from '../../../utils/Text';
const StyledItem = styled.div`
  width: 100%;
  padding-bottom: 10px;
`;
const Title = styled.h4`
  margin: 8px 0;
`;
const StyledLogo = styled.div`
  color: ${colors.secondary};
  font-size: 1.5em;
`;

function Item({ title, logo, text }) {
  return (
    <StyledItem className="item">
      <StyledLogo>{logo}</StyledLogo>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </StyledItem>
  );
}
export default Item;
