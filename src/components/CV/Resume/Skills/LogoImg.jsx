import styled from 'styled-components';
import { useState } from 'react';
import Spinner from '../../../utils/Spinner';

const Logo = styled.img`
  padding: 15px;
`;
const StyledSpinner = styled(Spinner)`
  ${(props) => `width: ${props.$width}px;`}
  ${(props) => `height: ${props.$width}px;`}
`;

function LogoImg({ src, alt, width }) {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      <StyledSpinner style={{ display: loading ? 'block' : 'none' }} $width={width} />
      <Logo style={{ display: loading ? 'none' : 'block' }} src={src} alt={alt} width={width} onLoad={imageLoaded}></Logo>
    </>
  );
}
export default LogoImg;
