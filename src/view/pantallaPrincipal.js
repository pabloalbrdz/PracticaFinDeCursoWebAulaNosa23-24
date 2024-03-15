import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/SideBar.js';

function PantallaPrincipal() {

  return (
    <div className="d-flex vh-100">
      {/* Sidebar (aún por implementar) */}
      <div className="sidebar" style={{ width: '30%' }}>
        {/* Aquí va el contenido del sidebar */}
        <Sidebar />
      </div>
      
      {/* Contenedor de ofertas y cursos */}
      <div className="d-flex flex-column flex-grow-1">
        <Card className="p-3 mb-3">
          <Card.Body className="bg-secondary p-3">
            <h2 className="text-light mb-4">Ofertas</h2>
            <div className="d-flex flex-wrap justify-content-around">
              {[...Array(8)].map((_, index) => (
                <Card key={index} style={{ width: '20%', height: '8rem' }} className="m-2">
                  <Card.Body>
                    <Card.Title>Título</Card.Title>
                    <Card.Text>
                      Descripción
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Card.Body>
        </Card>
        
        <Card className="p-3">
          <Card.Body className="bg-secondary p-3">
            <h2 className="text-light mb-4">Cursos</h2>
            <div className="d-flex flex-wrap justify-content-around">
              {[...Array(8)].map((_, index) => (
                <Card key={index} style={{ width: '20%', height: '8rem' }} className="m-2">
                  <Card.Body>
                    <Card.Title>Título</Card.Title>
                    <Card.Text>
                      Descripción
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default PantallaPrincipal;
