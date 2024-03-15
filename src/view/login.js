import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import backgroundImage from './img/backgroundImage.jpg';
import logoImage from './img/AulaNosaIcon.png';

function LoginPage() {
  return (
   
        

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
  );
}

export default LoginPage;