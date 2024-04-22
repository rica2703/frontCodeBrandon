import React from 'react';
import './InfoComponent.css';

function InfoComponent() {
  return (
    <div className="info-container1">
      <div className="info-item1">
        <p>Total de turno:</p>
        <hr />
        {/* Información de la base de datos aquí */}
      </div>
      <div className="info-item1">
        <p>Saldo al inicio del turno:</p>
        <div className="money-container">
          <span className="money-symbol">$</span>
          <div className="money-value">000</div>
        </div>
      </div>
      <div className="info-item1">
        <p>Total a entregar:</p>
        <hr />
        {/* Información de la base de datos aquí */}
      </div>
    </div>
  );
}

export default InfoComponent;
