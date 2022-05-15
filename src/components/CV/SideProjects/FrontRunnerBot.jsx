import styled from 'styled-components';
import { SectionSubtitle } from '../../SectionComponents/SectionTitle';

import Icon from '../../../utils/Icon';
const Container = styled.div`
  /* height: 30px; */
`;
function FrontRunnerBot() {
  return (
    <Container>
      <SectionSubtitle>Front runner trading bot</SectionSubtitle>
      <p>The principle of this bot is to take profit about people who make order with a considerably big slippage. Basically the bot:</p>
      <ul>
        <li>
          <Icon icon="fa-arrow-right" />
          detect this kind of transaction in the pending transaction list
        </li>
        <li>
          <Icon icon="fa-arrow-right" />
          make a buy order which should pass just before the target transaction
        </li>
        <li>
          <Icon icon="fa-arrow-right" />
          make a sell order of the ammount buyed which should pass just after the target transaction
        </li>
      </ul>
      <p>
        The detail of how to make this is available <a href="https://google.com">here</a>
      </p>
    </Container>
  );
}

export default FrontRunnerBot;
