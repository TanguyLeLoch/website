import MainPicture from '../../components/Main-picture/MainPicture';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Section from '../../components/Section/Section';
import Services from '../../components/Section/Rubrik/Services';
import Pricing from '../../components/Section/Rubrik/Pricing';
import Skills from '../../components/Section/Rubrik/Skills/Skills';
import Education from '../../components/Section/Rubrik/Education';

const StyledHome = styled.div`
  background-color: ${colors.background};
  max-width: 1300px;
  min-width: 300px;
  margin: 30px auto;
  width: 80%;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: auto;
  }
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 300px);
  }
  justify-content: space-around;
`;

const Card = styled.div`
  max-width: 550px;
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
      <Card className="pic">
        <MainPicture />
      </Card>
      <Card className="aboutme">
        <Section
          sectionName="About me"
          headlines={headlinesAboutMe}
          introText={introText}
        >
          <Services />
          <Pricing />
        </Section>
      </Card>
      <Card className="resume">
        <Section
          sectionName="Resume"
          headlines={headlinesResume}
          introText={resumeText}
        >
          <Skills />
          <Education />
        </Section>
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
