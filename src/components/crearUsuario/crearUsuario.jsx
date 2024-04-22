import React from 'react';
import Header from '../GlobalAdmi/Header';
import Navigation from '../GlobalAdmi/Navigation';
import { useState } from 'react';
function CrearUsuario() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userData = {
                username: username,
                password: password,
                email: email
            };

            const response = await fetch('http://34.234.49.131/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                const responseData = await response.json();
                alert('Usuario creado:', responseData);
                setUsername("");
                setEmail("")
                setPassword("")
                // Aquí puedes manejar la respuesta del servidor, como redirigir al usuario a otra página
            } else {
                alert("Error al crear el usuario")
                throw new Error('Error al crear el usuario');
            }
        } catch (error) {
            alert("Error al crear el usuario")
            console.error('Error:', error.message);
            // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
        }
    };

    return (
        <>
            <Header />
            <Navigation />
            {/* <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Crear Usuario</button>
    </form> */}
            <div className="inicio-sesion-container">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="campo">
                        <label htmlFor="usuario">Usuario:</label>
                        <input
                            type="text"
                            // id="usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="contrasena">Contraseña:</label>
                        <input
                            type="password"
                            // id="contrasena"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="contrasena">Email:</label>
                        <input
                            type="text"
                            // id="contrasena"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>


                    <button className='buttons' type="submit">Crear cuenta</button>
                </form>
            </div>
        </>
    );
};

export default CrearUsuario;