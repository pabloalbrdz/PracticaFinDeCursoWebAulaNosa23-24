import BarraLateral from '../component/BarraLateral.js';
import PanelOfertas from '../component/PanelOfertas.js';
import PanelCursos from '../component/PanelCursos.js';



import 'bootstrap/dist/css/bootstrap.min.css';
//librerias necesarias:
// npm i bootstrap@5.3.3
// npm install @trendmicro/react-sidenav

function PantallaPrincipal() {

  return (
    
    <div className="d-flex flex-column vh-100">

      <div className='d-flex flex-row'>
        <BarraLateral />
        <div className="mt-5 d-flex flex-column flex-grow-1">
            {/* Contenedor de ofertas y cursos */}
            <h1 className='m-3'>Novedades</h1>
            <PanelOfertas/>
            <PanelCursos/>
        </div>
      </div>
    </div>
  );
}

export default PantallaPrincipal;
