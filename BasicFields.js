import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function BasicFields() {
    return (
        <Container className='mb-5'>
            
            <Form>
                <Row>

                    <Col>
                        <FormGroup>
                            <Label for="Name">Nombre</Label>
                            <Input type="text" id="Name" name="name" placeholder="Nombre" required />
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label for="LastName">Apellidos</Label>
                            <Input type="text" id="LastName" name="lastname" placeholder="Apellidos" required />
                        </FormGroup>
                    </Col>


                </Row>

                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="DateBirth">Fecha de Nacimiento</Label>
                            <Input
                                type="date"
                                name="date"
                                id="DateBirth"
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label for="CityCampus">Ciudad (Sede Trasmovil)</Label>
                            <Input type="select" name="citycampus" id="CityCampus">
                                <option>Medellin</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup>
                    <Label for="Sex">Sexo</Label>
                    <div>
                        <CustomInput type="radio" id="Sex" name="customRadio" label="Hombre" inline />
                        <CustomInput type="radio" id="Sex" name="customRadio" label="Mujer" inline />
                    </div>
                </FormGroup>

                <Row>
                    <Col>
                        <Form>
                            <FormGroup>
                                <Label for="Direction">Direccion</Label>
                                <Input type="text" id="Direction" name="direction" placeholder="Residencia" required />
                            </FormGroup>
                        </Form>
                    </Col>

                    <Col>
                        <Form>
                            <FormGroup>
                                <Label for="District">Barrio</Label>
                                <Input type="text" id="District" name="district" placeholder="Urb" required />
                            </FormGroup>
                        </Form>
                    </Col>

                    <Col>
                        <Form>
                            <FormGroup>
                                <Label for="City">Ciudad</Label>
                                <Input type="text" id="City" name="city" placeholder="de residencia" required />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form>
                            <FormGroup>
                                <Label for="Email">Correo Electronico</Label>
                                <Input type="email" id="Email" name="email" placeholder="email@dominio.com" required />
                            </FormGroup>
                        </Form>
                    </Col>

                    <Col>
                        <Form>
                            <FormGroup>
                                <Label for="CellPhone">Nro Celular</Label>
                                <Input type="text" id="CellPhone" name="cellphone" placeholder="Numero:" required />
                            </FormGroup>
                        </Form>
                    </Col>

                    <Col>
                        <Form>
                            <FormGroup>
                                <Label for="TelePhone">Tel. Fijo </Label>
                                <Input type="text" id="Telephone" name="telephone" placeholder="Numero" required />
                            </FormGroup>
                        </Form>
                    </Col>


                </Row>

                <Row>
                    <Col>
                        <Form>
                            <FormGroup>
                                <Label for="TelephoneOffice">Tel. Oficina</Label>
                                <Input type="text" id="TelephoneOffice" name="telephoneoffice" placeholder="Telefono" />
                            </FormGroup>
                        </Form>
                    </Col>

                    <Col>
                        <Form>
                            <FormGroup>
                                <Label for="WebPage">Pagina Web</Label>
                                <Input type="text" id="WebPage" name="webpage" placeholder="https://www.MiWebSite.com/" />
                            </FormGroup>
                        </Form>
                    </Col>


                </Row>
            </Form>
        </Container>
    );
}

export default BasicFields;