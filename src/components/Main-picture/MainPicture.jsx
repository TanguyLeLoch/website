import profilePicture from '../../assets/profilePicture.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const StyledMainPictureCpnt = styled.div`
  position: relative;
  text-align: center;
`;
const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 4px;
  /* transform: scale(1.1, 1.1); */
`;
const Name = styled.span`
  position: absolute;
  bottom: 12%;
  left: 0%;
  right: 0%;
  font-size: 3.5em;
  @media (max-width: 1000px) {
    font-size: 1.75em;
  }
  font-weight: bold;
  color: ${colors.primary};
`;

const Job = styled.span`
  position: absolute;
  font-weight: bold;
  font-size: 2em;
  @media (max-width: 1000px) {
    font-size: 1em;
  }
  bottom: 5%;
  left: 0%;
  right: 0%;
  color: ${colors.secondary};
`;

function MainPicture() {
  return (
    <StyledMainPictureCpnt>
      <StyledImage src={profilePicture} alt="Tanguy Le Loch" />
      <Name>Tanguy Le Loch</Name>
      <Job>Developer</Job>
    </StyledMainPictureCpnt>
  );
}

export default MainPicture;
