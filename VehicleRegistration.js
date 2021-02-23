import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function VehicleRegistration() {
    return (
        <div >
            <Container className='mb-5'>
                <h3 className='mb-5'>Registrar Vehiculos</h3>
                <Form>
                    <Row>
                        <Col>

                            <FormGroup className='form-inline'>
                                <Label for="Branch">Sucursal / Convenio </Label>
                                <Col>
                                    <Input type="select" name="branch" id="Branch">
                                        <option>Medellin</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="CitySettled">Ciudad Radicado </Label>
                                <Col>
                                    <Input type="select" name="citysettled" id="CitySettled">
                                        <option>Medellin</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="LicensePlate">Placa </Label>
                                <Col>
                                    <Input type="text" id="LicensePlate" name="license" placeholder="Placa" required />

                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="CityLicensePlate">Ciudad Placa </Label>
                                <Col>
                                    <Input type="text" id="CityLicensePlate" name="citylicense" placeholder="Ciudad Placa" required />

                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="InternalNumber">Numero Interno </Label>
                                <Col>
                                    <Input type="text" id="InternalNumber" name="internalnumber" placeholder="Numero Interno" required />

                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="EnrollmentDate">Fecha Matricula</Label>
                                <Col>
                                    <Input
                                        type="date"
                                        name="enrollmentdate"
                                        id="EnrollmentDate"
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="ChassisNumber">Nro Chasis </Label>
                                <Col>
                                    <Input type="text" id="ChassisNumber" name="chassis" placeholder="Numero Chasis" required />

                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="EngineNumber">Nro Motor </Label>
                                <Col>
                                    <Input type="text" id="EngineNumber" name="enginenumber" placeholder="Numero Motor" required />

                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="Model">Modelo </Label>
                                <Col>
                                    <Input type="text" id="Model" name="model" placeholder="Modelo" required />

                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="Mark">Marca </Label>
                                <Col>
                                    <Input type="text" id="Mark" name="mark" placeholder="Marca" required />

                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="CylinderCapacity">Cilindraje</Label>
                                <Col>
                                    <Input type="select" name="cilindercapacity" id="CylinderCapacity">
                                        <option>2.800</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="Color">Color </Label>
                                <Col>
                                    <Input type="select" name="color" id="Color">
                                        <option>Verde</option>
                                        <option>Blanco</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="KindCar">Clase de Auto </Label>
                                <Col>
                                    <Input type="select" name="kindcar" id="KindCar">
                                        <option>Doble Cabina</option>
                                        <option>MicroBus</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="Capacity">Nro Puestos / Capacidad </Label>
                                <Col>
                                    <Input type="text" id="Capacity" name="capacity" placeholder="Capacidad" required />

                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="TieUpDate">Vinculacion a la Empresa</Label>
                                <Col>
                                    <Input
                                        type="date"
                                        name="TieUpdate"
                                        id="TieUpDate"
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col >
                                    <Button color='primary'>Registrar</Button>
                                </Col>
                            </FormGroup>

                        </Col>
                    </Row>

                </Form>
            </Container>
        </div>
    );
}

export default VehicleRegistration;