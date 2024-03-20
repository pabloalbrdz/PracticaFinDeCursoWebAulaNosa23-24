import React, { useEffect, useState } from 'react';
import Articulo from "../component/Articulo";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { UsuarioController } from "../controller/UsuarioController";

function CursosOfertas() {
    const [ultimasOfertas, setUltimasOfertas] = useState([]);

    useEffect(() => {
        // Función asincrónica para obtener y mostrar las últimas ofertas
        const obtenerYMostrarUltimasOfertas = async () => {
            try {
                // Obtener las últimas ofertas desde el controlador de usuario
                const ofertas = await UsuarioController.obtenerUltimasOfertas();
                // Establecer las últimas ofertas en el estado
                setUltimasOfertas(ofertas);
            } catch (error) {
                console.error("Error al obtener y mostrar las últimas ofertas:", error);
            }
        };

        // Llama a la función para obtener y mostrar las últimas ofertas cuando el componente se monta
        obtenerYMostrarUltimasOfertas();
    }, []);

    // Mapea las últimas ofertas para mostrarlas en la pantalla principal
    const ultimasOfertasComponentes = ultimasOfertas.map((oferta, index) => (
        <Articulo key={index} title={oferta.title} />
    ));

    return (
        <div id="cursosofertaspantalla" className="row vw-100">
            <Header />
            <main id="cursosofertaspantallaMain" className="col-12 d-flex flex-row mt-1">
                <aside id="aside1" className="col-2 mt-3 h-100">
                    Aside Barra Busqueda
                </aside>
                <section className="col-10 mt-5">
                    <div className="d-flex flex-column gap-2">
                        {ultimasOfertasComponentes}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default CursosOfertas;