import React from 'react';
import './TableComponent.css';

function TableComponent(props) {
  return (
    
      <tbody>
        <tr>
          <td>{props.codigo}</td>
          <td>{props.nombre}</td>
          <td>{props.fecha}</td>
          <td>{props.hora}</td>
          <td>{props.usuario}</td>
          <td>{props.total}</td>
        </tr>
       
      </tbody>
   
  );
}

export default TableComponent;

