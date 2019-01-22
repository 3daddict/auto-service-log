import React, { Component } from 'react'

export default class VehicleDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    const { make } = this.props.vehicleData;
    return (
      <div>
        <h1>Vehicle Details Page</h1>
        <h2>{make}</h2>
      </div>
    )
  }
}
