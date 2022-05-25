import styled from 'styled-components';
import { Card } from '../../../components/SectionComponents/Card';
const Title1 = styled.h2``;

const StyledCard = styled(Card)`
  max-width: 80%;
  margin: auto;
`;

function FrontRunnerTradingBot() {
  return (
    <StyledCard>
      <Title1>Front runner trading bot</Title1>
      <p>
        The front runner bots are a category of trading bot who get advantage of order with a big tolerance of filling. With simple word: I know someone is
        going to buy a large amount of X token and that will make the price go up. My goal is to buy just before this person when the price is still low, and to
        sell just after in order to make a small profit.
      </p>
      <h3>What is the development stack for this bot?</h3>
      <p>The stack is:</p>
      <ul>
        <li>NodeJS</li>
        <li>express</li>
        <li>MongoDB</li>
        <li>Web3.js for the connection to the blockchain node</li>
      </ul>
      <p>
        For some reasons, in crypto space, it's not possible to make limit orders on chain. The only order possible is the market order. This kind of order make
        the price of filling unpredictable. Therefore all AMM (automated market maker) implement a swap parameter called slippage.
      </p>
      <h3>How works slippage ?</h3>
      <p>
        For instance if I want to buy some GrimaceCoin, let's say 10. The current price is 10 BUSD per coin. It will cost me arround 100 BUSD. The price can
        move during the time I press the swap button and the time my transaction is done so I put a slippage of 10%. That means I agree that the price can go up
        by 10%, so if the price is still under 11 BUSD my transaction will pass. If the price at the exact time of my transaction is at 11.1 BUSD, my
        transaction will fail. Of course no need to say that if the price go down my transaction will pass in any case.
      </p>
      <br />
      <p>
        Of course a variation of 10% is huge and that will not happend on a decent size coin. But sometimes on some coin, some fees are preleved during the buy
        or the sell and force peole to increase slippage manually. Some investor forget to put the slippage back to a normal value like 0.5%. Or maybe they are
        tired to see their ethereum transactions failed even if they pay a high gas fee so they put a high slippage in doubt. I cannot blame them for that.
      </p>
      <h4> The goal of the bot is to take profit of these orders.</h4>
      <h3>How to detect them ? </h3>
      <p>
        Fortunately, the blockchain is public and the pending transaction are public as well. First we have to be connected to a node. You can run one by
        yourself but it needs a huge amount of resources and can be laborious. (put link of ressource needed) To begin, I recommend to use a free solution like
        speed node of moralis (put limk of moralis). The number of transaction is very limited but it's enough to start. But it is also so limited that you will
        have throttle yourself to not analyse all the pending transactions.
      </p>
      <p>
        In the pending transaction stream all the blockchain transactions will be present, most of them are not needed. We can filter all the transaction by
        their field <code>to</code> and target the router we aim. In my bot I used the Pancake swap router most of the time because the Binance smart chain have
        to lowest fees, a lot of users and also a lot of shitcoin. But, and this is a big but, there is also a big concurence between all front runner trading
        bot.
      </p>
      <p>
        Now we need to filter the most profitable transaction, so we need to compute by ourself the price of the token, this can be done by calling the reserve
        of the pair being traded. For example if the transaction want to buy grimaceCoin in exchange of BUSD, then we can compute the pair address and compute
        the ratio of grimaceCoin over BUSD in reserve, if the ratio is 10 times for grimaceCoin than BUSD, then the price is 10 BUSD per grimace coin. And
        secondly we need to know the the slippage of the target transaction.
      </p>
      <p>
        After compute these information (or some derrived information about them), We need to know what is the max amount I can buy in order to not make fail my
        target order. This is a 3rd degree equation who became not simple at all so I decided to get a approximative result by dichotomy. I can find the result
        at 10^-8 approximation in less than 0.04 seconds so it's sufficient.
      </p>
      <p>With this result I can know compute my theorical benefice, I just have to remove the fees I will pay to know if I'm profitable or not </p>
      <h3>What will be the fees and why fees are so important ? </h3>
      <p>
        The fee of transaction are a big subject because I have to multiply the target transaction in order to pass before it. The target transaction will be in
        the pool of transaction before mine because I cannot know in advance that this transaction can be front runned (I cannot see in the future,
        unfortunately), so I will have to pay more to be proceced earlier. The validators are incentived to process my transaction before because I pay more
        fee. That's how most blockchain work to regulate the stream of transaction. If there is a lot of people wanting to run a transaction, the network will
        be congested, so there will be people that will pay more to be proceced. So fees to process a new transaction will be high and people will wait the
        network to be not congested to process their transaction. With this mecanism people will spread theirs transaction in times and avoid congesting the
        network.
      </p>
      <h3>Is this bot is working ? </h3>
      <p>Yes, this bot is working and can front run some transaction.</p>
      <h3>Is this bot is profitable ? </h3>
      <p>
        This bot do not lose but do not win money either. There is to much concurrency between front runner trading bot, if someone pay more fees than me, He
        will be proceced before me and my transaction will fail. I will pay the fees im any case so it lower my other profit. There is also concurency between
        arbitrage bot. Some bot can arbitrage the price between my transaction and my target transation. I think I can prevent them by analysing all the pool
        and verify my transaction can not be arbitrageable but I dont implement it yet.
      </p>
    </StyledCard>
  );
}

export default FrontRunnerTradingBot;
