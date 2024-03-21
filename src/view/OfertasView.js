import React, { useState, useEffect } from 'react';
import Articulo from "../component/Articulo";
import Header from "../component/Header";
import Footer from "../component/Footer";

function OfertasView() {
    // Estados para almacenar la lista de ofertas, la lista de aptitudes disponibles y el filtro de búsqueda
    const [ofertas, setOfertas] = useState([]);
    const [aptitudes, setAptitudes] = useState([]);
    const [filtroNombre, setFiltroNombre] = useState('');
    const [aptitudesSeleccionadas, setAptitudesSeleccionadas] = useState([]);

    // Efectos para cargar las ofertas y las aptitudes desde la API
    useEffect(() => {
        // Lógica para cargar las ofertas desde la API
        // Simulación de carga inicial
        const datosOfertas = [...Array(50)].map((_, index) => ({
            id: index + 1,
            nombre: `Oferta ${index + 1}`,
            aptitudes: ['Aptitud 1', 'Aptitud 2', 'Aptitud 3']
        }));
        setOfertas(datosOfertas);

        // Lógica para cargar las aptitudes desde la API
        // Simulación de carga inicial
        const datosAptitudes = ['Aptitud 1', 'Aptitud 2', 'Aptitud 3', 'Aptitud 4'];
        setAptitudes(datosAptitudes);
    }, []);

    // Función para manejar el cambio en el filtro de búsqueda por nombre
    const handleBuscarNombre = (event) => {
        setFiltroNombre(event.target.value);
    };

    // Función para manejar la selección de aptitudes
    const handleSeleccionarAptitud = (event) => {
        const aptitudSeleccionada = event.target.value;
        if (aptitudesSeleccionadas.includes(aptitudSeleccionada)) {
            // Si la aptitud ya está seleccionada, se elimina de la lista
            setAptitudesSeleccionadas(aptitudesSeleccionadas.filter(aptitud => aptitud !== aptitudSeleccionada));
        } else {
            // Si la aptitud no está seleccionada, se agrega a la lista
            setAptitudesSeleccionadas([...aptitudesSeleccionadas, aptitudSeleccionada]);
        }
    };

    // Filtrar ofertas basadas en el filtro de búsqueda por nombre y las aptitudes seleccionadas
    const ofertasFiltradas = ofertas.filter(oferta => {
        // Filtrar por nombre
        const nombreMatch = oferta.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
        // Filtrar por aptitudes seleccionadas
        const aptitudesMatch = aptitudesSeleccionadas.length === 0 || aptitudesSeleccionadas.every(aptitud => oferta.aptitudes.includes(aptitud));
        return nombreMatch && aptitudesMatch;
    });

    return (
        <div className="row vw-100">
            {/* Header */}
            <Header />

            <main className="col-12 d-flex flex-row mt-1">
                {/* Filtrador por nombre */}
                <aside className="col-2 mt-3 h-100">
                    <h3>Buscar por nombre</h3>
                    <input type="text" value={filtroNombre} onChange={handleBuscarNombre} />
                </aside>

                {/* Filtrador por aptitudes */}
                <aside className="col-2 mt-3 h-100">
                    <h3>Buscar por aptitudes</h3>
                    <select multiple value={aptitudesSeleccionadas} onChange={handleSeleccionarAptitud}>
                        {aptitudes.map((aptitud, index) => (
                            <option key={index} value={aptitud}>{aptitud}</option>
                        ))}
                    </select>
                </aside>

                {/* Lista de ofertas filtradas */}
                <section className="col-8 mt-5">
                    <h2>Ofertas</h2>
                    <div className="d-flex flex-column gap-2">
                        {ofertasFiltradas.map((oferta, index) => (
                            <Articulo key={index} title={oferta.nombre} />
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default OfertasView;