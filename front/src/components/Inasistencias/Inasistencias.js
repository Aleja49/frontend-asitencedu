import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle, faExclamationCircle, faUser, faCaretDown, faSignOutAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Inasistencias.css';

const Inasistencias = () => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleLogoutMenu = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    console.log('Cerrar sesión');
    setShowLogout(false);
  };

  const toggleOptionsMenu = () => {
    setShowMenu(!showMenu);
  };

  const redirectToRegistroInasistencias = () => {
    navigate('/registro-inasistencias');
  };

  return (
    <div className="inasistencias-container">
      <h2 className="rectangle-title">INASISTENCIA DE ESTUDIANTES</h2>
      <div className="additional-content">
        <div className="additional-text">
          <p className="large-text">Registros mostrados</p>
          <span className="gray-box">0</span>
        </div>

        {/* Nuevo contenedor similar al existente */}
        <div className="custom-container">
          <p className="large-text">Buscar por nombre</p>
          <span className="gray-box">Nicoll Alejandra Prieto Puentes</span>
        </div>

        {/* Tabla de datos */}
        <table className="student-table">
          <thead>
            <tr>
              <th>Nombre del estudiante</th>
              <th>Número de ficha</th>
              <th>Fecha</th>
              <th>Justifica inasistencia</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nicoll Alejandra Prieto Puentes</td>
              <td>2693497</td>
              <td>2024-06-23</td>
              <td>
                <select className="justify-select">
                  <option value="si">SI</option>
                  <option value="no">NO</option>
                </select>
              </td>
              <td>
                <div className="actions">
                  <FontAwesomeIcon icon={faEllipsisV} className="actions-icon" onClick={toggleOptionsMenu} />
                  {showMenu && (
                    <div className="options-menu">
                      <button onClick={() => console.log('Editar')}>Editar</button>
                      <button onClick={() => console.log('Eliminar')}>Eliminar</button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="left-rectangle">
        <div className="rectangle-content">
          <button className="rectangle-button" onClick={() => console.log('Botón 1 clicado')}>
            <FontAwesomeIcon icon={faTimes} className="button-icon" />
            Inasistencias
          </button>
          <button className="rectangle-button" onClick={redirectToRegistroInasistencias}>
            <FontAwesomeIcon icon={faCheckCircle} className="button-icon" />
            Registro de inasistencias
          </button>
          <button className="rectangle-button" onClick={() => console.log('Botón 3 clicado')}>
            <FontAwesomeIcon icon={faExclamationCircle} className="button-icon" />
            Reporte estudiantes
          </button>
          <button className="rectangle-button" onClick={() => console.log('Botón 4 clicado')}>
            <FontAwesomeIcon icon={faUser} className="button-icon" />
            Perfil
          </button>
        </div>
      </div>

      <div className="top-bar">
        <div className="user-info">
          <span className="user-name">Alejandra</span>
          <FontAwesomeIcon icon={faUser} className="profile-icon" />
          <FontAwesomeIcon icon={faCaretDown} className="caret-icon" onClick={toggleLogoutMenu} />
        </div>
        {showLogout && (
          <div className="logout-menu">
            <button onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
              <span className="logout-text">Cerrar sesión</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inasistencias;

