import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "./BarraLateral.css"
import IconoUsuario from '../assets/img/person.svg';
import IconoTel from '../assets/img/telephone-forward.svg';
import IconoEmail from '../assets/img/envelope.svg';
import IconoEstado from '../assets/img/bookmark-star.svg';
import { AESEncriptado } from '../settings/encrypmethods';
import { UsuarioController } from '../controller/UsuarioController';

export const BarraLateral = () => {
  const renderProfileInfo = () => {
    // Datos del perfil de usuario a la hora de ser desplegado 
    let nombre = AESEncriptado.desencriptador(JSON.parse(sessionStorage.getItem("usuario")).nombre);
    let apellidos = AESEncriptado.desencriptador(JSON.parse(sessionStorage.getItem("usuario")).apellidos);
    let usuario = AESEncriptado.desencriptador(JSON.parse(sessionStorage.getItem("usuario")).usuario);
    let email = AESEncriptado.desencriptador(JSON.parse(sessionStorage.getItem("usuario")).email);
    let telefono = AESEncriptado.desencriptador(JSON.parse(sessionStorage.getItem("usuario")).telefono);
    let estado = JSON.parse(sessionStorage.getItem("usuario")).estado;
    return (
      <div className='cuadro'>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="User" className="rounded-circle mb-3" />
          <h4>{`${nombre} ${apellidos}`}</h4>
        </div>
        <div className='mt-4 d-flex flex-column gap-4'>
        <p>
        <img
            src={IconoUsuario} 
            width="20"
            height="20"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          {usuario}
        </p>

        <p>
        <img
            src={IconoEmail} 
            width="20"
            height="20"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          {email}
        </p>

        <p>
        <img
            src={IconoTel} 
            width="20"
            height="20"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          {telefono}
        </p>

        <p>
        <img 
            src={IconoEstado} 
            width="20"
            height="20"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          {estado}
        </p>

          {/* boton de editar  */}
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Editar
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">EDITAR PERFIL</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              {/* //Body del modal  */}              
              <div className="modal-body">
                <div className="md-form mb-5">
                  <label htmlFor="usuario" className="form-label">Nombre</label>
                  <i class="fas fa-envelope prefix grey-text"></i>
                  <input type="text" className="form-control mt-2" id="usuario" placeholder=""/>
                </div>

                <div className="md-form mb-5">
                  <label htmlFor="usuario" className="form-label">Apellido</label>
                  <input type="text" className="form-control mt-2" id="usuario" placeholder="" />
                </div>

                <div className="md-form mb-5">
                  <label htmlFor="usuario" className="form-label">Teléfono</label>
                  <input type="text" className="form-control mt-2" id="usuario" placeholder="+34" />
                </div>

                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Email</label>
                  <input type="email" className="form-control mt-2" id="correo" placeholder="" />
                </div>

                <div className="md-form mb-5">
                  <label htmlFor="usuario" className="form-label">Contraseña</label>
                  <input type="text" className="form-control mt-2" id="usuario" placeholder="" />
                </div>

                <div className="md-form mb-5">
                  <label htmlFor="usuario" className="form-label">Repetir contraseña</label>
                  <input type="text" className="form-control mt-2" id="usuario" placeholder="" />
                </div>

                <div className="mb-3">
                  <label htmlFor="estadoLaboral" className="form-label">Estado Laboral</label>
                  <select className="form-select" id="estadoLaboral">
                    <option value="ejemplo1">Empleado</option>
                    <option value="ejemplo3">Desempleado</option>
                  </select>
                </div>
                <div className="mb-3">
                <label htmlFor="aptitudes" className="form-label">Aptitudes</label>
                <select className="form-select" multiple aria-label='Multiple select example' id="aptitudes">
                  <option value="ejemplo1">Javascript</option>
                  <option value="ejemplo2">React</option>
                  <option value="ejemplo3">PHP</option>
                  <option value="ejemplo3">Java</option>
                  <option value="ejemplo3">Angular</option>
                  <option value="ejemplo3">C++</option>
                  <option value="ejemplo3">C#</option>


                </select>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary">Guardar</button>
              </div>
            </div>
          </div>
        </div>
          <button className="btn btn-danger btn-block mb-2" onClick={() => UsuarioController.cerrarSesionUsuario()}>Cerrar sesión</button>
        </div>
      </div>
    );
  };
  // Botón que permite desplegar 
  return (
    <div>
      <p>
        <button className="btn btn-primary mt-1 colorbuttontoggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
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
