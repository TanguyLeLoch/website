import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SectionSubtitle } from '../../components/SectionComponents/SectionTitle';
import ImageLegend from '../../components/utils/ImageLegend';
import { DimensionContext } from '../../utils/context';
import { IMG_PREFIX_PATH } from '../../utils/Globals';
import colors from '../../utils/style/colors';

const botThubnailImgPath = IMG_PREFIX_PATH + 'bot.jpeg';

const Title = styled(SectionSubtitle)`
  text-align: center;
  padding: 20px;
`;
const CardTitle = styled(SectionSubtitle)`
  display: inline-block;
  position: relative;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: min(1000px, 80%);
  gap: 20px;
  justify-content: center;
  margin: 0 auto;
`;
const CardLink = styled(Link)`
  color: ${colors.tertiary};
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.4);
  padding: 20px;
  text-decoration: none;
  transform: scale(1);
  transition: transform 0.2s ease-out;
  > div,
  > article {
    width: 100%;
  }
  > div {
    ${(props) => props.$isUnderBreakpoint && `display: none;`};
  }
  p {
    text-align: justify;
  }

  h3:after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    background: ${colors.secondary};
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-out;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-out;
    h3:after {
      transform: scaleX(1);
    }
  }
`;
const ImageContainer = styled.div``;

function Projects() {
  const windowDimension = useContext(DimensionContext);
  console.log(windowDimension);
  return (
    <>
      <Title>Some short articles of my persornal projects</Title>
      <Layout>
        <CardLink to="front-runner-trading-bot" $isUnderBreakpoint={windowDimension.isUnderBreakpoint}>
          <ImageContainer>
            <ImageLegend src={botThubnailImgPath} alt="Trading bot" legend="" />
          </ImageContainer>
          <article>
            <CardTitle>Front runner trading bot</CardTitle>
            <p>
              Front runner bots are a category of trading bots that take advantage of orders with a high fill tolerance. In simple words: I know that someone is
              going to buy a large amount of X token and that this will drive the price up. My goal is to buy just before that person when the price is still
              low, and sell just after to make a small profit. In this article, I describe my thought process for building a bot that can trade automatically
              with almost no risk using the front run technique. All the key points to pay attention to when building a front runner bot are explained. For
              those who want to go further, the link to my github repository is also present.
            </p>
          </article>
        </CardLink>
        <CardLink to="/">
          <CardTitle>NFT market place</CardTitle>
        </CardLink>
        <CardLink to="/">
          <CardTitle>MEXC trading bot</CardTitle>
        </CardLink>
      </Layout>
    </>
  );
}

export default Projects;
