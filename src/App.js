import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Artist from './pages/Artist';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/artist">Artist</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artist" element={<Artist />} />
      </Routes>
    </Router>
  );
}

export default App;
