import "./Articulo.css";

function Articulo ({titulo}){
    return(
        <div className="articulo-div">
            <h2>{titulo}</h2>
        </div>
    );
}

export default Articulo;