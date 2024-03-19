// import React, { Component } from 'react';
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
// import "@trendmicro/react-sidenav/dist/react-sidenav.css";
// class BarraLateral extends Component {
//   state = {
//     expanded: false, //por defecto la barra lateral está sin desplegar
//     showProfileInfo: false // nuevo estado para controlar la visibilidad de la información del perfil
//   };
//   toggleExpanded = () => {
//     this.setState(prevState => ({ expanded: !prevState.expanded }));
//     // Se agrega un retraso de 300 ms antes de mostrar la información del perfil
//     setTimeout(() => {
//       this.setState({ showProfileInfo: this.state.expanded });
//     }, 100);
//   };
//   renderProfileInfo = () => {
//     // Función para renderizar la información del perfil
//     return (
//       <div>
//         <div className="text-center">
//           <img src="https://via.placeholder.com/150" alt="User" className="rounded-circle mb-3" />
//           <h4>Nombre Apellido</h4>
//         </div>
//         <hr />
//         <p>Email: correo@ejemplo.com</p>
//         <p>Nombre de usuario: usuario123</p>
//         <p>Otro dato: dato1</p>
//         <p>Otro dato: dato2</p>
//         <div className="">
//           <button className="btn btn-primary btn-block">Editar</button> 
//           <hr/>       
//           <button className="btn btn-danger btn-block mb-2">Cerrar sesión</button>
//         </div>
//       </div>
//     );
//   };
//   render() {
//     const { expanded, showProfileInfo } = this.state;
//     // Renderiza la lista de elementos del SideNav solo si está expandido
//     const profileInfo = showProfileInfo ? this.renderProfileInfo() : null;
//     return (
//       <SideNav expanded={expanded} onToggle={this.toggleExpanded} className="custom-background mt-navbar">
//         <Toggle />
//         <Nav>
//           <NavItem eventKey="perfil">
//             <NavIcon>
//               <i className="fa fa-fw fa-user" style={{ fontSize: "1.75em" }} />
//             </NavIcon>
//             <NavText>Perfil</NavText>
//             {profileInfo}
//           </NavItem>
//         </Nav>
//       </SideNav>
//     );
//   }
// }
// export default BarraLateral;

//--------------------Método collapse----------



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
// export const BarraLateral = () => {
//   return (
//     <div>
//         <p>
//   <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
//     Toggle width collapse
//   </button>
// </p>
// <div style={{ minHeight: '120px' }}>
//   <div className="collapse collapse-horizontal" id="collapseWidthExample">
//     <div className="card card-body" style={{ width: '300px' }}>
//       This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }



// export default BarraLateral;

//=============================================
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "./BarraLateral.css"
export const BarraLateral = () => {
  const renderProfileInfo = () => {
    return (
      <div className='desplegable'>
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
