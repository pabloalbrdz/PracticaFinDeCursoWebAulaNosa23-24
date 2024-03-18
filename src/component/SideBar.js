import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

class SideNavBar extends Component {
  
  state = {
    expanded: true,
    showProfileInfo: false // Nuevo estado para controlar la visibilidad de la información del perfil
  };

  toggleExpanded = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
    // Agregar un retraso de 100 ms antes de mostrar la información del perfil
    setTimeout(() => {
      this.setState({ showProfileInfo: this.state.expanded });
    }, 100);
  };

  renderProfileInfo = () => {
    // Función para renderizar la información del perfil
    return (
      <div className="p-3">
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="User" className="rounded-circle mb-3" />
          <h4>Nombre Apellido</h4>
        </div>
        <hr />
        <p>Email: correo@ejemplo.com</p>
        <p>Nombre de usuario: usuario123</p>
        <p>Otro dato: dato1</p>
        <p>Otro dato: dato2</p>
        <p>Otro dato: dato3</p>
        <div className="mt-4">
          <button className="btn btn-primary btn-block">Editar</button>
          <button className="btn btn-danger btn-block mt-2">Cerrar sesión</button>
        </div>
      </div>
    );
  };

  render() {
    const { expanded, showProfileInfo } = this.state;
    // Renderiza la lista de elementos del SideNav solo si está expandido y showProfileInfo es verdadero
    const profileInfo = expanded && showProfileInfo ? this.renderProfileInfo() : null;

    return (
      <SideNav expanded={expanded} onToggle={this.toggleExpanded} className="custom-background">
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

export default SideNavBar;
