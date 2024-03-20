// Importa el paquete React
import React from 'react';

// Importa el archivo de estilos global de la aplicación
import './App.css';

// Importar Login
import LoginPage from "./view/Login.js";
// Importar Pantalla Principal
import PantallaPrincipal from "./view/PantallaPrincipal";
// Importar Cursos Ofertas
import CursosOfertas from './view/CursosOfertas';

import 'bootstrap/dist/css/bootstrap.min.css';


// Define el componente principal de la aplicación
function App() {
  return (
    // Contenedor principal de la aplicación con la clase "App"
    <div className="App">
      <LoginPage />
      {/* <PantallaPrincipal />
      <CursosOfertas></CursosOfertas> */}
    </div>

  );
}

export default App;