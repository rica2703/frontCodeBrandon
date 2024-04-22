import React from 'react';
import './CorteCajaComponent.css';

function CorteCajaComponent(props) {
  return (
    <div className="corte_caja1">
      <p>Corte de cada día:</p>
      <div className="info_corte_caja1">
        {/* Espacio para información */}
        <p>{props.etiquetaTotal}</p>
      </div>
    </div>
  );
}

export default CorteCajaComponent;
