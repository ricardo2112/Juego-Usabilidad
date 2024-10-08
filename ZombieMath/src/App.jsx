import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Inicio from './pages/Inicio';
import Victoria from './pages/Victoria';
import Derrota from './pages/Derrota';
import Screemer from './pages/Screemer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/principal/:categoria' element={<Principal />} />
        <Route path='/derrota' element={<Derrota />} />
        <Route path='/victoria' element={<Victoria />} />
        <Route path="/screemer" element={<Screemer />} />
      </Routes>
    </Router>
  );
}

export default App;