import "./Articulo.css";

function Articulo ({title}){
    return(
        <div className="article-div">
            <h2>{title}</h2>
        </div>
    );
}

export default Articulo;