import styled from 'styled-components';
import colors from './style/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${colors.secondary};
  font-size: 20px;
  padding-right: 10px;
`;

function Icon({ icon }) {
  return <StyledIcon icon={icon}></StyledIcon>;
}
export default Icon;
