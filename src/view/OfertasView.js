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
                {/* Aside con barra de búsqueda */}
                <aside id="aside1" className="col-2 mt-3 h-100 bg-gray">
                    <div className="bg-gray p-3 rounded">
                        <input type="text" placeholder="Buscar por nombre" className="form-control mb-2" />
                        <h5>Aptitudes</h5>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="aptitud1Checkbox" />
                            <label className="form-check-label" htmlFor="aptitud1Checkbox">
                                Aptitud 1
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="aptitud2Checkbox" />
                            <label className="form-check-label" htmlFor="aptitud2Checkbox">
                                Aptitud 2
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="aptitud3Checkbox" />
                            <label className="form-check-label" htmlFor="aptitud3Checkbox">
                                Aptitud 3
                            </label>
                        </div>
                        <button type="button" className="btn btn-primary">Enviar</button>
                    </div>
                </aside>
                <section className="col-10 mt-5">
                    {/* Aquí van los cursos y ofertas */}
                    <div className="d-flex flex-column gap-2">
                        {verOfertas}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default OfertasView;