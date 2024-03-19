// Importa el paquete React
import React, { useState } from "react";

// Importa el CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importa el CSS personalizado para el componente Login
import "./Login.css";

// Importa las imágenes necesarias
import backgroundImage from "../assets/img/BackgroundImage.jpg"; // Imagen de fondo
import logoImage from "../assets/img/AulaNosaLogoLogin.png"; // Imagen del logo

// Importar Componente Estado Login
import LoginAlerta from "../component/LoginAlerta";
import { UsuarioController } from "../controller/UsuarioController";

// Define el componente LoginPage
function LoginPage() {
  // Componente dinamico que representa el estado del login
  const [alertaLogin, setAlertaLogin] = useState(
    <LoginAlerta visible={"login-alerta-oculto"}></LoginAlerta>
  );
  // Funcion de click del boton
  async function clickBotonEnviarDatos(e) {
    // Cancelar estado normal del boton de envio para redirigirlo a nuestro controlador
    e.preventDefault();
    // Llamar al controlador
    await UsuarioController.loginUsuarioModel(
      document.getElementById("email").value,
      document.getElementById("contrasena").value,
      setAlertaLogin
    );
  }

  return (
    <div className="loginbody">
      {/* // Contenedor principal con la clase "container" de Bootstrap */}
      <div className="container containerlogin">
        {/* Fila de Bootstrap */}
        <div className="row">
          {/* Columna de tamaño medio para la imagen de fondo */}
          <div className="col-md-6">
            {/* Contenedor para la imagen de fondo */}
            <div className="expansive d-none d-md-block">
              {/* Imagen de fondo */}
              <img
                src={backgroundImage}
                className="img-fluid rounded"
                alt="Foto difuminada"
              />
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
            <form className="d-flex flex-column">
              {/* Mostrar estado alerta login */}
              {alertaLogin}
              {/* Grupo de campos del formulario */}
              <div className="form-group">
                {/* Campo para ingresar el nombre de usuario */}
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Ingrese su email"
                  required
                />
                {/* Campo para ingresar la contraseña */}
                <input
                  type="password"
                  className="form-control"
                  id="contrasena"
                  placeholder="Ingrese su contraseña"
                  required
                />
              </div>
              {/* Botón de inicio de sesión */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary-login"
                  onClick={clickBotonEnviarDatos}
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporta el componente LoginPage
export default LoginPage;
