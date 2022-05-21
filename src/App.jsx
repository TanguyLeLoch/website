import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import { DimensionProvider } from './utils/context';

function App() {
  return (
    <BrowserRouter>
      <DimensionProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="projects" element={<Projects />}></Route>
        </Routes>
      </DimensionProvider>
    </BrowserRouter>
  );
}
export default App;
