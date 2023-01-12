import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './components/contact/Contact.jsx';
import Beitrag from './pages/Beitrag';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/beitrag" element={<Beitrag />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
