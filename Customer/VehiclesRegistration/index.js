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

const VehicleRegistration = props => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const data = {
    columns: [
      {
        label: "Placa",
        field: "placa",
        sort: "asc",
        width: 200,
      },
      {
        label: "Número Interno",
        field: "numeroi",
        sort: "asc",
        width: 300,
      },
      {
        label: "Número de Chásis",
        field: "numeroc",
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
        placa: "ABD230A",
        numeroi: "0129384",
        numeroc: "243546",
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
        placa: "ABD230A",
        numeroi: "0129384",
        numeroc: "243546",
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
        placa: "ABD230A",
        numeroi: "0129384",
        numeroc: "243546",
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
                <h3>Lista de Vehiculos Afiliados</h3>
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
                <CardTitle>Vehiculos </CardTitle>
                <CardSubtitle className="mb-3">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto.
                </CardSubtitle>
                <MDBDataTable responsive bordered data={data} />
              </CardBody>
            </Card>

            <div>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Administrar Vehiculo</ModalHeader>
                <ModalBody>
                  <Form>
                    <Row>
                      <Col>
                        <FormGroup className="form-inline">
                          <Label for="Branch">Sucursal / Convenio </Label>
                          <Col>
                            <Input type="select" name="branch" id="Branch">
                              <option>Medellin</option>
                            </Input>
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="CitySettled">Ciudad Radicado </Label>
                          <Col>
                            <Input
                              type="select"
                              name="citysettled"
                              id="CitySettled"
                            >
                              <option>Medellin</option>
                            </Input>
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="LicensePlate">Placa </Label>
                          <Col>
                            <Input
                              type="text"
                              id="LicensePlate"
                              name="license"
                              placeholder="Placa"
                              required
                            />
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="CityLicensePlate">Ciudad Placa </Label>
                          <Col>
                            <Input
                              type="text"
                              id="CityLicensePlate"
                              name="citylicense"
                              placeholder="Ciudad Placa"
                              required
                            />
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="InternalNumber">Numero Interno </Label>
                          <Col>
                            <Input
                              type="text"
                              id="InternalNumber"
                              name="internalnumber"
                              placeholder="Numero Interno"
                              required
                            />
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="EnrollmentDate">Fecha Matricula</Label>
                          <Col>
                            <Input
                              type="date"
                              name="enrollmentdate"
                              id="EnrollmentDate"
                            />
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="ChassisNumber">Nro Chasis </Label>
                          <Col>
                            <Input
                              type="text"
                              id="ChassisNumber"
                              name="chassis"
                              placeholder="Numero Chasis"
                              required
                            />
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="EngineNumber">Nro Motor </Label>
                          <Col>
                            <Input
                              type="text"
                              id="EngineNumber"
                              name="enginenumber"
                              placeholder="Numero Motor"
                              required
                            />
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="Model">Modelo </Label>
                          <Col>
                            <Input
                              type="text"
                              id="Model"
                              name="model"
                              placeholder="Modelo"
                              required
                            />
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="Mark">Marca </Label>
                          <Col>
                            <Input
                              type="text"
                              id="Mark"
                              name="mark"
                              placeholder="Marca"
                              required
                            />
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="CylinderCapacity">Cilindraje</Label>
                          <Col>
                            <Input
                              type="select"
                              name="cilindercapacity"
                              id="CylinderCapacity"
                            >
                              <option>2.800</option>
                            </Input>
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="Color">Color </Label>
                          <Col>
                            <Input type="select" name="color" id="Color">
                              <option>Verde</option>
                              <option>Blanco</option>
                            </Input>
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="KindCar">Clase de Auto </Label>
                          <Col>
                            <Input type="select" name="kindcar" id="KindCar">
                              <option>Doble Cabina</option>
                              <option>MicroBus</option>
                            </Input>
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="Capacity">Nro Puestos / Capacidad </Label>
                          <Col>
                            <Input
                              type="text"
                              id="Capacity"
                              name="capacity"
                              placeholder="Capacidad"
                              required
                            />
                          </Col>
                        </FormGroup>

                        <FormGroup className="form-inline">
                          <Label for="TieUpDate">
                            Vinculacion a la Empresa
                          </Label>
                          <Col>
                            <Input
                              type="date"
                              name="TieUpdate"
                              id="TieUpDate"
                            />
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                  Crear Registro de Vehiculo
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

export default VehicleRegistration
