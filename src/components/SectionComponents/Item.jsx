import styled from 'styled-components';
import Text from '../../utils/Text';
import Icon from '../../utils/Icon';
const StyledItem = styled.div`
  width: 100%;
  padding-bottom: 10px;
`;
const Title = styled.h4`
  margin: 8px 0;
`;

function Item({ title, icon, text }) {
  return (
    <StyledItem className="item">
      <Icon icon={icon} />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </StyledItem>
  );
}
export default Item;
