import styled from 'styled-components';

const ImgLegend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  img {
    max-width: 100%;
  }
  span {
    font-style: italic;
  }
`;

function ImageLegend({ src, alt, legend }) {
  return (
    <ImgLegend>
      <img src={src} alt={alt} />
      <span>{legend ? legend : alt}</span>
    </ImgLegend>
  );
}
export default ImageLegend;
