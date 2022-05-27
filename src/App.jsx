import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import { DimensionProvider } from './utils/context';
import FrontRunnerTradingBot from './pages/Projects/front-runner-trading-bot';

function App() {
  return (
    <BrowserRouter>
      <DimensionProvider>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="projects" element={<Outlet />}>
            <Route index element={<Projects />}></Route>
            <Route path="front-runner-trading-bot" element={<FrontRunnerTradingBot />}></Route>
          </Route>
        </Routes>
      </DimensionProvider>
    </BrowserRouter>
  );
}
export default App;
