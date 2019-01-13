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

    componentDidMount() {
        this.props.onRef(this)
      }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    createNewCard = (make, model, year) => {
        console.log('createNewCard Called')
        this.setState({
            vehicleMake: make,
            vehicleModel: model,
            vehicleYear: year

        })
    }
    
  render() {
      const { vehicleMake, vehicleModel, vehicleYear } = this.state;
    return (
        <Col className="mt-2" md="6">
            <Card body>
                <CardTitle>{vehicleMake}</CardTitle>
                <CardSubtitle className="lead text-muted">{vehicleModel} {vehicleYear}</CardSubtitle>
                <p className="text-center">LIST ELEMENTS WILL GO HERE...</p>
            </Card>
        </Col>
    )
  }
}
