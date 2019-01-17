import React, { Component } from 'react'
import Header from './Header';
import VehicleLog from './createLog/VehicleLog';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <VehicleLog />
      </div>
    )
  }
}
