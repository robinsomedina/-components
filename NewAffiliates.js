import React, { useState, useEffect } from 'react';
import BasicFields from './BasicFields';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function NewAffiliates() {
    return (
        <Container className='mb-5'>
            
            <Form>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="DNI">Cedula/NT</Label>
                            <Input type="text" id="DNI" name="email" placeholder="Cedula/NT" required />
                        </FormGroup>
                    </Col>

                    <BasicFields />

                </Row>

                <FormGroup>
                    <Col >
                        <Button color='primary'>Crear Cliente</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
    );
}

export default NewAffiliates;