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

                        </Col>


                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default CreateAdministration;