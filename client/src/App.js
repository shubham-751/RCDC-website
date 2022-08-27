import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import Home from './components/Home';
import Projects from './components/Projects';
import Contactus from './components/Contactus';
import Team from './components/Team';


function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
