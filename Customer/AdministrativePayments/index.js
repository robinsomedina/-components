import React, { useState } from "react"

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

const AdministrativePayments = props => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

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
                <h3>Pagos Administrativos</h3>
              </div>
              <div
                style={{
                  width: "200px",
                  textAlign: "right",
                }}
              >

              </div>
            </div>
            <br />
            <Card>
              <CardBody>
                <CardTitle>Pagos </CardTitle>
                <CardSubtitle className="mb-3">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto.
                </CardSubtitle>
                
              </CardBody>
            </Card>

            <Form>
              <Row>
                <Col>
                  <FormGroup className="form-inline">
                    <Label for="Plaque">Placa</Label>
                    <Input
                      type="text"
                      id="Plaque"
                      name="plaque"
                      placeholder="---"
                      required
                    />
                    <Button color="primary">Buscar</Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Form>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default AdministrativePayments
