// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioSesion from './components/InicioSesion/InicioSesion';
import Registro from './components/Registro/Registro';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
};

export default App;



