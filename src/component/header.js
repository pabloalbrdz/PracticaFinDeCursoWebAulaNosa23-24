import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AulaNosaLogo from '../assets/img/logo.png';
import Button from 'react-bootstrap/Button';
//que el nombre de la función sea el mismo nombre que el archivo.js
function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={AulaNosaLogo} 
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Button variant="light" className="rounded-pill text-dark me-4">Cursos</Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="light" className="rounded-pill text-dark">Ofertas</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
