import React from 'react';
import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo';
import CorteCajaComponent from '../components/CorteCajaComponent/CorteCajaComponent';
import EmployeeDetails from '../components/EmployeeDetails/EmployeeDetails';
import Header from '../components/GlobalAdmi/Header';
import Navigation from '../components/GlobalAdmi/Navigation';
import InfoComponent from '../components/InfoComponent/InfoComponent';
import TableComponent from '../components/TableComponent/TableComponent';
import { useState } from 'react';
import { useEffect } from 'react';
function CorteCaja() {
  const [nombre, setNombre] = useState('');
  const [token, setToken] = useState('');
  const [fechaActual, setFechaActual] = useState('');
  const [horaActual, setHoraActual] = useState('');
  const [ventas, setVentas] = useState([]);
  const [totalVentas, setTotalVentas] = useState(0);
  useEffect(() => {
    const now = new Date();
    const fechaActualFormateada = now.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const horaActualFormateada = now.toLocaleTimeString();

    setFechaActual(fechaActualFormateada);
    setHoraActual(horaActualFormateada);
    setNombre(localStorage.getItem('username'));
    setToken(localStorage.getItem('token'));

    // Realizar solicitud GET para obtener todas las ventas
    fetch('http://34.234.49.131/api/auth/verVentas', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token, // Aquí se agrega el token al encabezado Authorization
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al obtener las ventas');
        }
      })
      .then(data => {
        setVentas(data);
        const total = data.reduce((accumulator, venta) => accumulator + venta.total, 0);
        setTotalVentas(total);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <AdditionalInfo></AdditionalInfo>
      <table className="tabla">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Usuario</th>
            <th>Total</th>
          </tr>
        </thead>
        {ventas.map((venta, index) => (
          <TableComponent
            key={index}
            codigo={venta._id}
            nombre={venta.productos}
            fecha={venta.fecha}
            hora={venta.hora}
            usuario={venta.usuario}
            total={venta.total}
          />
        ))}
      </table>
      {/* <InfoComponent></InfoComponent> */}
      <CorteCajaComponent etiquetaTotal={totalVentas.toFixed(2)}></CorteCajaComponent>
      <EmployeeDetails nombreEmpleado={nombre} turno={horaActual} fecha={fechaActual} />

    </div>
  );
}

export default CorteCaja;

