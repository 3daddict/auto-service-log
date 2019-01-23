import React, { Component } from 'react'

export default class VehicleDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {}
    }

    render() {
        const { make, model, year } = this.props.location.state;
    
        return (
          <div>
            <h1>VehicleDetails Page</h1>
            <h2>{make}</h2>
            <h2>{model}</h2>
            <h2>{year}</h2>
          </div>
        );
      }
    }