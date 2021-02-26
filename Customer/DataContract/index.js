import React, { useState } from "react"
import { MDBDataTable } from "mdbreact"

import {
  Form,
  Col,
  Row,
  Button,
  Container,
  FormGroup,
  Label,
  Input,
  CardBody,
  Card,
  CardTitle,
  CardSubtitle,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap"

const DataContract = props => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const data = {
    columns: [
      {
        label: "Nro de Contrato",
        field: "contrato",
        sort: "asc",
        width: 200,
      },
      {
        label: "Operador",
        field: "operador",
        sort: "asc",
        width: 300,
      },
      {
        label: "Contratante",
        field: "contratante",
        sort: "asc",
        width: 270,
      },
      {
        label: "",
        field: "actions",
        sort: "asc",
        width: 50,
      },
    ],
    rows: [
      {
        contrato: "147",
        operador: "Ana",
        contratante: "Carlos",
        actions: (
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button
              color="success"
              onClick={e => {
                // Cargamos la información, para establecer el estado del formulario

                // Mostramos el formulario
                toggle()
              }}
            >
              Editar
            </Button>{" "}
            <Button
              color="danger"
              onClick={e => {
                onDelete()
              }}
            >
              Eliminar
            </Button>
          </div>
        ),
      },
      {
        contrato: "147",
        operador: "Ana",
        contratante: "Carlos",
        actions: (
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button
              color="success"
              onClick={e => {
                // Cargamos la información, para establecer el estado del formulario

                // Mostramos el formulario
                toggle()
              }}
            >
              Editar
            </Button>{" "}
            <Button
              color="danger"
              onClick={e => {
                onDelete()
              }}
            >
              Eliminar
            </Button>
          </div>
        ),
      },
      {
        contrato: "147",
        operador: "Ana",
        contratante: "Carlos",
        actions: (
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button
              color="success"
              onClick={e => {
                // Cargamos la información, para establecer el estado del formulario

                // Mostramos el formulario
                toggle()
              }}
            >
              Editar
            </Button>{" "}
            <Button
              color="danger"
              onClick={e => {
                onDelete()
              }}
            >
              Eliminar
            </Button>
          </div>
        ),
      },
    ],
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container className="mb-5">
          <Form>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="w-100">
                <h3>Contrato</h3>
              </div>
              <div
                style={{
                  width: "200px",
                  textAlign: "right",
                }}
              >
                <Button color="primary" onClick={toggle}>
                  Agregar nuevo
                </Button>
              </div>
            </div>
            <br />
            <Card>
              <CardBody>
                <CardTitle>Clientes </CardTitle>
                <CardSubtitle className="mb-3">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto.
                </CardSubtitle>
                <MDBDataTable responsive bordered data={data} />
              </CardBody>
            </Card>

            <div>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Administrar Contrato</ModalHeader>
                <ModalBody>
                  <Form>
                    <Row>
                      <Col>
                        <FormGroup className="form-inline">
                          <Label for="Contract">Nro de Contrato</Label>
                          <Input
                            type="text"
                            id="Contract"
                            name="contract"
                            placeholder="Nro de contrato"
                            required
                          />
                        </FormGroup>
                      </Col>

                      <Col>
                        <FormGroup className="form-inline">
                          <Label for="CityContract">Ciudad del Contrato</Label>
                          <Input type="select" name="select" id="CityContract">
                            <option>Medellin</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="InitialDate">Fecha Inicial</Label>
                          <Input type="date" name="date" id="InitialDate" />
                        </FormGroup>
                      </Col>

                      <Col>
                        <FormGroup>
                          <Label for="FinalDate">Fecha Final</Label>
                          <Input type="date" name="date" id="FinalDate" />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="Operator">Operdaor</Label>
                          <Input type="select" name="operator" id="Operator">
                            <option>Seleccione un Operador</option>
                          </Input>
                        </FormGroup>
                      </Col>

                      <Col>
                        <FormGroup>
                          <Label for="Contractor">Contratante</Label>
                          <Input
                            type="select"
                            name="contractor"
                            id="Contractor"
                          >
                            <option>Seleccione un Contratante</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="ObjectContract">Objeto Contrato</Label>
                          <Input
                            type="textarea"
                            name="objectcontract"
                            id="ObjectContract"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="VehicleClass">Clase Vehicular</Label>
                          <Input
                            type="select"
                            name="vehicleclass"
                            id="VehicleClass"
                          >
                            <option>Doble Cabina</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="Proprietor">Asociar Propietario</Label>
                          <Input
                            type="select"
                            name="proprietor"
                            id="Proprietor"
                          >
                            <option>Seleccione un Propietario</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button color="primary">Registrar</Button>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    Contratar
                  </Button>
                  <Button color="danger" onClick={toggle}>
                    Cancelar
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </Form>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default DataContract
