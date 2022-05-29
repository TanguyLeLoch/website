import styled from 'styled-components';
import { Card } from '../../../components/SectionComponents/Card';
import SlippageWarning from '../../../assets/slippage-warning.png';
import ImageLegend from '../../../components/utils/ImageLegend';
import FrontRunExample from '../../../assets/front-run-example-legend.png';
import FullNodeRequirement from '../../../assets/full-node-requirements.png';

const Title1 = styled.h1`
  text-align: center;
  padding: 20px;
`;
const Title2 = styled.h2``;
const Title3 = styled.h3``;
const Text = styled.p`
  font-size: min(20px, calc(10px + 1vw));
  text-align: justify;
  padding: 10px 0;
`;
const Intro = styled(Text)`
  font-style: italic;
  font-size: 22px;
`;

const StyledCard = styled(Card)`
  max-width: min(1000px, 80%);
  margin: auto;
`;
const LinkToFullNodeRequirements = (
  <>
    full node requirements from binance{' '}
    <a href="https://docs.binance.org/smart-chain/developer/fullnode.html" target="_blank" rel="noreferrer">
      docs
    </a>
    ;
  </>
);
function FrontRunnerTradingBot() {
  return (
    <StyledCard>
      <Title1>Front runner trading bot</Title1>
      <Intro>
        Front runner bots are a category of trading bots that take advantage of orders with a high fill tolerance. In simple words: I know that someone is going
        to buy a large amount of X token and that this will drive the price up. My goal is to buy just before that person when the price is still low, and sell
        just after to make a small profit. <br />
        An example is worth 1000 words:
      </Intro>
      <ImageLegend src={FrontRunExample} alt="front run example"></ImageLegend>
      <Intro>
        The attacker bought 28,125.6 UST for 990.932 BUSD. Then the victim bought UST for 1000 BUSD. This increased the price of the UST slightly. Finally, the
        attacker sold his 28,125.6 UST for 993.722 BUSD. In conclusion, the attacker made a profit of 2.79 BUSD. If we deduct the 0.47 BUSD fee for the two
        transactions, the final profit is 2.32 BUSD in less than a second and almost without risk.
      </Intro>
      <Title2>What is the development stack for this bot?</Title2>
      <Text>The stack is:</Text>
      <ul>
        <li>NodeJS</li>
        <li>express</li>
        <li>MongoDB</li>
        <li>Web3.js for the connection to the blockchain node</li>
      </ul>
      <Title2>How does it work ?</Title2>
      <Text>
        For some reasons, in crypto space, it's not possible to make limit orders on chain. The only order possible is the market order. This kind of order make
        the price of filling is unpredictable. Therefore all AMM (automated market maker) implement a swap parameter called slippage.
      </Text>
      <Title2>How works slippage ?</Title2>
      <Text>
        For instance if I want to buy some GrimaceCoin, let's say 10. The current price is 10 BUSD per coin. It will cost me arround 100 BUSD. The price can
        move between the time I press the swap button and the time my transaction is processed so I put a slippage of 10%. That means I agree that the price can
        go up by 10%, so if the price is still under 11 BUSD my transaction will pass. If the price at the exact time of my transaction is at 11.1 BUSD, my
        transaction will fail. Of course no need to say that if the price go down my transaction will pass in any cases.
      </Text>
      <Text>
        A variation of 10% is huge and that will not happend on a coin with a decent market capitalisation. But sometimes on some coin, some fees are preleved
        during the buy or the sell. That forces peole to increase their slippage manually. Some investors forget to put the slippage back to normal after their
        transaction. Or maybe they are tired to see their ethereum transactions failed even if they paid a high gas fee so they put a high slippage in doubt. I
        cannot blame them for that even if it's clearly write on their AMM when they are changing slippage.
      </Text>
      <ImageLegend src={SlippageWarning} alt="slippage warning on pancake swap"></ImageLegend>
      <Title3> The goal of the bot is to take profit of these orders.</Title3>
      <Title2>How to detect them ? </Title2>
      <Text>
        Fortunately, the blockchain is public and the pending transaction are public as well. First we have to be connected to a node. It's possible to run it
        by myself but it needs a huge amount of resources and can be laborious. For instance here the requirements recomended to run a node:
      </Text>
      <ImageLegend src={FullNodeRequirement} alt="full node requirements for binance smart chain" legend={LinkToFullNodeRequirements}></ImageLegend>
      <Text>
        I wanted to use a free solution and this solution was{' '}
        <a href="https://moralis.io/speedy-nodes/" target="_blank" rel="noreferrer">
          speed node from moralis
        </a>
        . The number of transaction is very (very) limited but it's enough to start. But it's also so limited that I needed to throttle myself to not analyse
        all the pending transactions.
      </Text>
      <Text>
        In the pending transaction stream all the blockchain transactions will be present, most of them are not needed. We can filter all the transaction and
        target only transaction to the AMM router. I used the Pancake swap router most of the time because the Binance smart chain have to lowest fees, a lot of
        users and last but not least, a lot of small cap shitcoins which is important for this kind of bot. But, and this is a big but, there is also a big
        concurence between all front runner trading bot. I precise this point later.
      </Text>
      <Text>
        Now we need to filter the most profitable transactions, so we need to compute by ourself the price of the token, this can be done by calling the reserve
        of the pair being traded. For example if the transaction want to buy grimaceCoin in exchange of BUSD, then we can compute the pair address and compute
        the ratio of grimaceCoin over BUSD in reserve, if the ratio is 10 times more grimaceCoin than BUSD, then the price is 10 BUSD per grimace coin. And
        secondly we need to know the slippage of the target transaction.
      </Text>
      <Text>
        After compute theses informations (or some derrivated informations about them), We need to know what's the max amount I can buy in order to be at the
        limit of making fail my target order. This limit is the most profitable point possible. To resolve this 3rd degree equation who are not as simple as it
        looks so I decided to get a approximative result by dichotomy. I can find the result with an error of 10<sup>-8</sup> decimals in less than 0.04
        seconds, it's more than enough.
      </Text>
      <Text>With this result I can know compute my theorical benefice, I just have to minus the fees I will pay to know if I'm profitable or not </Text>
      <Title2>What will be the fees and why fees are so important ? </Title2>
      <Text>
        First the average profit is very low so the fees can be a very significative part of it. Most of the time, the fees are bigger than the theorical
        profit.
      </Text>
      <Text>
        Secondly I pay more fee than a normal transaction.I have to multiply the target fees by a coefficient in order to pass before it. The target transaction
        will be in the pool of transaction before mine so to catch up, so I will have to pay more.
      </Text>
      <Text>
        The validators are incentived to process my transaction before because I pay more fee. That's how most blockchain work to regulate the stream of
        transaction. If there is a lot of people wanting to run a transaction, the network will be congested, so there will be people that will pay more to be
        processed. So fees to process a new transaction will be high and people will wait the network to be not congested to process their transaction with
        lower fees. With this mecanism people will spread theirs transaction in times and avoid congesting the network. Some Network like Solana have fix fees.
        For this reason, the network is often down.
      </Text>
      <Title2>Is this bot working ? </Title2>
      <Text>Yes, this bot is working and can front run some transactions with the perfect amount.</Text>
      <Title2>Is this bot profitable ? </Title2>
      <Text>
        This bot do not lose but do not win money either. There is too much concurrency between front runner trading bot, if someone pay more fees than me, He
        will be processed before me and my transaction will fail. I will pay the fees in any case so it lower my other profits. There is also concurency between
        arbitrage bot. Some bot can arbitrage the price between my transaction and my target transation. I think I can prevent them by analysing all the pool
        and verify my transaction cannot be arbitrageable but I dont implement it yet.
      </Text>
    </StyledCard>
  );
}

export default FrontRunnerTradingBot;
