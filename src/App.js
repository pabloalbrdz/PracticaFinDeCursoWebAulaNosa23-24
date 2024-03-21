// Importa el paquete React
import React from 'react';

// Importa el archivo de estilos global de la aplicación
import './App.css';

// Importar Login
import LoginPage from "./view/Login.js";
// Importar Pantalla Principal
import PantallaPrincipal from "./view/PantallaPrincipal";
// Importar Cursos y Ofertas
import CursosView from "./view/CursosView.js";
import OfertasView from "./view/OfertasView.js";

import 'bootstrap/dist/css/bootstrap.min.css';


// Define el componente principal de la aplicación
function App() {
  // // Si el sesion iniciada es correcta abre PantallaPrincipal y si no abre LoginPage
  if(sessionStorage.getItem("usuario") != undefined){
    return (
    <PantallaPrincipal/>
    )
  }else{
    return (
      <LoginPage/>
      )
  }
}

export default App;