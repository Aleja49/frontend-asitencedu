import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioSesion from './components/InicioSesion/InicioSesion';
import Registro from './components/Registro/Registro';
import Inasistencias from './components/Inasistencias/Inasistencias'; // Asegúrate de que esté correctamente en minúsculas
import RegistroInasistencias from './components/RegistroInasistencias/RegistroInasistencias'; // Importa el componente RegistroInasistencias

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inasistencias" element={<Inasistencias />} /> {/* Ruta para Inasistencias */}
        <Route path="/registro-inasistencias" element={<RegistroInasistencias />} /> {/* Ruta para RegistroInasistencias */}
      </Routes>
    </Router>
  );
};

export default App;
