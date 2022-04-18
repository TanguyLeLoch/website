import MainPicture from '../../components/Main-picture/MainPicture';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Section from '../../components/Section/Section';
import Services from '../../components/Section/Rubrik/Services';
import Pricing from '../../components/Section/Rubrik/Pricing';

const StyledHome = styled.div`
  background-color: ${colors.background};
  margin-top: 30px;
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
  margin-left: 50px;
  margin-right: 50px;
  color: ${colors.tertiary};
`;
function App() {
  const age = getAge('1997-05-27T00:00:00') + ' yo';
  const headlinesAboutMe = [age, 'Paris', 'Freelance'];
  const headlinesResume = [
    '2.5 years experience',
    '1 year of front end',
    "Master's degree",
  ];
  const introText =
    'FullStack developer with a preference for the backend. Very attentive to every single optimization to have a more efficient sofware and a cleaner  code. I always keep in mind the customer need to find an appropriate answer to the problem.';
  const resumeText =
    "Worked professionnaly for 2.5 years. 1 for the french lottery group FD' and 1.5 for a BSS running for several digital brand in telecom and utilities industry at triPica.";
  return (
    <StyledHome>
      <Left className="left">
        <MainPicture />
        <Section
          sectionName="Resume"
          headlines={headlinesResume}
          introText={resumeText}
        >
          <div>bjr</div>
        </Section>
      </Left>
      <Right className="right">
        <Section
          sectionName="About me"
          headlines={headlinesAboutMe}
          introText={introText}
        >
          <Services />
          <Pricing />
        </Section>
      </Right>
    </StyledHome>
  );
}

export default App;

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
