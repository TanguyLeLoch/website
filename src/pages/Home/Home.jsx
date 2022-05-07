import MainPicture from '../../components/Main-picture/MainPicture';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Section from '../../components/Section/Section';
import Services from '../../components/Section/Rubrik/Services';
import Pricing from '../../components/Section/Rubrik/Pricing';
import Skills from '../../components/Section/Rubrik/Skills/Skills';
import Education from '../../components/Section/Rubrik/Education';
import Project from '../../components/Project';
// import MansonryCard from '../../components/Section/MasonryCard';
// import Card from '../../components/Card';
import { useState, useEffect, useRef } from 'react';

const StyledCard = styled.div`
  color: ${colors.tertiary};
`;
const age = getAge('1997-05-27T00:00:00') + ' yo';
const headlinesAboutMe = [age, 'Paris', 'Freelance'];
const headlinesResume = ['2.5 years experience', "Master's degree"];
const introText =
  'Backend developer who knows a bit about frontend. Very attentive to every single optimization to have a more efficient sofware and a cleaner code. I always keep in mind the customer need to find an appropriate answer to the problem.';
const resumeText =
  'Worked professionnaly for 2.5 years. 1 for the french lottery group FDJ and 1.5 for a BSS running for several digital brand in telecom and utilities industry at triPica. I mainly develop professionally in Java 17 and the usual java stack, like springboot, hibernate, maven and other tools like openAPI, jenkins and git.';

const MansonryCard = styled.div`
  background-color: ${colors.background};
`;

function Home() {
  let myRef = useRef(null);

  const content = [];
  content.push(
    <StyledCard gridArea="picture" key="0" ref={myRef}>
      <MainPicture />
    </StyledCard>
  );
  content.push(
    // <StyledCard gridArea="aboutMe" key="1" ref={(ref) => (cardRefs.current[1] = ref)}>
    <StyledCard gridArea="aboutMe" key="1">
      <Section sectionName="About me" headlines={headlinesAboutMe} introText={introText}>
        <Services />
        <Pricing />
      </Section>
    </StyledCard>
  );

  content.push(
    <StyledCard gridArea="resume" key="2">
      <Section sectionName="Resume" headlines={headlinesResume} introText={resumeText}>
        <Skills />
        <Education />
      </Section>
    </StyledCard>
  );
  content.push(
    <StyledCard gridArea="sideProjects" key="3">
      <Project title="Projet 1" />
      <Project title="Projet 2" />
      <Project title="Projet 3" />
    </StyledCard>
  );

  // useEffect(() => {
  //   console.log(cardRefs.current[0].clientHeight);
  //   console.log(cardRefs.current[1].clientHeight);
  //   console.log(cardRefs.current[2].clientHeight);
  //   console.log(cardRefs.current[3].clientHeight);
  // });

  const observer = useRef(
    new ResizeObserver((entries) => {
      // Only care about the first element, we expect one element ot be watched
      console.log(entries);
      const { height } = entries[0].contentRect;
      console.log(height);
    })
  );

  useEffect(() => {
    if (myRef.current) {
      observer.current.observe(myRef.current);
    }
    let wimd = myRef.current;
    let idk = observer.current;
    return () => {
      idk.unobserve(wimd);
    };
  }, [myRef, observer]);

  return <MansonryCard>{content.map((e) => e)}</MansonryCard>;
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
    dim[i] = { id: i, height: 0, width: 0 };
  }
  return dim;
}
