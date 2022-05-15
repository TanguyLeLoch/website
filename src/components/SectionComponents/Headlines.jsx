import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Headline from '../../utils/Headline';

const StyledHeadlines = styled.div``;

const Slash = styled.span`
  padding: 3px;
  color: ${colors.tertiary};
`;

function Headlines({ headlines }) {
  return (
    <StyledHeadlines>
      {headlines &&
        headlines.map((headline, idx) => {
          let res = (
            <Headline key={headline} className={headline}>
              {headline}
            </Headline>
          );
          if (idx !== 0) {
            res = (
              <React.Fragment key={'slash' + headline}>
                <Slash>/</Slash>
                {res}
              </React.Fragment>
            );
          }
          return res;
        })}
    </StyledHeadlines>
  );
}

export default Headlines;
