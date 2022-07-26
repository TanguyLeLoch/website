import { createGlobalStyle } from 'styled-components';
import colors from './utils/style/colors';

export const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1c1c1e;
}
h1,
h2,
h3,
h4 {
  font-weight: bold;
  padding: 10px 0px;
  color: white;
}
a {
  color: ${colors.secondary};
}
article  a {
  &:visited {
    color: #7143dd;
  }
}
#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
footer {
  padding-top: 20px;
}
`;
