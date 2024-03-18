import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import aulanosaLogo from '../img/logo2.png';
import Button from 'react-bootstrap/Button';
function mostrarHeader() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={aulanosaLogo}
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
              <Button variant="light" className="rounded-pill text-dark me-4">Home</Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="light" className="rounded-pill text-dark">Link</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default mostrarHeader;
