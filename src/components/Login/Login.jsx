import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://34.234.49.131/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: usuario, password: contrasena })
      });

      if (response.ok) {
        const data = await response.json();
        const { accessToken,username } = data;
        // Guardar el token en localStorage
        localStorage.setItem('token', accessToken);
        localStorage.setItem('username',username);
        alert('Inicio de sesión exitoso');
        navigate("/inicio");
      } else {
        alert('Error al iniciar sesión:');
      }
    } catch (error) {
      alert('Error al enviar la solicitud:');
    }
  };

  return (
    <div className="inicio-sesion-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <button className='buttons' type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
