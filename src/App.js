// Importa el paquete React
import React from 'react';

// Importa el archivo de estilos global de la aplicación
import './App.css';
// Importar Cursos Ofertas
import CursosOfertas from './view/CursosOfertas';
// Importa el componente LoginPage desde la ruta especificada
import LoginPage from "./view/Login.js";

import 'bootstrap/dist/css/bootstrap.min.css';


// Define el componente principal de la aplicación
function App() {
  return (
    // Contenedor principal de la aplicación con la clase "App"
    <div className="App">
      <LoginPage />
    </div>
  );
}

// Exporta el componente principal de la aplicación
export default App;