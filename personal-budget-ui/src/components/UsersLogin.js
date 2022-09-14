import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useEffect } from "react";
import globalContext from "../context/globalContext";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  let navigate = useNavigate();
  const {loggedUser, setLoggedUser} = useContext(globalContext);

  useEffect(() => {
    if (loggedUser) {
      return navigate("/");
    }
  }, []);

  const handleLogin = () => {

    fetch("http://localhost:8000/api/users/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: "edison23@gmail.com", password: '1234'})
    }).then(data => data.json()
    .then(user => {
      setLoggedUser(user)
      return navigate("/transactionRegister");
    }))
     .catch(e => {
      console.log(e)
    });
  };

  return (
    <Form className="container">
      <Row className="d-flex flex-column bd-highlight mb-3 d-flex align-items-center">
        <Col xs={4}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="Ingresa un correo válido" autoComplete="off" />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Group className="mb-3" controlId="formBasicPassword" autoComplete="off">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Mantener sesión iniciada" />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="success" type="button" onClick={handleLogin}>
        Ingresar
      </Button>
    </Form>
  );
}

export default UserLogin;
