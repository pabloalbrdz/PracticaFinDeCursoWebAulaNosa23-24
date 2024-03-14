import Articulo from "../component/Articulo";
import "./CursosOfertas.css";
import Header from "../component/Header";
import Footer from "../component/Footer";

function CursosOfertas(){

    let array = new Array();
    for (let i=1; i<=6; i++){
        array.push(<Articulo title={i}></Articulo>);
    }

    let ofertascursos = new Array();
    for (let i=1; i<=40; i++){
        ofertascursos.push(<Articulo title={i}></Articulo>);
    }
    
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
            <Header></Header>
            <main id="cursosofertaspantallaMain" className="col-12 d-flex flex-row mt-1">
                <aside id="aside1" className="col-2 mt-3 h-100">
                    Aside Barra Busqueda
                </aside>
                <section className="col-10 mt-5">
                    <div className="d-flex flex-column gap-2">
                        {array}
                    </div>
                    <div id="paginacionCursosOfertas" className="mt-3">
                        {pags}
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default CursosOfertas;