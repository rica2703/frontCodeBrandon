import React from 'react';
import Ventas from './Pages/Ventas';
import Inicio from './Pages/Inicio';
import CorteCaja from './Pages/CorteCaja';
import CorteTotal from './Pages/CorteTotal';
import InicioSesion from './Pages/InicioSesion';
import CrearUsuario from './components/crearUsuario/crearUsuario';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InicioSesion />,
  },
  {
    path:"/crearusuario",
    element:<CrearUsuario/>
  },
{
  path:"/corteTotal",
  element:<CorteTotal/>,
},
{
  path:"/corteCaja",
  element:<CorteCaja/>,
},
{
  path:"/inicio",
  element:<Inicio/>,
},
{
  path:"/ventas",
  element:<Ventas/>,
}
]);

function App() {
  return (
    <div className="">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
