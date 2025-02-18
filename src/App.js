import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/Home';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Skills from './components/Skills';
import CursorEffect from './components/CursorEffect';


function App() {
  return (
    <Router>
      <div>
        <CursorEffect></CursorEffect>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/speed-insights" element={<SpeedInsights />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
