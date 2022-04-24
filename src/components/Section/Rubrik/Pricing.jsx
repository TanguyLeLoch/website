import Rubrik from './Rubrik';
import styled from 'styled-components';
import colors from '../../../utils/style/colors';

const Price = styled.div`
  color: ${colors.secondary};
  font-weight: bold;
`;
const Amount = styled.span`
  font-size: 54px;
  font-weight: bold;
`;
const PerDay = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

const StyledPricing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledSpan = styled.span`
  font-weight: bold;
`;

function Pricing() {
  return (
    <Rubrik title="Pricing" format="grid">
      <StyledPricing>
        <Price>
          <Amount>350</Amount>
          <PerDay>€/day</PerDay>
        </Price>
        <StyledSpan>Consulting</StyledSpan>
        <StyledSpan>Development</StyledSpan>
        <StyledSpan>Spec redaction</StyledSpan>
        <StyledSpan>30 days support</StyledSpan>
        <StyledSpan>Full remote</StyledSpan>
      </StyledPricing>
      <StyledPricing>
        <Price>
          <Amount>400</Amount>
          <PerDay>€/day</PerDay>
        </Price>
        <StyledSpan>Consulting</StyledSpan>
        <StyledSpan>Development</StyledSpan>
        <StyledSpan>Spec redaction</StyledSpan>
        <StyledSpan>30 days support</StyledSpan>
        <StyledSpan>Working from office</StyledSpan>
      </StyledPricing>
    </Rubrik>
  );
}

export default Pricing;
