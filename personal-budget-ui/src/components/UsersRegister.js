import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UsersRegister() {
  return (
    <Form className="container">
      <Row className="d-flex flex-column bd-highlight mb-3 d-flex align-items-center">
        <Col xs={4}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre y apellido"
            />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="Ingresa un correo válido" />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu contraseña" />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Comprobar Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa nuevamente tu contraseña"
            />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="success" type="submit">
        Crear Usuario
      </Button>
    </Form>
  );
}

export default UsersRegister;
