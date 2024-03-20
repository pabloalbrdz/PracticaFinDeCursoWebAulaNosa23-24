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
        <p>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
          </svg>
          </span>
          Nombre de usuario: pacogalaxia</p>
        <p>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
        </svg>
          </span>
          Teléfono: 66621488
          </p>
        
          <p>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
          <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
          </svg>
          </span>
          Estado: Desempleado</p>

          {/* Modal para editar el perfil del usuario  */}
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

        {/* Botón de cerrar sesión  */}
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
