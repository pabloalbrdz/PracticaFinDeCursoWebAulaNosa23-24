import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "./BarraLateral.css"
export const BarraLateral = () => {
  const renderProfileInfo = () => {
    // Datos del perfil de usuario a la hora de ser desplegado 
    return (
      <div className='cuadro'>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="User" className="rounded-circle mb-3" />
          <h4>Nombre Apellido</h4>
        </div>
        <div className='mt-4 d-flex flex-column gap-4'>
        <p>Email: correo@ejemplo.com</p>
        <p>Nombre de usuario: usuario123</p>
        <p>Otro dato: dato1</p>
        <p>Otro dato: dato2</p>
          <button className="btn btn-primary btn-block">Editar</button> 
          <button className="btn btn-danger btn-block mb-2">Cerrar sesión</button>
        </div>
      </div>
    );
  };
  // Botón que permite desplegar 
  return (
    <div>
      <p>
        <button className="btn btn-primary mt-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-border-width" viewBox="0 0 16 16">
  <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/>
</svg>
        </button>
      </p>
      <div style={{ minHeight: '120px' }}>
        <div className="collapse collapse-horizontal" id="collapseWidthExample">
          <div className="card card-body" style={{ width: '300px' }}>
            {renderProfileInfo()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarraLateral;
