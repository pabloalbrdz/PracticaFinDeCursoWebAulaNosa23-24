import {React, useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import { OfertasController } from '../controller/OfertasController';

function PanelOfertas() {
  let [arrayVista, setArrayVista] = useState([]);
  async function crearCartas(){
    let arrayOfertas = await OfertasController.obtenerUltimasOfertas();
    let arrayCartas = new Array();
    for (let oferta of arrayOfertas){
      arrayCartas.push(
        <Card style={{ width: '400px', height: '8rem' }}>
          <Card.Body>
            <Card.Title>{oferta.titulo}</Card.Title>
            <Card.Text>{oferta.descripcion}</Card.Text>
          </Card.Body>
        </Card>
      )
    }
    setArrayVista(arrayCartas);
  }
  useEffect(
    function(){
      crearCartas();
    }, 
    []
  );
  return (
    <Card className="p-3 mb-4 mt-4 border-0 rounded">
      <Card.Body className="bg-secondary p-3 rounded">
        <h2 className="text-light mb-4">Ofertas</h2>
        <div className="d-flex flex-wrap justify-content-around">
        {arrayVista}
        </div>
      </Card.Body>
    </Card>
  );
}

export default PanelOfertas;
