import styled from 'styled-components';
import colors from '../utils/style/colors';
const Container = styled.div`
  height: 30px;
  background-color: ${colors.secondary};
`;

function Project({ title }) {
  return <Container>{title}</Container>;
}

export default Project;
