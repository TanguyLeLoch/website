import styled from 'styled-components';
import { SectionSubtitle } from '../../SectionComponents/SectionTitle';
import { Link } from 'react-router-dom';
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
          make a sell order of the amount buyed which should pass just after the target transaction
        </li>
      </ul>
      <p>
        If you want to learn more about this bot (the code, the stack I used for, how it works...), I wrote a blogpost{' '}
        <Link to="projects/front-runner-trading-bot">here</Link>
      </p>
    </Container>
  );
}

export default FrontRunnerBot;
