import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TransactionsRegister() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicConcept">
        <Form.Label>Concepto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa el concepto de tu transacción"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAmount">
        <Form.Label>Monto</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingresa el valor de tu transacción"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="date"
          placeholder="Ingresa la fecha de tu transacción"
        />
      </Form.Group>
      <Form.Select className="mb-3" aria-label="Default select example">
        <option>Selecciona el tipo de Transacción</option>
        <option value="1">Ingreso</option>
        <option value="2">Egreso</option>
      </Form.Select>

      <Button variant="primary" type="submit">
        Crear
      </Button>
    </Form>
  );
}

export default TransactionsRegister;
