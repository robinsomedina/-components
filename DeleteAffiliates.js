import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function DeleteAffiliates() {
    return (
        <div >
            <Container className='mb-5'>
                <h3 className='mb-5'>Eliminar Afiliados</h3>
                <Form>
                    <Row>
                        <Col>
                            <Label for="Delete">Eliminar</Label>
                            <FormGroup className='form-inline'>
                                <Input type="text" id="Delete" name="email" placeholder="Cedula/NT" required />
                                <Button color='primary'>Buscar</Button>

                            </FormGroup>
                            <small class="text-muted"> Recuerde que para eliminar un Afiliado no debe tener 
                            Moviles Asociados.</small>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default DeleteAffiliates;