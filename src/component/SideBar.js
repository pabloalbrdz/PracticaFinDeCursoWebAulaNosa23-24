import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <>
      <div className={`d-flex flex-column flex-shrink-0 p-3 text-white ${isSidebarCollapsed ? 'collapsed' : ''}`} style={{ width: '280px', backgroundColor: '#0750D8' }}>
        <button className="btn btn-light washer-btn" onClick={toggleSidebar}>
          <i className={`bi bi-arrow-${isSidebarCollapsed ? 'right' : 'left'}`}></i>
        </button>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">Perfil</span>
        </a>
        <hr />
        {/* Resto del contenido del sidebar */}
      </div>
    </>
  );
}

export default Sidebar;
