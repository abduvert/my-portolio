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
        <div id="home">
          <Home />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <SpeedInsights />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
