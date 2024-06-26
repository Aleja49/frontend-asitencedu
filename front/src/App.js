import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioSesion from './components/InicioSesion/InicioSesion';
import Registro from './components/Registro/Registro';
import Inasistencias from './components/Inasistencias/Inasistencias'; // Importa el componente Inasistencias

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inasistencias" element={<Inasistencias />} /> {/* Añade la ruta para Inasistencias */}
      </Routes>
    </Router>
  );
};

export default App;