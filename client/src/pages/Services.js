import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';


export const Services = () => {
    return (
        <div className="home-container">
          <Jumbotron className="jumbotron text-center">
            <h1 className="display-3">Services</h1>
            <p className="lead">Add or Remove available services and vechile maintenece.</p>
            <hr className="my-2" />
          </Jumbotron>

          <Container className="section-1 text-center">
            <h2>Simple and Easy to use</h2>
            <p className="lead">Add your vehicle and log your maintenece.</p>
            <Row>
                <Col md={4}>
                    <h4>introducing whatsapp</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </Col>
                <Col md={4}>
                    <h4>introducing whatsapp</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </Col>
                <Col md={4}>
                    <h4>introducing whatsapp</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
