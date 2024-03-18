import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
class BarraLateral extends Component {
  state = {
    expanded: true,
    showProfileInfo: false // Nuevo estado para controlar la visibilidad de la información del perfil
  };
  toggleExpanded = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
    // Agregar un retraso de 300 ms antes de mostrar la información del perfil
    setTimeout(() => {
      this.setState({ showProfileInfo: this.state.expanded });
    }, 100);
  };
  renderProfileInfo = () => {
    // Función para renderizar la información del perfil
    return (
      <div>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="User" className="rounded-circle mb-3" />
          <h4>Nombre Apellido</h4>
        </div>
        <hr />
        <p>Email: correo@ejemplo.com</p>
        <p>Nombre de usuario: usuario123</p>
        <p>Otro dato: dato1</p>
        <p>Otro dato: dato2</p>
        <div className="">
          <button className="btn btn-primary btn-block">Editar</button> 
          <hr/>       
          <button className="btn btn-danger btn-block mb-2">Cerrar sesión</button>
        </div>
      </div>
    );
  };
  render() {
    const { expanded, showProfileInfo } = this.state;
    // Renderiza la lista de elementos del SideNav solo si está expandido
    const profileInfo = showProfileInfo ? this.renderProfileInfo() : null;
    return (
      <SideNav expanded={expanded} onToggle={this.toggleExpanded} className="custom-background mt-navbar">
        <Toggle />
        <Nav>
          <NavItem eventKey="perfil">
            <NavIcon>
              <i className="fa fa-fw fa-user" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Perfil</NavText>
            {profileInfo}
          </NavItem>
        </Nav>
      </SideNav>
    );
  }
}
export default BarraLateral;