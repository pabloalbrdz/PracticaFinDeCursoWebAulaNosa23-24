// Importa el paquete React
import React from 'react';

// Importa el CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa el CSS personalizado para el componente Login
import './Login.css';

// Importa las imágenes necesarias
import backgroundImage from './img/backgroundImage.jpg'; // Imagen de fondo
import logoImage from './img/AulaNosaIcon.png'; // Imagen del logo

// Define el componente LoginPage
function LoginPage() {
  return (
    // Contenedor principal con la clase "container" de Bootstrap
    <div className="container">
      {/* Fila de Bootstrap */}
      <div className="row">
        {/* Columna de tamaño medio para la imagen de fondo */}
        <div className="col-md-6">
          {/* Contenedor para la imagen de fondo */}
          <div className="expansive">
            {/* Imagen de fondo */}
            <img src={backgroundImage} className="img-fluid rounded" alt="Foto difuminada" />
          </div>
        </div>
        {/* Columna de tamaño medio para el contenido de inicio de sesión */}
        <div className="col-md-6">
          {/* Contenedor del logo */}
          <div className="centered-logo">
            {/* Imagen del logo */}
            <img src={logoImage} className="img-fluid rounded" alt="Logo" />
          </div>
          {/* Formulario de inicio de sesión */}
          <form>
            {/* Grupo de campos del formulario */}
            <div className="form-group">
              {/* Campo para ingresar el nombre de usuario */}
              <input type="text" className="form-control" id="usuario" placeholder="Ingrese su usuario" required />
              {/* Campo para ingresar la contraseña */}
              <input type="password" className="form-control" id="contrasena" placeholder="Ingrese su contraseña" required />
            </div>
            {/* Botón de inicio de sesión */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Exporta el componente LoginPage
export default LoginPage;