import Rubrik from '../Rubrik';
import styled from 'styled-components';
import LogoImg from './LogoImg';

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const BundleLogo = styled.div`
  margin: auto;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.4);
  border-radius: 25px;
`;
function Skills() {
  return (
    <Rubrik title="Skills">
      <StyledCategory>
        <h4>Backend</h4>
        <BundleLogo>
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="Java" />
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt="Spring" />
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt="Node" />

          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="Mongodb" />
        </BundleLogo>
      </StyledCategory>
      <StyledCategory>
        <h4>Frontend</h4>
        <BundleLogo>
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />

          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript" />

          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="Css" />

          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="Html" />
        </BundleLogo>
      </StyledCategory>
      <StyledCategory>
        <h4>Other tools</h4>
        <BundleLogo>
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="Vscodes" />

          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" alt="Git" />

          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" />
        </BundleLogo>
      </StyledCategory>
    </Rubrik>
  );
}
export default Skills;
