import Articulo from "../component/Articulo";
import "./CursosOfertas.css";
import Header from "../component/Header";
import Footer from "../component/Footer";

function OfertasView(){
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
                        
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </div>
    );
}

export default OfertasView;