import MainPicture from '../../components/Main-picture/MainPicture';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Section from '../../components/Section/Section';
import Services from '../../components/Section/Rubrik/Services';
import Pricing from '../../components/Section/Rubrik/Pricing';
import Skills from '../../components/Section/Rubrik/Skills/Skills';
import Education from '../../components/Section/Rubrik/Education';
import Project from '../../components/Project';
import { useState, useEffect, useRef } from 'react';
const ColumnMasonry = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const StyledCard = styled.div`
  color: ${colors.tertiary};
  width: 100%;
`;
const age = getAge('1997-05-27T00:00:00') + ' yo';
const headlinesAboutMe = [age, 'Paris', 'Freelance'];
const headlinesResume = ['2.5 years experience', "Master's degree"];
const introText =
  'Backend developer who knows a bit about frontend. Very attentive to every single optimization to have a more efficient sofware and a cleaner code. I always keep in mind the customer need to find an appropriate answer to the problem.';
const resumeText =
  'Worked professionnaly for 2.5 years. 1 for the french lottery group FDJ and 1.5 for a BSS running for several digital brand in telecom and utilities industry at triPica. I mainly develop professionally in Java 17 and the usual java stack, like springboot, hibernate, maven and other tools like openAPI, jenkins and git.';

const MansonryCard = styled.div`
  display: flex;
  background-color: ${colors.background};
`;

function Home({ nbColumns }) {
  const nbElem = 4;
  const [dimension, setDimension] = useState(initStateDimension(nbElem));
  const [columnsSts, setColumnsSts] = useState([]);

  let cardRefs = useRef(new Array(nbElem));

  const content = [];

  content.push({
    id: 'picture',
    reactElem: (
      <StyledCard gridArea="picture" className="order_0" ref={(element) => (cardRefs.current[0] = element)} style={{ order: 0 }}>
        <MainPicture />
      </StyledCard>
    ),
  });
  content.push({
    id: 'aboutMe',
    reactElem: (
      <StyledCard gridArea="aboutMe" className="order_1" key="1" ref={(element) => (cardRefs.current[1] = element)} style={{ order: 1 }}>
        <Section sectionName="About me" headlines={headlinesAboutMe} introText={introText}>
          <Services />
          <Pricing />
        </Section>
      </StyledCard>
    ),
  });

  content.push({
    id: 'resume',
    reactElem: (
      <StyledCard gridArea="resume" className="order_2" key="2" ref={(element) => (cardRefs.current[2] = element)} style={{ order: 2 }}>
        <Section sectionName="Resume" headlines={headlinesResume} introText={resumeText}>
          <Skills />
          <Education />
        </Section>
      </StyledCard>
    ),
  });
  content.push({
    id: 'sideProjects',
    reactElem: (
      <StyledCard gridArea="sideProjects" className="order_3" key="3" ref={(element) => (cardRefs.current[3] = element)} style={{ order: 3 }}>
        <Project title="Projet 1" />
        <Project title="Projet 2" />
        <Project title="Projet 3" />
      </StyledCard>
    ),
  });

  const observer = useRef(
    new ResizeObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        const element = entries[i].target;
        const id = element.className
          .split(' ')
          .find((e) => e.startsWith('order_'))
          .split('_')[1];
        const { height, width } = entries[i].contentRect;
        console.log(`${id} - height = ${height}px`);
        const elem = dimension.find((elem) => elem.id === i);
        if (height !== 0) {
          elem.height = height;
          elem.width = width;
        } else {
          console.log('TF height = 0 ?');
        }
        setDimension(dimension);
      }
      const columns = new Array(nbColumns);
      const columnsContent = new Array(nbColumns);
      // init with for loop to have different references
      for (let i = 0; i < columns.length; i++) {
        columns[i] = { elements: [], totalHeight: 0 };
        columnsContent[i] = new Array(0);
      }
      for (let dim of dimension) {
        const minHeight = Math.min(...columns.map((e) => e.totalHeight));
        const minColumn = columns.find((e) => e.totalHeight === minHeight);
        minColumn.elements.push(dim.id);
        minColumn.totalHeight = minColumn.totalHeight + dim.height;
        const columnIdx = columns.indexOf(minColumn);
        columnsContent[columnIdx].push(content[dim.id]);
      }

      console.log(`dimension=${JSON.stringify(dimension)}`);
      console.log(columnsContent);
      setColumnsSts(columnsContent);
    })
  );

  useEffect(() => {
    const cardRefsCurrents = [];
    for (let i = 0; i < 4; i++) {
      if (cardRefs.current[i]) {
        observer.current.observe(cardRefs.current[i]);
        cardRefsCurrents.push(cardRefs.current[i]);
      }
    }
    let currentObserver = observer.current;
    return () => {
      for (let i = 0; i < cardRefsCurrents.length; i++) {
        currentObserver.unobserve(cardRefsCurrents[i]);
      }
    };
  }, [observer]);

  if (columnsSts.length === 0) {
    console.log('empty');
    columnsSts[0] = content;
    setColumnsSts(columnsSts);
  } else {
    console.log('not empty');
    console.log(columnsSts.length);
    console.log(dimension);
    console.log(columnsSts);
  }
  return (
    <MansonryCard>
      {columnsSts.map((col, colIdx) => {
        return (
          <ColumnMasonry key={colIdx}>
            {col.map((elem) => {
              console.log(`Affichage de l'elem ${elem.id} dans la colonne ${colIdx}`);
              return elem.reactElem;
            })}
          </ColumnMasonry>
        );
      })}
    </MansonryCard>
  );
}

export default Home;

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
function initStateDimension(n) {
  const dim = [];
  for (let i = 0; i < n; i++) {
    dim[i] = { id: i, height: 0 };
  }
  return dim;
}
