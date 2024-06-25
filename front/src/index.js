import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InicioSesion from './components/InicioSesion/InicioSesion'; // Importa el componente de inicio de sesión

ReactDOM.render(
  <React.StrictMode>
    <InicioSesion />  {/* Renderiza el componente de inicio de sesión */}
  </React.StrictMode>,
  document.getElementById('root')
);
