import React from 'react';
import './login.css';
import backgroundImage from './img/backgroundImage.jpg';
import logoImage from './img/AulaNosaIcon.png';

function LoginPage() {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Página de Registro</title>
        {/* Bootstrap CSS */}
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      </head>
      <body>
        

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="expansive">
                <img src={backgroundImage} className="img-fluid rounded" alt="Foto difuminada" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="centered-logo">
                <img src={logoImage} className="img-fluid rounded" alt="Logo" />
              </div>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="usuario" placeholder="Ingrese su usuario" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="contrasena" placeholder="Ingrese su contraseña" />
                </div>
                {/* Botón centrado */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
        

        {/* Bootstrap JS */}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
}

export default LoginPage;