import styled from 'styled-components';
// import colors from '../utils/style/colors';
import { SectionSubtitle } from '../components/Section/SectionTitle';
// const { SectionTitle, SectionSubtitle } from '../components/Section/SectionTitle';
const Container = styled.div`
  height: 30px;
`;
// const SectionSubtitle = title.SectionSubtitle;
function FrontRunnerBot() {
  return (
    <Container>
      <SectionSubtitle>Front runner trading bot</SectionSubtitle>
    </Container>
  );
}

export default FrontRunnerBot;
