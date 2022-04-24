import styled from 'styled-components';

const Logo = styled.img`
  width: 60px;
  margin: 5px;
`;
function LogoImg({ src, alt }) {
  return <Logo src={src} alt={alt}></Logo>;
}
export default LogoImg;
