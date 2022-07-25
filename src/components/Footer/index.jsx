import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { StyledLine } from '../Navbar';
import { LogoGithub, LogoLinkedin } from '../SocialNetworkLinks';

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${colors.navbar};
  width: 100%;
  padding: 15px;
  svg {
    width: 24px;
    height: 24px;
    fill: rgba(255, 255, 255, 1);
  }
  a {
    color: ${colors.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }
`;
function Footer() {
  return (
    <footer>
      <StyledLine />
      <FooterContent className="content">
        <a href="https://github.com/TanguyLeLoch">
          <LogoGithub />
          <span>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/tanguyleloch/">
          <LogoLinkedin />
          <span>LinkedIn</span>
        </a>
      </FooterContent>
    </footer>
  );
}
export default Footer;
