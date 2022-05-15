import styled from 'styled-components';

const Logo = styled.img`
  width: 90px;
  padding: 15px;
`;
function LogoImg({ src, alt }) {
  return <Logo src={src} alt={alt}></Logo>;
}
export default LogoImg;
