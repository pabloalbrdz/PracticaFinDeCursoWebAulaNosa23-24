import React from 'react';
import Card from 'react-bootstrap/Card';

function PanelOfertas() {
  return (
    <Card className="p-3 mb-4 mt-4 border-0 rounded">
      <Card.Body className="articleinfo p-3 rounded">
        <h2 className="text-light mb-4">Ofertas</h2>
        <div className="d-flex flex-wrap justify-content-around">
          {[...Array(4)].map((_, index) => (
            <Card key={index} style={{ width: '20%', height: '8rem' }} className="m-2 border-0 rounded">
              <Card.Body className="rounded">
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
  );
}

export default PanelOfertas;
