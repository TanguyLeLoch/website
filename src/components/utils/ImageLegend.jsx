import styled from 'styled-components';
import Spinner from './Spinner';
import { useState } from 'react';

const ImgLegend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  img {
    max-width: 100%;
  }
  small {
    font-style: italic;
  }
`;

function ImageLegend({ src, alt, legend }) {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <ImgLegend>
      <Spinner style={{ display: loading ? 'block' : 'none' }} />
      <img style={{ display: loading ? 'none' : 'block' }} src={src} alt={alt} onLoad={imageLoaded} />
      {legend !== '' && <small>{legend ? legend : alt}</small>}
    </ImgLegend>
  );
}
export default ImageLegend;
