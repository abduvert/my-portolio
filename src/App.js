import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/Home';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <SpeedInsights />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
