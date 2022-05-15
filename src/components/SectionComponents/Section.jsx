import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Headlines from './Headlines';
import Text from '../../utils/Text';
import { SectionTitle } from './SectionTitle';

const Separator = styled.hr`
  width: 90%;
  border: 1px solid ${colors.tertiary};
  margin-top: 20px;
`;

const StyledSection = styled.div``;

function Section({ sectionName, headlines, introText, children }) {
  return (
    <StyledSection className="Section">
      <SectionTitle>{sectionName}</SectionTitle>
      <Headlines headlines={headlines} />
      <Text>{introText}</Text>
      {React.Children.map(children, (rubrik, idx) => {
        return (
          <React.Fragment key={idx}>
            <Separator className="Separator" />
            {rubrik}
          </React.Fragment>
        );
      })}
    </StyledSection>
  );
}

export default Section;
