import styled from 'styled-components';
import colors from '../../utils/style/colors';

const SectionTitle = styled.h2`
  font-size: 3em;
  color: ${colors.primary};
`;
const SectionSubtitle = styled.h3`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 24px;
`;

export { SectionTitle, SectionSubtitle };
