import "./Articulo.css";

function Articulo ({titulo, descripcion, onClick}){
    const truncarTexto = (texto, longitud) => {
        // Verifica si el texto es más largo que la longitud especificada
        if (texto.length > longitud) {
          return texto.slice(0, longitud) + '...'; // Trunca el texto si es más largo
        }
        return texto; // Devuelve el texto original si es igual o más corto
      };
    return(
        <div className="articulo-div" onClick={() => onClick()}>
            <h2>{titulo}</h2>
            <p>{truncarTexto(descripcion, 150)}</p>
        </div>
    );
}

export default Articulo;