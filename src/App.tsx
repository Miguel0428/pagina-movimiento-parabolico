import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { ParabolicMotion } from './pages/ParabolicMotion';
import { Kinematics } from './pages/Kinematics';
import { SportsPhysics } from './pages/SportsPhysics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parabolic-motion" element={<ParabolicMotion />} />
            <Route path="/kinematics" element={<Kinematics />} />
            <Route path="/sports-physics" element={<SportsPhysics />} />
          </Routes>
        </main>
        <footer className="bg-blue-900 text-white py-4 text-center">
          <p>© 2024 Sports Physics Education</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;