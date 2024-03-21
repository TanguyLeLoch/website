import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SocialNetworkLinks from './components/SocialNetworkLinks/index.jsx';
import { GlobalStyle } from './GlobalStyle';
import Home from './pages/Home';
import Projects from './pages/Projects';
import FrontRunnerTradingBot from './pages/Projects/front-runner-trading-bot';
import { DimensionProvider } from './utils/context';
import Rm from './pages/Rm';

function App() {
  return (
    <BrowserRouter basename="website/">
      <GlobalStyle />
      <DimensionProvider>
        <Navbar />
        <main>
          <SocialNetworkLinks />
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="projects" element={<Outlet />}>
              <Route index element={<Projects />}></Route>
              <Route path="front-runner-trading-bot" element={<FrontRunnerTradingBot />}></Route>
            </Route>
            <Route path="rm" element={<Rm />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </main>
        <Footer />
      </DimensionProvider>
    </BrowserRouter>
  );
}
export default App;
