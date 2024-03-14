import React from 'react';
import './App.css';
import RegistroPagina from './view/login';
import backgroundImage from './img/backgroundImage.jpg';
import logoImage from './img/AulaNosaIcon.png';

function App() {
  return (
    <div className="App">
     
     <RegistroPagina backgroundImage={backgroundImage} logoImage={logoImage} />
    </div>
  );
}

export default App;