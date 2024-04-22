import React from 'react';
import basura from '../../img/basura.png';
import './TableContainer.css';

function TableContainer(props) {
  return (
    
        <tbody>
          <tr>
            <td>{props.codigo}</td>
            <td>{props.nombreP}</td>
            <td>{props.precio}</td>
            <td>{props.cantidad}</td>
            <td className="delete-icon-container">
              <button className="delete-button">
                <img src={basura} alt="" onClick={props.onClick} className="icon delete-icon" />
              </button>
            </td>
          </tr>
        </tbody>
     
  );
}

export default TableContainer;
