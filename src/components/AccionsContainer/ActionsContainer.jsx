import React from 'react';
import './ActionsContainer.css';

function ActionsContainer(props) {
  return (
    <div className="actions-container">
      <button onClick={props.agregarVenta} className="action-button green">Agregar</button>
      <button onClick={props.eliminarVenta} className="action-button red">Cancelar</button>
      {/* <button className="action-button green">Realizar</button> */}
    </div>
  );
}

export default ActionsContainer;
