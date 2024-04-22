import React from 'react';
import './EmployeeDetails.css'

function EmployeeDetails(props) {
  return (
    <div className="employee-details clear-float"> {/* Agrega la clase clear-float */}
      <div className="detail">
        <p>Nombre del empleado</p>
        <input readOnly type="text" placeholder={props.nombreEmpleado} />
        <hr />
      </div>
      <div className="detail">
        <p>Hora</p>
        <input readOnly type="text" placeholder={props.turno} />
        <hr />
      </div>
      <div className="detail">
        <p>Fecha</p>
        <input readOnly type="text" placeholder={props.fecha} />
        <hr />
      </div>
    </div>
  );
}

export default EmployeeDetails;
