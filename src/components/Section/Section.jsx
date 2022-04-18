import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Headlines from './Headlines';

const Title = styled.h2`
  font-size: 3em;
  color: ${colors.primary};
`;
const Separator = styled.hr`
  width: 90%;
  border: 1px solid ${colors.tertiary};
  margin-top: 20px;
`;
const Text = styled.p``;

function Section({ sectionName, headlines, introText, children }) {
  return (
    <div>
      <Title>{sectionName}</Title>
      <Headlines headlines={headlines} />
      <Text>{introText}</Text>
      {children.map((rubrik, idx) => {
        return (
          <React.Fragment key={idx}>
            <Separator />
            {rubrik}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Section;
