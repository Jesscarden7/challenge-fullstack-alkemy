import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link>
          <Link to="/home">Home</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/transactionList">Lista de Transacciones</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/transactionRegister">Registro de Transacciones</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/usersRegister">Registro de Usuarios</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/userLogin">Login</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
