// Importa el paquete React
import React from 'react';

// Importa el archivo de estilos global de la aplicación
import './App.css';

// Importa el componente LoginPage desde la ruta especificada
import LoginPage from "./view/Login.js";

// Define el componente principal de la aplicación
function App() {
  return (
    // Contenedor principal de la aplicación con la clase "App"
    <div className="App">
      
      {/* Renderiza el componente LoginPage */}
      <LoginPage />
    </div>
  );
}

// Exporta el componente principal de la aplicación
export default App;