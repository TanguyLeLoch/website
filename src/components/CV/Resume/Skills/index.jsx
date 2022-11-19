import Rubrik from '../../../SectionComponents/Rubrik';
import styled from 'styled-components';
import LogoImg from './LogoImg';
import { useEffect } from 'react';

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const widthLogo = 90;
const nbElemsPerLine = 4;
const BundleLogo = styled.div`
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.4);
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  max-width: ${widthLogo * nbElemsPerLine}px;
  align-self: center;
`;
function resizeBundles() {
  const bundles = document.querySelectorAll('.bundle');
  bundles.forEach((bundle) => {
    bundle.style.maxWidth = `${widthLogo * nbElemsPerLine}px`;
    const bundleWidth = bundle.clientWidth;
    const width = Math.floor(bundleWidth / widthLogo) * widthLogo;
    bundle.style.maxWidth = `${width}px`;
  });
}
const resizeObserver = new ResizeObserver(resizeBundles);
function Skills() {
  useEffect(() => {
    resizeObserver.observe(document.querySelector('#categories'));
  }, []);

  return (
    <Rubrik title="Skills">
      <StyledCategory id="categories">
        <h4>Backend</h4>
        <BundleLogo className="bundle">
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="Java" width={widthLogo} />
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt="Spring" width={widthLogo} />
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt="Node" width={widthLogo} />
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="Mongodb" width={widthLogo} />
        </BundleLogo>
      </StyledCategory>
      <StyledCategory>
        <h4>Frontend</h4>
        <BundleLogo className="bundle">
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={widthLogo} />
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript" width={widthLogo} />
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="Css" width={widthLogo} />
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="Html" width={widthLogo} />
        </BundleLogo>
      </StyledCategory>
      <StyledCategory>
        <h4>Other tools</h4>
        <BundleLogo className="bundle">
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="Vscodes" width={widthLogo} />
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" alt="Git" width={widthLogo} />
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" width={widthLogo} />
          <LogoImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" alt="IntelliJ" width={widthLogo} />

        </BundleLogo>
      </StyledCategory>
    </Rubrik>
  );
}
export default Skills;
