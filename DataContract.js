import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function DataContract() {
    return (
        <div >
            <Container className='mb-5'>
                <h3 className='mb-5'>Datos para el Contrato</h3>
                <Form>
                    <Row>
                        <Col>

                            <FormGroup className='form-inline'>
                                <Label for="Contract">Nro de Contrato</Label>
                                <Input type="text" id="Contract" name="contract" placeholder="Nro de contrato" required />

                            </FormGroup>

                        </Col>

                        <Col>

                            <FormGroup className='form-inline'>
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
                                <Input
                                    type="date"
                                    name="date"
                                    id="InitialDate"
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="FinalDate">Fecha Final</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="FinalDate"
                                />
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
                                <Input type="select" name="contractor" id="Contractor">
                                    <option>Seleccione un Contratante</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="ObjectContract">Objeto Contrato</Label>
                                <Input type="textarea" name="objectcontract" id="ObjectContract" />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="VehicleClass">Clase Vehicular</Label>
                                <Input type="select" name="vehicleclass" id="VehicleClass">
                                    <option>Doble Cabina</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="Proprietor">Asociar Propietario</Label>
                                <Input type="select" name="proprietor" id="Proprietor">
                                    <option>Seleccione un Propietario</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button color='primary'>Registrar</Button>
                </Form>
            </Container>
        </div>
    );
}

export default DataContract;