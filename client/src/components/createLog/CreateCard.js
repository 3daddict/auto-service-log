import React, { Component } from 'react';
import { Col, Card, CardTitle, CardSubtitle } from 'reactstrap';
import axios from 'axios';
import dummyData from '../../dummyData/dummyData.json';

export default class CreateCard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: '',
        loadedData: []
      }
    }

    componentDidMount() {
        this.props.onRef(this);

        Object.keys(dummyData).map((key, index) => {
            const loadedData = dummyData;
            this.setState({ loadedData });

        });

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

    // parseDb = (data) => {
    //     Object.keys(data).map((key, index) => {
    //         console.log(data[index]);

    //     });
    // }
    
    
  render() {
      const { vehicleMake, vehicleModel, vehicleYear } = this.state;
      
    return (
        <ul>
        { this.state.loadedData.map(data => <li>{data.make}</li>)}
      </ul>
    )
  }
}

{/* <Col className="mt-2" md="6">
            <Card body>
                <CardTitle>{ this.state.loadedData.map(data => {data.make})}</CardTitle>
                <CardSubtitle className="lead text-muted">{vehicleModel} {vehicleYear}</CardSubtitle>
                <p className="text-center">LIST ELEMENTS WILL GO HERE...</p>
            </Card>
        </Col> */}