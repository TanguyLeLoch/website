import MainPicture from '../../components/CV/MainPicture';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Section from '../../components/SectionComponents/Section';
import Services from '../../components/CV/AboutMe/Services';
import Pricing from '../../components/CV/AboutMe/Pricing';
import Skills from '../../components/CV/Resume/Skills';
import Education from '../../components/CV/Resume/Education';
import FrontRunnerBot from '../../components/CV/SideProjects/FrontRunnerBot';

import { useState, useEffect, useRef, useContext } from 'react';
import { DimensionContext } from '../../utils/context';

const MasonryLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  background-color: ${colors.background};
`;
const ColumnMasonry = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  max-width: 600px;
  width: 50%;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
const StyledCard = styled.div`
  color: ${colors.tertiary};
  width: 100%;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.4);
  padding: 20px;
`;

function Home() {
  const maxNbColumns = 2;
  const nbElem = 4;
  const minColumnWidth = 400;
  const windowDimension = useContext(DimensionContext);
  let cardRefs = useRef(new Array(nbElem));
  const [columnsContent, setColumnsContent] = useState(initColumns(maxNbColumns, cardRefs));
  let [nbLoad, setNbLoad] = useState(0);

  const observer = useRef(
    new ResizeObserver(() => {
      reorderElems(cardRefs, columnsContent, setColumnsContent, maxNbColumns, minColumnWidth, observer, windowDimension);
    })
  );
  useEffect(() => {
    const cardRefsCurrents = [];
    for (let i = 0; i < nbElem; i++) {
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

  if (nbLoad === 0) {
    setNbLoad(++nbLoad);
  } else if (nbLoad === 1) {
    columnsContent[1].contentList = columnsContent[0].contentList;
    columnsContent[0].contentList = [];
    setColumnsContent(columnsContent);
    setNbLoad(++nbLoad);
  }

  return (
    <MasonryLayout>
      {columnsContent &&
        columnsContent.map((col) => {
          return (
            <ColumnMasonry key={col.id} className={col.id}>
              {col.contentList.map((elem) => {
                // console.log(`Affichage de l'elem ${elem.id} dans la colonne ${col.id}`);
                return elem.reactElem;
              })}
            </ColumnMasonry>
          );
        })}
    </MasonryLayout>
  );
}

export default Home;

function reorderElems(cardRefs, columnsContent, setColumnsContent, maxNbColumn, minColumnWidth, observer, windowDimension) {
  const contentSorted = columnsContent
    .reduce((acc, col) => {
      acc.concat(col.contentList);
      return acc.concat(col.contentList);
    }, [])
    .sort((a, b) => a.order - b.order);

  const nbColumn = computeNbColumn(maxNbColumn, minColumnWidth, windowDimension.dimension.width);

  const newColumnContent = new Array(nbColumn);
  for (let i = 0; i < nbColumn; i++) {
    newColumnContent[i] = { id: i, contentList: [], totalHeight: 0 };
  }
  for (const elem of contentSorted) {
    const minHeight = Math.min(...newColumnContent.map((e) => e.totalHeight));
    const minColumn = newColumnContent.find((e) => e.totalHeight === minHeight);
    minColumn.contentList.push(elem);
    minColumn.totalHeight += cardRefs.current[elem.order].clientHeight;
  }
  setColumnsContent(newColumnContent);
  // observer lose ref for resize 2 column to 1 column
  for (let i = 0; i < contentSorted.length; i++) {
    observer.current.observe(cardRefs.current[i]);
  }
}

function computeNbColumn(maxNbColumn, minColumnWidth, screenWidth) {
  // min column = 1, max column = maxNbColumn
  return Math.max(1, Math.min(maxNbColumn, Math.floor(screenWidth / minColumnWidth)));
}

function initColumns(nbColumns, cardRefs) {
  const columns = new Array(nbColumns);
  for (let i = 0; i < columns.length; i++) {
    columns[i] = { id: i, contentList: [] };
  }
  columns[0].contentList = initContentList(cardRefs);
  return columns;
}

function initContentList(cardRefs) {
  const age = getAge('1997-05-27T00:00:00') + ' yo';
  const headlinesAboutMe = [age, 'Paris', 'Freelance'];
  const headlinesResume = ['2.5 years experience', "Master's degree"];
  const introText =
    'Backend developer who knows a bit about frontend. Very attentive to every single optimization to have a more efficient sofware and a cleaner code. I always keep in mind the customer need to find an appropriate answer to the problem.';
  const resumeText =
    'Worked professionnaly for 2.5 years. 1 for the french lottery group FDJ and 1.5 for a BSS running for several digital brand in telecom and utilities industry at triPica. I mainly develop professionally in Java 17 and the usual java stack, like springboot, hibernate, maven and other tools like openAPI, jenkins and git.';

  const content = [];

  content.push({
    id: 'picture',
    order: 0,
    reactElem: (
      <StyledCard key="picture" className="order_0" ref={(element) => (cardRefs.current[0] = element)} style={{ order: 0 }}>
        <MainPicture />
      </StyledCard>
    ),
  });
  content.push({
    id: 'aboutMe',
    order: 1,
    reactElem: (
      <StyledCard key="aboutMe" className="order_1" ref={(element) => (cardRefs.current[1] = element)} style={{ order: 1 }}>
        <Section sectionName="About me" headlines={headlinesAboutMe} introText={introText}>
          <Services />
          <Pricing />
        </Section>
      </StyledCard>
    ),
  });

  content.push({
    id: 'resume',
    order: 2,
    reactElem: (
      <StyledCard key="resume" className="order_2" ref={(element) => (cardRefs.current[2] = element)} style={{ order: 2 }}>
        <Section sectionName="Resume" headlines={headlinesResume} introText={resumeText}>
          <Skills />
          <Education />
        </Section>
      </StyledCard>
    ),
  });
  content.push({
    id: 'sideProjects',
    order: 3,
    reactElem: (
      <StyledCard key="sideProjects" className="order_3" ref={(element) => (cardRefs.current[3] = element)} style={{ order: 3 }}>
        <Section
          sectionName="Side projects"
          introText="I use to code for many kind of stuff on my free time. Recently it has been essentially about crypto programming."
        >
          <FrontRunnerBot />
        </Section>
      </StyledCard>
    ),
  });
  return content;
}

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
