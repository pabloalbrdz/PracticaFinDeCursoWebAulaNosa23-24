import {React, useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import { FormacionesController } from '../controller/FormacionesController';

function PanelCursos() {
  let [arrayVista, setArrayVista] = useState([]);
  async function crearCartas(){
    let arrayCursos = await FormacionesController.verUltimasFormaciones();
    let arrayCartas = new Array();
    for (let curso of arrayCursos){
      arrayCartas.push(
        <Card>
          <Card.Body>
            <Card.Title>{curso.titulo}</Card.Title>
            <Card.Text>{curso.descripcion}</Card.Text>
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
    <Card className="p-3 border-0 rounded">
      <Card.Body className="bg-secondary p-3 rounded">
        <h2 className="text-light mb-4">Cursos</h2>
        <div className="d-flex flex-wrap justify-content-around">
          {arrayVista}
        </div>
      </Card.Body>
    </Card>
  );
}

export default PanelCursos;
