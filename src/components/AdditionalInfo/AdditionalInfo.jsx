import React from 'react';
import './AdditionalInfo.css';

function AdditionalInfo() {
  return (
    <div className="additional-info-container">
      <div className="additional-info left">
        <p>Corte No.</p>
        <p id="corte-number"></p> {/* Espacio para el número de corte */}
      </div>
      <div className="additional-info right">
        <p>Fecha</p>
        <p id="fecha"></p> {/* Espacio para la fecha */}
      </div>
    </div>
  );
}

export default AdditionalInfo;
