import Text from '../../utils/Text';
import Headline from '../../utils/Headline';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CompanyName = styled.h4`
  font-size: 24px;
  color: ${colors.primary};
  margin: 10px 0;
`;
const Localisation = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
function Moments({ date, company, localisation, description }) {
  return (
    <div>
      <Headline>{date}</Headline>
      <CompanyName>{company}</CompanyName>
      <Localisation>{localisation}</Localisation>
      <Text>{description}</Text>
    </div>
  );
}

export default Moments;
