import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import HeroImg from '../assets/images/hero-img.png';
import CloudImg from '../assets/images/cloud.svg';
import AsteriodImg from '../assets/images/asteroid.svg';
import PlanetImg from '../assets/images/planet.svg';

export default class Home extends Component {
  render() {
    return (
        <div className="home-container">
            <Jumbotron className="jumbotron text-center">
            <h1 className="display-3">Welcome to AutoLog</h1>
            <p className="lead">A simple web app to log your vechiles maintenece.</p>
            <img className="text-center img-fluid" src={HeroImg} alt="Hero Imgs"></img>
            <hr className="my-2" />
            <p>Sign-up it's free!</p>
            <p className="lead">
                <Button color="primary">Sign-up</Button>
            </p>
        </Jumbotron>

        <Container className="section-1 text-center">
            <h2>Simple and Easy to use</h2>
            <p className="lead">Add your vehicle and log your maintenece.</p>
            <Row>
                <Col md={4}>
                    <img className="img-fluid" src={CloudImg} alt="cloud"/>
                    <h4>introducing whatsapp</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </Col>
                <Col md={4}>
                    <img className="img-fluid" src={AsteriodImg} alt="cloud"/>
                    <h4>introducing whatsapp</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </Col>
                <Col md={4}>
                    <img className="img-fluid" src={PlanetImg} alt="cloud"/>
                    <h4>introducing whatsapp</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </Col>
            </Row>
        </Container>

        </div>

    )
  }
}
