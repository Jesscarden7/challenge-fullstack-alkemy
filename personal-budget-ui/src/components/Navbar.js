import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <Nav className="navbar">
      <Nav.Item>
        <Nav.Link>
          <Link className="link" to="/home">Home</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link className="link" to="/transactionList">Lista de Transacciones</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link className="link" to="/transactionRegister">Registro de Transacciones</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link className="link" to="/usersRegister">Registro de Usuarios</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link className="link" to="/userLogin">Login</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
