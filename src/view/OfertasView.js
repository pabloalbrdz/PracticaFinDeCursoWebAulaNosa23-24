import Articulo from "../component/Articulo";
import "./CursosOfertas.css";
import { OfertasController } from "../controller/OfertasController";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useEffect, useState } from "react";


function OfertasView(){
    let [verOfertas, setVerOfertas] = useState([]);
    async function getOfertas(){
        let arrayOfertas = await OfertasController.obtenerTodasOfertas();
        let arrayPopUpsOfertas = new Array();
        for (let oferta of arrayOfertas){
            arrayPopUpsOfertas.push(<Articulo titulo={oferta.titulo} descripcion={oferta.descripcion} estado={oferta.estado} fecha={oferta.fecha} vacantes={oferta.vacantes}></Articulo>);
        }
        setVerOfertas(arrayPopUpsOfertas);
    }
    useEffect(
        function(){
            getOfertas();
        }
    )
    return(
        <div id="cursosofertaspantalla" className="row vw-100">
            <main id="cursosofertaspantallaMain" className="col-12 d-flex flex-row mt-1">
                {/* Aqui va el aside que se hara en otra tarea */}
                <aside id="aside1" className="col-2 mt-3 h-100">
                    Aside Barra Busqueda
                </aside>
                <section className="col-10 mt-5">
                    {/* Aqui van los cursos y ofertas */}
                    <div className="d-flex flex-column gap-2">
                        {verOfertas}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default OfertasView;