import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function AdministrativePayments() {
    return (
        <div >
            <Container className='mb-5'>
                <h3 className='mb-5'>Pagos Administracion de Vehiculos</h3>
                <Form>
                    <Row>
                        <Col>
                            
                            <FormGroup className='form-inline'>
                            <Label for="Plaque">Placa</Label>
                                <Input type="text" id="Plaque" name="plaque" placeholder="---" required />
                                <Button color='primary'>Buscar</Button>

                            </FormGroup>

                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default AdministrativePayments;