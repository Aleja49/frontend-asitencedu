import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioSesion from './components/InicioSesion/InicioSesion';
import Registro from './components/Registro/Registro';
import Inasistencias from './components/Inasistencias/Inasistencias';
import RegistroInasistencias from './components/RegistroInasistencias/RegistroInasistencias';
import ReporteEstudiantes from './components/ReporteEstudiantes/Reporteestudiantes'; // Importa el componente ReporteEstudiantes

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inasistencias" element={<Inasistencias />} />
        <Route path="/registro-inasistencias" element={<RegistroInasistencias />} />
        <Route path="/reporte-estudiantes" element={<ReporteEstudiantes />} /> {/* Ruta para ReporteEstudiantes */}
      </Routes>
    </Router>
  );
};

export default App;
