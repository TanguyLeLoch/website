import styled from 'styled-components';
import colors from '../../../utils/style/colors';
import Text from '../../../utils/Text';
const StyledItem = styled.div`
  width: 50%;
  padding-bottom: 10px;
`;
const Title = styled.h4`
  margin-top: 10px;
  margin-bottom: 5px;
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
