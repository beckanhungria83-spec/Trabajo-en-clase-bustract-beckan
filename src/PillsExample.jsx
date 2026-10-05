import { Nav } from 'react-bootstrap';

function Sidebar() {
    return (
        <div className="bg-dark text-white p-3 w-100 d-flex align-items-center justify-content-between">

            <h4 className="m-0 me-4">Mi sistema</h4>

            <Nav className="d-flex flex-row flex-wrap">

                <Nav.Link href="#" className="text-white me-2">
                    <i className="bi bi-house me-2"></i>
                    Inicio
                </Nav.Link>

                <Nav.Link href="#" className="text-white me-2">
                    <i className="bi bi-people me-2"></i>
                    Usuarios
                </Nav.Link>

                <Nav.Link href="#" className="text-white me-2">
                    <i className="bi bi-box-seam-fill me-2"></i>
                    Productos
                </Nav.Link>

                <Nav.Link href="#" className="text-white me-2">
                    <i className="bi bi-cart-plus-fill me-2"></i>
                    Ventas
                </Nav.Link>

                <Nav.Link href="#" className="text-white me-2">
                    <i className="bi bi-briefcase-fill me-2"></i>
                    Finanzas
                </Nav.Link>

                <Nav.Link href="#" className="text-white me-2">
                    <i className="bi bi-bell-fill me-2"></i>
                    Notificaciones
                </Nav.Link>

                <Nav.Link href="#" className="text-white me-2">
                    <i className="bi bi-gear-fill me-2"></i>
                    Configuración
                </Nav.Link>

            </Nav>

            <button className="btn btn-danger text-nowrap">
                <i className="bi bi-door-open-fill me-2"></i>
                Cerrar sesión
            </button>

        </div>
    );
}

export default Sidebar;