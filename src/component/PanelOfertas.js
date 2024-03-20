import {React, useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import { OfertasController } from '../controller/OfertasController';

function PanelOfertas() {
  const truncarTexto = (texto, longitud) => {
    // Verifica si el texto es más largo que la longitud especificada
    if (texto.length > longitud) {
      return texto.slice(0, longitud) + '...'; // Trunca el texto si es más largo
    }
    return texto; // Devuelve el texto original si es igual o más corto
  };
  let [arrayVista, setArrayVista] = useState([]);
  async function crearCartas(){
    let arrayOfertas = await OfertasController.obtenerUltimasOfertas();
    let arrayCartas = new Array();
    for (let oferta of arrayOfertas){
      arrayCartas.push(
        <Card className='mb-4' style={{ width: '400px', height: '8rem' }}>
          <Card.Body>
            <Card.Title>{truncarTexto(oferta.titulo, 100)}</Card.Title>
            <Card.Text>{truncarTexto(oferta.descripcion, 100)}</Card.Text>
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
      <Card.Body className="articleinfo p-3 rounded">
        <h2 className="text-light mb-4">Ofertas</h2>
        <div className="d-flex flex-wrap justify-content-around">
        {arrayVista}
        </div>
      </Card.Body>
    </Card>
  );
}

export default PanelOfertas;