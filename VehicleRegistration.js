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
                                    <Input type="select" name="select" id="Select">
                                        <option>Medellin</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="CitySettled">Ciudad Radicado </Label>
                                <Col>
                                    <Input type="select" name="select" id="CitySettled">
                                        <option>Medellin</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
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
                                    <Input type="text" id="InternalNumber" name="license" placeholder="Numero Interno" required />

                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="Date">Fecha Matricula</Label>
                                <Col>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="Date"
                                        placeholder="Fecha de Nacimiento"
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
                                    <Input type="text" id="EngineNumber" name="chassis" placeholder="Numero Motor" required />

                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="Model">Modelo </Label>
                                <Col>
                                    <Input type="text" id="Model" name="chassis" placeholder="Modelo" required />

                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="Mark">Marca </Label>
                                <Col>
                                    <Input type="text" id="Mark" name="chassis" placeholder="Marca" required />

                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="CylinderCapacity">Cilindraje</Label>
                                <Col>
                                    <Input type="select" name="select" id="CitySettled">
                                        <option>Medellin</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="Color">Color </Label>
                                <Col>
                                    <Input type="select" name="select" id="Color">
                                        <option>Verde</option>
                                        <option>Blanco</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="KindCar">Clase de Auto </Label>
                                <Col>
                                    <Input type="select" name="select" id="KindCar">
                                        <option></option>
                                        <option>Blanco</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="Capacity">Nro Puestos / Capacidad </Label>
                                <Col>
                                    <Input type="text" id="Capacity" name="capacidad" placeholder="Capacidad" required />

                                </Col>
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="Date">Vinculacion a la Empresa</Label>
                                <Col>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="Date"
                                        placeholder="Vinculacion a la Empresa"
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