import Container from 'react-bootstrap/Container';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AulaNosaLogo from '../assets/img/AulaNosaLogo.png';
import {NavLink} from 'react-router-dom';
//que el nombre de la función sea el mismo nombre que el archivo.js
function Header() {
  return (
        // Contenedor del Navbar
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          {/* //logo AulaNosa */}
          <img
            src={AulaNosaLogo} 
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="Aula Nosa Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink className="menuNav" to="/"> Inicio</NavLink>
            <NavLink className="menuNav" to="/ofertas"> Ofertas</NavLink>
            <NavLink className="menuNav" to="/cursos"> Cursos</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;