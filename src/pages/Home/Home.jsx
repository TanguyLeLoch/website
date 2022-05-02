import MainPicture from '../../components/Main-picture/MainPicture';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Section from '../../components/Section/Section';
import Services from '../../components/Section/Rubrik/Services';
import Pricing from '../../components/Section/Rubrik/Pricing';
import Skills from '../../components/Section/Rubrik/Skills/Skills';
import Education from '../../components/Section/Rubrik/Education';
import Project from '../../components/Project';

const StyledHome = styled.div`
  background-color: ${colors.background};
  max-width: 1300px;
  min-width: 300px;
  margin: 30px auto;
  width: 80%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.55fr 0.1fr 1fr;
  grid-template-areas:
    'picture aboutMe'
    'resume aboutMe'
    'resume sideProjects';
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
  justify-content: space-around;
`;

const Card = styled.div`
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.4);
  padding: 20px;
  max-width: 550px;
  grid-area: ${({ gridArea }) => gridArea};
  @media screen and (max-width: 500px) {
    max-width: 300px;
  }
  color: ${colors.tertiary};
`;
function Home() {
  const age = getAge('1997-05-27T00:00:00') + ' yo';
  const headlinesAboutMe = [age, 'Paris', 'Freelance'];
  const headlinesResume = ['2.5 years experience', "Master's degree"];
  const introText =
    'Backend developer who knows a bit about frontend. Very attentive to every single optimization to have a more efficient sofware and a cleaner code. I always keep in mind the customer need to find an appropriate answer to the problem.';
  const resumeText =
    'Worked professionnaly for 2.5 years. 1 for the french lottery group FDJ and 1.5 for a BSS running for several digital brand in telecom and utilities industry at triPica. I mainly develop professionally in Java 17 and the usual java stack, like springboot, hibernate, maven and other tools like openAPI, jenkins and git.';
  return (
    <StyledHome>
      <Card gridArea="picture">
        <MainPicture />
      </Card>
      <Card gridArea="aboutMe">
        <Section
          sectionName="About me"
          headlines={headlinesAboutMe}
          introText={introText}
        >
          <Services />
          <Pricing />
        </Section>
      </Card>
      <Card gridArea="resume">
        <Section
          sectionName="Resume"
          headlines={headlinesResume}
          introText={resumeText}
        >
          <Skills />
          <Education />
        </Section>
      </Card>
      <Card gridArea="sideProjects">
        <Project title="Projet 1" />
        <Project title="Projet 2" />
        <Project title="Projet 3" />
      </Card>
    </StyledHome>
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
