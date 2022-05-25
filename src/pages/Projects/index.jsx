import React from 'react';
import { SectionSubtitle } from '../../components/SectionComponents/SectionTitle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../utils/style/colors';

const Title = styled(SectionSubtitle)`
  text-align: center;
  padding: 20px;
`;
const CardTitle = styled(SectionSubtitle)`
  display: inline-block;
  position: relative;
`;
const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  max-width: 1300px;
  gap: 60px;
  justify-content: center;
  margin: 0 auto;
`;
const CardLink = styled(Link)`
  color: ${colors.tertiary};
  width: 100%;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.4);
  padding: 20px;
  text-decoration: none;
  transform: scale(1);
  transition: transform 0.2s ease-out;
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

function Projects() {
  console.log('My projects');
  return (
    <>
      <Title>Some short articles of my persornal projects</Title>
      <Layout>
        <CardLink to="/projects/front-runner-trading-bot">
          <CardTitle>Front runner trading bot</CardTitle>
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
