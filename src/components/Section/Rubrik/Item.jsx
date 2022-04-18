import styled from 'styled-components';
const StyledItem = styled.div``;
const Title = styled.h4``;
function Item({ title, logo }) {
  return (
    <StyledItem>
      {logo}
      <Title>{title}</Title>
    </StyledItem>
  );
}
export default Item;
