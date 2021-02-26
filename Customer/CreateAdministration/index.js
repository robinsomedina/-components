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

const CreateAdministration = props => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const data = {
    columns: [
      {
        label: "Id",
        field: "ID",
        sort: "asc",
        width: 200,
      },
      {
        label: "Placa del Vehículo",
        field: "placa",
        sort: "asc",
        width: 300,
      },
      {
        label: "Forma de Pago",
        field: "Pago",
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
        ID: "123",
        placa: "ABS0516",
        Pago: "Mensual",
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
        ID: "123",
        placa: "ABS0516",
        Pago: "Mensual",
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
        ID: "123",
        placa: "ABS0516",
        Pago: "Mensual",
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
                <h3>Lista Administrativa</h3>
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
                <CardTitle>Adminisctración </CardTitle>
                <CardSubtitle className="mb-3">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto.
                </CardSubtitle>
                <MDBDataTable responsive bordered data={data} />
              </CardBody>
            </Card>

            <div>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Administrativo</ModalHeader>
                <ModalBody>
                  <Form>
                    <Row>
                      <Col>
                        <FormGroup className="form-inline">
                          <Label for="CarPlate">Placa de Vehiculo</Label>
                          <Input
                            type="text"
                            id="CarPlate"
                            name="plate"
                            placeholder="Placa "
                            required
                          />
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="ID">Id</Label>
                          <Input
                            type="text"
                            id="ID"
                            name="Id"
                            placeholder="--- "
                            required
                          />
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="Mark">Marca</Label>
                          <Input
                            type="text"
                            id="Mark"
                            name="mark"
                            placeholder="--- "
                            required
                          />
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="Mark">Propietario</Label>
                          <Input
                            type="text"
                            id="Mark"
                            name="mark"
                            placeholder="--- "
                            required
                          />
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="AdministrationDateF">
                            Fecha de Administracion Desde
                          </Label>
                          <Input
                            type="date"
                            name="date"
                            id="AdministrationDateF"
                          />
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="AdministrationDateU">
                            Fecha de Administracion Hasta
                          </Label>
                          <Input
                            type="date"
                            name="date"
                            id="AdministrationDateU"
                          />
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="Months">Nro de Meses</Label>
                          <Input
                            type="text"
                            id="Months"
                            name="payment"
                            placeholder="Nro meses "
                            required
                          />
                          <small class="text-muted">
                            {" "}
                            Calculado entre fechas.
                          </small>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="Payment">Forma de Pago</Label>
                          <Col>
                            <Input type="select" name="select" id="Payment">
                              <option>Mesnsual</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Input>
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="ShareValue">Valor Cuota</Label>
                          <small class="text-muted"> (Forma de pago)</small>
                          <Input
                            type="text"
                            id="ShareValue"
                            name="sharevalue"
                            placeholder="cuota "
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    Generar
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

export default CreateAdministration
