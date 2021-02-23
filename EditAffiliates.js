import React, { useState, useEffect } from 'react';
import BasicFields from './BasicFields'
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

{/**Edita afiliados en realiadad no es para editar , sino para ver la informacion asignada de un afiliado  minuto 6:27
del 1er video, deberia ser Ver Afiliado*/}


function EditAffiliates() {
    return (

        <Container>
            <Form>
                <FormGroup>
                    <Col>
                        <Label for="DNI">Cedula/NT</Label>
                        <FormGroup className='form-inline'>

                            <Input type="text" id="DNI" name="dni" placeholder="Cedula/NT" required />

                            <Button color='primary'>Buscar</Button>
                        </FormGroup>
                    </Col>

                    <BasicFields />
                </FormGroup>
            </Form>
        </Container>
    );
}

export default EditAffiliates;