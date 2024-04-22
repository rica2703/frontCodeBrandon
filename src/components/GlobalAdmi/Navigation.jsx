import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul className="menu">
        <li><a href="/inicio">Inicio</a></li>
        <li><a href="/ventas">Ventas</a></li>
        <li><a href="/corteTotal">Corte T</a></li>
        <li><a href="/corteCaja">Corte C</a></li>
        <li><a href="/crearusuario">Crear usuario</a></li>

      </ul>
    </nav>
  );
}

export default Navigation;
