import styled from 'styled-components';
import colors from '../../../utils/style/colors';
import SlippageWarning from '../../../assets/front-runner-trading-bot/slippage-warning.png';
import ImageLegend from '../../../components/utils/ImageLegend.jsx';
import FrontRunExample from '../../../assets/front-runner-trading-bot/front-run-example-legend.png';
import FullNodeRequirement from '../../../assets/front-runner-trading-bot/full-node-requirements.png';

const Title1 = styled.h1`
  text-align: center;
  padding: 20px;
  font-size: max(20px, calc(10px + 2vw)); ;
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
  font-size: min(22px, calc(10px + 1vw));
`;

const StyledArticle = styled.article`
  max-width: min(1000px, 80%);
  margin: 20px auto;
  color: ${colors.tertiary};
  width: 100%;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.4);
  padding: 20px;
  > small {
    display: block;
    text-align: right;
  }
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
    <StyledArticle>
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
        For some reason, in the DeFi world, it is not possible to place limit orders on chain. The only possible order is the market order. This type of order
        makes the fill price unpredictable. This is why all AMMs (Automated Market Maker) implement a swap parameter called slippage.
      </Text>
      <Title2>How works slippage ?</Title2>
      <Text>
        For example, if I want to buy GrimaceCoin, say 10. The current price is 10 BUSD per coin. It will cost me about 100 BUSD. The price can move between the
        time I press the exchange button and the time my transaction is processed, so I put a 10% slippage. This means that I accept that the price can increase
        by 10%, so if the price is still below 11 BUSD, my trade will be accepted. If the price at the exact time of my trade is 11.1 BUSD, my trade will fail.
        Of course, there is no need to say that if the price goes down, my transaction will be accepted in any case.
      </Text>
      <Text>
        A 10% variation is huge and it won't happen on a coin with a decent market cap. But sometimes on some coins, fees are charged during the buying or
        selling process. This forces people to increase their slippage manually. Some investors forget to reset the slippage after their trade. Or maybe they
        are tired of seeing their ethereum trades fail even though they paid high gas fees, so they put a high slippage in doubt. I can't blame them for this
        even though it is clearly written on their AMM when they change the slippage.
      </Text>
      <ImageLegend src={SlippageWarning} alt="slippage warning on pancake swap"></ImageLegend>
      <Title3> The goal of the bot is to take profit of these orders.</Title3>
      <Title2>How to detect them ? </Title2>
      <Text>
        Fortunately, the blockchain is public and the pending transactions are also public. You need to be connected to a node first. It is possible to run it
        on your own, but this requires a huge amount of resources and can be laborious. For example, here are the recommended requirements to run a node on the
        binance smart chain:
      </Text>
      <ImageLegend src={FullNodeRequirement} alt="full node requirements for binance smart chain" legend={LinkToFullNodeRequirements}></ImageLegend>
      <Text>
        I wanted to use a free solution and this solution was{' '}
        <a href="https://moralis.io/speedy-nodes/" target="_blank" rel="noreferrer">
          speed node from moralis
        </a>
        . The number of transactions is very (very) limited but it's enough to start with. But it's also so limited that I had to do some throttlelling to not
        analyzing all the pending transactions.
      </Text>
      <Text>
        In the pending transaction stream, all transactions on the blockchain will be present, most of them are not needed. We can filter out all transactions
        and target only transactions to the AMM router. I used the Pancake swap router most of the time because the Binance smart chain has the lowest fees, a
        lot of users and finally, a lot of small cap shitcoins, which is important for this type of bot. But, and this is a big "but", there is also a big
        competition between all front runner trading bot. I will clarify this point later.
      </Text>
      <Text>
        Now we need to filter out the most profitable transactions, so we need to calculate the price of the token by ourselves, this can be done by calling the
        reserve of the traded pair. For example if the transaction wants to buy grimaceCoin in exchange for BUSD, then we can compute the address of the pair
        and calculate the ratio grimaceCoin to BUSD in the reserve, if the ratio is 10 times more grimaceCoin than BUSD, then the price is 10 BUSD per
        grimaceCoin. And secondly, we need to know the slippage of the target trade.
      </Text>
      <Text>
        After compute theses informations (or some derrivated informations about them), We need to know what's the max amount I can buy in order to be at the
        limit of making fail my target order. This limit is the most profitable point possible. To resolve this 3rd degree equation which are not as simple as
        it looks so I decided to get a approximative result by dichotomy. I can find the result with an error of 10<sup>-8</sup> decimals in less than 0.04
        seconds, it's more than enough.
      </Text>
      <Text>
        With this result I can calculate my theoretical profit, it remains to me to deduct the fess which I will pay to know if I am profitable or not.
      </Text>
      <Title2>What will be the fees and why fees are so important ? </Title2>
      <Text>
        First of all, the average profit is very low, so the costs can be a very large part of the profit. Most of the time, the costs are higher than the
        theoretical profit.
      </Text>
      <Text>
        Secondly, I pay more fees than a normal transaction. I have to multiply the target's fee by a factor to get ahead of it. The target transaction will be
        in the transaction pool before mine, so to catch up, I will have to pay more.
      </Text>
      <Text>
        Validators are incentivized to process my transaction first because I pay more fees. This is how most blockchains work to regulate transaction flow. If
        there are a lot of people who want to make a transaction, the network will be congested, so there will be people who will pay more to be processed.
        Thus, the fee for processing a new transaction will be high and people will wait until the network is not congested to process their transaction with
        lower fees. With this mechanism, people will spread out their transactions over time and avoid congesting the network. Some networks like Solana have
        fixed fees. For this reason, the network is often down.
      </Text>
      <Title2>Is this bot working ? </Title2>
      <Text>Yes, this bot is working and can front run some transactions with the perfect amount.</Text>
      <Title2>Is this bot profitable ? </Title2>
      <Text>
        This bot doesn't lose but doesn't make money either. There is too much competition between front runner trading bot, if someone pays more fees than me,
        they will be processed before me and my transaction will fail. I will pay the fee in any case, which will reduce my other profits. There is also
        competition between arbitrage bots. Some bots may arbitrage the price between my trade and my target trade. I think I can prevent them by analyzing the
        whole pool and checking that my trade can't be arbitrated. and checking that my trade can't be arbitrated but I haven't implement it yet.
      </Text>
      <Title2>Conclusion</Title2>
      <Text>
        The repository is open source and you can contribute to it. You can fork it and make your own version. Here is{' '}
        <a href="https://github.com/TanguyLeLoch/blockchain-listener" target="_blank" rel="noreferrer">
          the link to the repository
        </a>
        . I learned a lot from this bot with a deep understanding of the blockchain and specifically the pending transaction stream and the AMM router contract.
        I hope you enjoyed this article and I hope you will enjoy the bot as well.
      </Text>

      <small>Tanguy Le Loch, June the 4th 2022</small>
    </StyledArticle>
  );
}

export default FrontRunnerTradingBot;
