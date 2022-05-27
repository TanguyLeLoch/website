import profilePicture from '../../../assets/profilePicture.png';
import styled from 'styled-components';
import colors from '../../../utils/style/colors';
import { useState } from 'react';
import Spinner from '../../utils/Spinner';

const StyledMainPictureCpnt = styled.div`
  position: relative;
  text-align: center;
`;
const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
`;
const Name = styled.span`
  position: absolute;
  bottom: 12%;
  left: 0%;
  right: 0%;
  font-size: calc(15px + 1em);
  font-weight: bold;
  color: ${colors.primary};
`;

const Job = styled.span`
  position: absolute;
  font-weight: bold;
  font-size: calc(10px + 0.8em);
  bottom: 5%;
  left: 0%;
  right: 0%;
  color: ${colors.secondary};
`;
const SpinnerContainer = styled.div`
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

function MainPicture() {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };
  return (
    <StyledMainPictureCpnt>
      <SpinnerContainer style={{ display: loading ? 'flex' : 'none' }}>
        <Spinner />
      </SpinnerContainer>
      <StyledImage style={{ display: loading ? 'none' : 'block' }} src={profilePicture} alt="Tanguy Le Loch" onLoad={imageLoaded} />
      <Name>Tanguy Le Loch</Name>
      <Job>Developer</Job>
    </StyledMainPictureCpnt>
  );
}

export default MainPicture;
