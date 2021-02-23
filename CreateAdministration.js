import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function CreateAdministration() {
    return (
        <div >
            <Container className='mb-5'>
                <h3 className='mb-5'>Generar Administracion</h3>
                <Form>
                    <Row>
                        <Col>

                            <FormGroup className='form-inline'>
                                <Label for="CarPlate">Placa de Vehiculo</Label>
                                <Input type="text" id="CarPlate" name="plate" placeholder="Placa " required />

                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="ID">Id</Label>
                                <Input type="text" id="ID" name="Id" placeholder="--- " required />


                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="Mark">Marca</Label>
                                <Input type="text" id="Mark" name="mark" placeholder="--- " required />


                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="Mark">Propietario</Label>
                                <Input type="text" id="Mark" name="mark" placeholder="--- " required />


                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="AdministrationDateF">Fecha de Administracion Desde</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="AdministrationDateF"
                                    
                                />
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="AdministrationDateU">Fecha de Administracion Hasta</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="AdministrationDateU"
                                    
                                />
                            </FormGroup>

                            <FormGroup className='form-inline'>
                                <Label for="Months">Nro de Meses</Label>
                                <Input type="text" id="Months" name="payment" placeholder="Nro meses " required />
                                <small class="text-muted"> Calculado entre fechas.</small>

                            </FormGroup>

                            <FormGroup className='form-inline'>
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

                            <FormGroup className='form-inline'>
                                <Label for="ShareValue">Valor Cuota</Label>
                                <small class="text-muted"> (Forma de pago)</small>
                                <Input type="text" id="ShareValue" name="sharevalue" placeholder="cuota " required />
                            </FormGroup>

                            <Button color='primary'>Aceptar</Button>

                        </Col>


                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default CreateAdministration;