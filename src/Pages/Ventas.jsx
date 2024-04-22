import React, { useEffect, useState } from 'react';
import ActionsContainer from '../components/AccionsContainer/ActionsContainer';
import EmployeeDetails from '../components/EmployeeDetails/EmployeeDetails';
import Header from '../components/GlobalAdmi/Header';
import Navigation from '../components/GlobalAdmi/Navigation';
import InfoContainer from '../components/InfoContainer/InfoContainer';
import SearchBar from '../components/SearchBar/SearchBar';
import TableContainer from '../components/TableContainer/TableContainer';

function Ventas() {
  const [nombre, setNombre] = useState('');
  const [token, setToken] = useState('');
  const [fechaActual, setFechaActual] = useState('');
  const [horaActual, setHoraActual] = useState('');
  const [codigo,setCodigo]=useState("");
  const [productoData,setProductoData]=useState([]);
  const [piezas,setPiezas]=useState([]);
  const [copiaPz,setCopiaPz]=useState([]);
  const copiapzString = JSON.stringify(copiaPz);
const productoDataString = JSON.stringify(productoData);
const ProductosConcatenados = productoData.reduce((acumulador, pedido) => {
  return acumulador + pedido.nombre + ', ';
}, '');
  const totalCompra = productoData.reduce((total, producto, index) => {
    const cantidad = copiaPz[index];
    const precio = producto.precio;
    return total + cantidad * precio;
  }, 0);
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

    
    
  }, []);

  const handlerAgregarPorCoidgo = () => {
    fetch(`http://34.234.49.131/api/auth/productos/${codigo}`
    , {
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
          throw new Error('Error al buscar el producto');
        }
      })
      .then(producto => {
        // alert(`Producto encontrado: ${producto}`);
        setCopiaPz(prevPiezas=>[...prevPiezas,piezas]);
        setProductoData(prevProductoData => [...prevProductoData, producto]); // Agrega el nuevo producto al arreglo existente
        // Aquí puedes realizar cualquier acción adicional con el producto encontrado
      })
      .catch(error => {
        alert(`Error al buscar el producto: ${error.message}`);
        // Manejar el error si ocurre un error durante la solicitud
      });
  };
  const handlerEliminar = (indice) => {
    setProductoData(prevProductoData => {
      // Filtramos el arreglo para eliminar el elemento en el índice dado
      return prevProductoData.filter((_, i) => i !== indice);
    });
    setCopiaPz(prevPiezas=>{
      return prevPiezas.filter((_,i)=>i !==indice);
    })
  };
  const crearVenta = async () => {
    try {
      const nuevaVenta = {
       productos:ProductosConcatenados,
        fecha: new Date() ,// Puedes proporcionar la fecha de la venta aquí, o dejarla para que se genere automáticamente en el servidor
        total:totalCompra.toFixed(2),
        hora:horaActual,
        usuario:nombre,
      };
  
      const response = await fetch('http://34.234.49.131/api/auth/crearVenta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token,
          // Aquí puedes incluir otros encabezados necesarios, como el token de autenticación si lo requiere tu API
        },
        body: JSON.stringify(nuevaVenta),
      });
  
      if (response.ok) {
        const ventaCreada = await response.json();
        alert('Venta creada:', ventaCreada);
        setCopiaPz([]);
        setProductoData([]);
        // Aquí puedes manejar la respuesta de la creación de la venta, como actualizar la interfaz de usuario
      } else {
        alert("error")
        throw new Error('Error al crear la venta');
      }
    } catch (error) {
      alert('Error:', error.message);
      // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
    }
  };
  
  const eliminarVenta=()=>{
    setCopiaPz([]);
    setProductoData([]);
  }
  return (
    <div className="App">
      <Header />
      <Navigation />
      {/* <SearchBar /> */}
      <input onChange={(e)=>setCodigo(e.target.value)}  type="text" placeholder='codigo' />
      <input type="text" onChange={(e)=>setPiezas(e.target.value)} placeholder='cantidad de piezas'/>
      <button onClick={()=>handlerAgregarPorCoidgo()} className='action-button yellow'>agregar</button>
      <div className="table-and-info-container">
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Precio Venta</th>
            <th>Cantidad</th>
            <th>Quitar</th>
          </tr>
        </thead>
        {productoData.map((dato,index)=>(
        <TableContainer key={index} onClick={() => handlerEliminar(index)} codigo={dato.codigo} nombreP={dato.nombre} precio={dato.precio} cantidad={copiaPz[index]} />
      ))}
        </table>
        <p>Total: ${totalCompra.toFixed(2)}</p>
    </div>
        <InfoContainer />
      </div>
      <ActionsContainer eliminarVenta={()=>eliminarVenta()} agregarVenta={()=>crearVenta()}/>
      <EmployeeDetails nombreEmpleado={nombre} turno={horaActual} fecha={fechaActual} />
    </div>
  );
}

export default Ventas;
