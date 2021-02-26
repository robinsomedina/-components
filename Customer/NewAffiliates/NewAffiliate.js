import React, { useState } from "react"
import BasicFields from "./BasicFields"
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

const NewAffiliates = props => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const data = {
    columns: [
      {
        label: "Cédula/NT",
        field: "cedula",
        sort: "asc",
        width: 200,
      },
      {
        label: "Nombre completo",
        field: "fullName",
        sort: "asc",
        width: 300,
      },
      {
        label: "Email",
        field: "email",
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
        fullName: "Tiger Nixon",
        email: "System Architect",
        cedula: "25789013",
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
              onClick={e => {//edito de aqui hacia abjo
                onDelete(<Form>
                    <Row>
                        <Col>
                            <Label for="Delete">Eliminar</Label>
                            <FormGroup className='form-inline'>
                                <Input type="text" id="Delete" name="delete" placeholder="Cedula/NT" required />
                                <Button color='primary'>Buscar</Button>

                            </FormGroup>
                            <small class="text-muted"> Recuerde que para eliminar un Afiliado no debe tener 
                            Moviles Asociados.</small>
                        </Col>
                    </Row>
                </Form>)
              }}
            >
              Eliminar
            </Button>
          </div>
        ),
      },
      {
        fullName: "Tiger Nixon",
        email: "System Architect",
        cedula: "25789013",
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
        fullName: "Tiger Nixon",
        email: "System Architect",
        cedula: "25789013",
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
                <h3>Lista de Afiliados</h3>
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
                <ModalHeader toggle={toggle}>Administrar Afiliado</ModalHeader>
                <ModalBody>
                  <Form>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="DNI">Cedula/NT</Label>
                          <Input
                            type="text"
                            id="DNI"
                            name="dni"
                            placeholder="Cedula/NT"
                            required
                          />
                        </FormGroup>
                        <br />
                      </Col>
                    </Row>
                    
                      <BasicFields />
                      
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    Crear Cliente
                  </Button>
                  <Button color="danger" onClick={toggle}>
                    Cancelar
                  </Button>
                </ModalFooter>
              </Modal>
            </div>

            <FormGroup>
              <Col>
                <Button color="primary">Crear Cliente</Button>
              </Col>
            </FormGroup>
          </Form>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default NewAffiliates
