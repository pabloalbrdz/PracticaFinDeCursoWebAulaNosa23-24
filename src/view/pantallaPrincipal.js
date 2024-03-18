import BarraLateral from '../component/BarraLateral.js';
import PanelOfertas from '../component/PanelOfertas.js';
import PanelCursos from '../component/PanelCursos.js';
import 'bootstrap/dist/css/bootstrap.min.css';
//librerias necesarias:
// npm i bootstrap@5.3.3
// npm install @trendmicro/react-sidenav

function PantallaPrincipal() {

  return (
    
    <div className="d-flex vh-100">
      <div className="sidebar" style={{ width: '30%' }}>
        {/* Aquí va el contenido del sidebar */}
        <BarraLateral />
      </div>
      
      {/* Contenedor de ofertas y cursos */}
      <div className="d-flex flex-column flex-grow-1">
      <PanelOfertas/>
      <PanelCursos/>
      </div>
    </div>
  );
}

export default PantallaPrincipal;
