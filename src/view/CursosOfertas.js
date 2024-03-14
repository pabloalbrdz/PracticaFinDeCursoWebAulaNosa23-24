import Article from "../component/Article";
import "./CursosOfertas.css";
import Header from "../component/Header";

function CursosOfertas(){

    let array = new Array();
    for (let i=1; i<=6; i++){
        array.push(<Article title={i}></Article>);
    }

    let ofertascursos = new Array();
    for (let i=1; i<=40; i++){
        ofertascursos.push(<Article title={i}></Article>);
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
        <div id="cursosofertaspantalla" className="row">
            <header className="col-12">
                <Header></Header>
            </header>
            <main className="col-12 d-flex flex-row mt-1">
                <aside className="col-2">
                    Aside Barra Busqueda
                </aside>
                <section className="col-10">
                    <div className="d-flex flex-column gap-2">
                        {array}
                    </div>
                    <div id="paginacionCursosOfertas">
                        {pags}
                    </div>
                </section>

            </main>
            <footer></footer>
        </div>
    );
}

export default CursosOfertas;