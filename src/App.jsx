import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialNetworkLinks from './components/SocialNetworkLinks/index.jsx';
import { GlobalStyle } from './GlobalStyle';
import Home from './pages/Home';
import Projects from './pages/Projects';
import FrontRunnerTradingBot from './pages/Projects/front-runner-trading-bot';
import { DimensionProvider } from './utils/context';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <DimensionProvider>
        <Navbar />
        <SocialNetworkLinks />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="projects" element={<Outlet />}>
            <Route index element={<Projects />}></Route>
            <Route path="front-runner-trading-bot" element={<FrontRunnerTradingBot />}></Route>
          </Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
        {/* <Footer /> */}
      </DimensionProvider>
    </BrowserRouter>
  );
}
export default App;
