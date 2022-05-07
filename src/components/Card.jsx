import styled from 'styled-components';
import colors from '../../src/utils/style/colors';
import React from 'react';
import { useRef } from 'react';

const StyledCard = styled.div`
  color: ${colors.tertiary};
`;

function Card({ children }) {
  const ref = useRef(0);
  return (
    <StyledCard ref={ref}>
      {React.Children.map(children, (child) => child)}
    </StyledCard>
  );
}

export default Card;
