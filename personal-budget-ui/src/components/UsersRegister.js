import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UsersRegister() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre y apellido"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa un correo válido"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa tu contraseña"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Comprobar Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa nuevamente tu contraseña"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Crear
      </Button>
    </Form>
  );
}

export default UsersRegister;
