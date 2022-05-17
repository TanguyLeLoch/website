import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Description from './pages/Description';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Description />}>
          <Route index element={<Projects />} />
          <Route path="projects" element={<Projects />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
