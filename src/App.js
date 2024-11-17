import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import de Link
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Artist from './pages/Artist';
import './App.css';

function App() {
  return (
    <Router>
      {/* Bannière avec le titre à gauche et les liens de navigation à droite */}
      <header className="App-header">
        <div className="logo">
          <h1>Sweeny-art</h1>
        </div>
        <nav>
          <ul>
            {/* L'ordre des liens a été modifié */}
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/artist">Artiste</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Routes pour les différentes pages */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artist" element={<Artist />} />
      </Routes>
    </Router>
  );
}

export default App;
