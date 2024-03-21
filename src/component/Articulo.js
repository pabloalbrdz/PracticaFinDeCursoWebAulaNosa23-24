import "./Articulo.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { format } from "date-fns";

function Articulo({ titulo, descripcion, estado, fecha, vacantes}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const truncarTexto = (texto, longitud) => {
    // Verifica si el texto es más largo que la longitud especificada
    if (texto.length > longitud) {
      return texto.slice(0, longitud) + '...'; // Trunca el texto si es más largo
    }
    return texto; // Devuelve el texto original si es igual o más corto
  };
  // pasar texto de mayusculas a una mayuscula y el resto  minusculua
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  return (
    <div>
      <div className="articulo-div" onClick={() => setShow(true)}>
        <h2>{titulo}</h2>
        <p>{truncarTexto(descripcion, 200)}</p>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Descripcion: {descripcion}</p>
          {/* <p>Estado: {capitalizeFirstLetter(estado)}</p>
          <p>Vacantes: {vacantes}</p>
          <p>Fecha: {format(fecha, "MMMM do, yyyy H:mma")}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary">
            Inscribirse
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Articulo;