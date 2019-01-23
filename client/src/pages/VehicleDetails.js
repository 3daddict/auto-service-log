import React, { Component } from 'react'

export default class VehicleDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    const { id, make, model, year } = this.props.location.state;
    return (
      <div>
        <h1>{make} Page</h1>
        <p>{id} || {model} || {year}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, beatae quae. Laborum ducimus itaque alias!</p>
      </div>
    )
  }
}
