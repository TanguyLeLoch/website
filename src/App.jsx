import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import { WidthProvider } from './utils/context';

function App() {
  return (
    <BrowserRouter>
      <WidthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="projects" element={<Projects />}></Route>
        </Routes>
      </WidthProvider>
    </BrowserRouter>
  );
}
export default App;
