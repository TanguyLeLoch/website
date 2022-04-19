import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Headlines from './Headlines';
import Text from '../../utils/Text';

const Title = styled.h2`
  font-size: 3em;
  color: ${colors.primary};
`;
const Separator = styled.hr`
  width: 90%;
  border: 1px solid ${colors.tertiary};
  margin-top: 20px;
`;

const StyledSection = styled.div`
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.4);
  padding: 20px;
`;

function Section({ sectionName, headlines, introText, children }) {
  const childList = [children];
  return (
    <StyledSection>
      <Title>{sectionName}</Title>
      <Headlines headlines={headlines} />
      <Text>{introText}</Text>
      {childList.map((rubrik, idx) => {
        return (
          <React.Fragment key={idx}>
            <Separator />
            {rubrik}
          </React.Fragment>
        );
      })}
    </StyledSection>
  );
}

export default Section;
