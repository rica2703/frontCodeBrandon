import React from 'react';
import Logotipo from '../../img/Logotipo.png';
import './InfoInicio.css';
const InfoInicio = () => {


  const informacion = <p>Novedadez Díaz es un negocio dedicado a la venta
  de accesorio para dama, se tiene una gran variedad de productos y siempre de la mejor calidad.
  y como nosotras siempre decimos: <br></br>
  "Una mujer hermosa siempre usa lo mejor"</p>; 

  return (
    <div className="info-container6">
      <div className="logo-container">
        <img src={Logotipo} alt="Logo de la página" className="logo-image" />
      </div>
      <div className="informacion">
        {informacion}
      </div>
    </div>
  );
}

export default InfoInicio;
