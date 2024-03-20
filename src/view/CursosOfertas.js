import Articulo from "../component/Articulo";
import "./CursosOfertas.css";
import Header from "../component/Header";
import Footer from "../component/Footer";

function CursosOfertas(){

    // Array de ejemplo para ver como quedarian las ofertas
    let array = new Array();
    for (let i=1; i<=6; i++){
        array.push(<Articulo title={i}></Articulo>);
    }

    // Ejeplo de recuperar un array con todas las ofertas y cursos
    let ofertascursos = new Array();
    for (let i=1; i<=150; i++){
        ofertascursos.push(<Articulo title={i}></Articulo>);
    }
    
    // Paginacion (no tiene funcionalidad, eso es otra tarea)
    let pagina = 0;
    let inicio = 0;
    let final = 0;
    let pags = new Array();
    while(final < ofertascursos.length){
        inicio = (pagina * 6) + 1;
        final = Math.min((pagina + 1) * 6,ofertascursos.length);
        pags.push(<p>{pagina + 1}</p>)
        pagina++;
    }

    return(
        <div id="cursosofertaspantalla" className="row vw-100">
            {/* Header */}
            <Header></Header>
            <main id="cursosofertaspantallaMain" className="col-12 d-flex flex-row mt-1">
                {/* Aqui va el aside que se hara en otra tarea */}
                <aside id="aside1" className="col-2 mt-3 h-100">
                    Aside Barra Busqueda
                </aside>
                <section className="col-10 mt-5">
                    {/* Aqui van los cursos y ofertas */}
                    <div className="d-flex flex-column gap-2">
                        {array}
                    </div>
                </section>
            </main>
            {/* Paginacion */}
            <div id="paginacionCursosOfertas" className="mb-2">
                {pags}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default CursosOfertas;