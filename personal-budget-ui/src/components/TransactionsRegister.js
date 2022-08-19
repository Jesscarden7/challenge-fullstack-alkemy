import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TransactionsRegister() {
  return (
    <Form className="container">
      <Row className="d-flex flex-column bd-highlight mb-3 d-flex align-items-center">
        <Col xs={4}>
          <Form.Group className="mb-3" controlId="formBasicConcept">
            <Form.Label>Concepto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el concepto de tu transacción"
            />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Group className="mb-3" controlId="formBasicAmount">
            <Form.Label>Monto</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingresa el valor de tu transacción"
            />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              placeholder="Ingresa la fecha de tu transacción"
            />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Select className="mb-3" aria-label="Default select example">
            <option>Selecciona el tipo de Transacción</option>
            <option value="1">Ingreso</option>
            <option value="2">Egreso</option>
          </Form.Select>
        </Col>
      </Row>
      <Button variant="success" type="submit">
        Crear
      </Button>
    </Form>
  );
}

export default TransactionsRegister;
