import styled from 'styled-components';
import { SectionSubtitle } from '../../SectionComponents/SectionTitle';
import Icon from '../../../utils/Icon';
const Container = styled.div`
  li {
    padding-left: 10px;
    svg {
      font-size: 14px;
    }
  }
`;
function GridTradingBot() {
  return (
    <Container>
      <SectionSubtitle>Grid trading bot</SectionSubtitle>
      <p>The principle of this bot is to take profit of the volatility of the price. Basically the bot:</p>
      <ul>
        <li>
          <Icon icon="fa-arrow-right" />
          Buy when the price go down
        </li>
        <li>
          <Icon icon="fa-arrow-right" />
          Sell when the price go Up
        </li>
      </ul>
      <p>
        It's a little bit more complicated than that, but this is the principle. I will probably write a blogpost about this in the future.
        The stack is Typescript, NestJS, MongoDB, and the bot is deployed on a VPS. It has a microservice architecture and is interfaced with MEXC and Binance.
        The code is available on my <a href="https://github.com/TanguyLeLoch/volatility-trading-bot">github</a>
      </p>
    </Container>
  );
}

export default GridTradingBot;
