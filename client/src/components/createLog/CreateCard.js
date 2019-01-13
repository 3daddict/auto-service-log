import React, { Component } from 'react';
import { Col, Card, CardTitle, CardSubtitle } from 'reactstrap';

export default class CreateCard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: ''
      }
    }

    createNewCard = (make, model, year) => {
        this.setState({
            vehicleMake: make,
            vehicleModel: model,
            vehicleYear: year

        })
    }
    
  render() {
    return (
        <Col className="mt-2" md="6">
            <Card body>
                <CardTitle>{this.vehicleMake}</CardTitle>
                <CardSubtitle className="lead text-muted">{this.vehicleModel} {this.vehicleYear}</CardSubtitle>
                <p className="text-center">LIST ELEMENTS WILL GO HERE...</p>
            </Card>
        </Col>
    )
  }
}
