import 'bootstrap/scss/bootstrap.scss';
import './assets/css/app.scss';
import React, { Component } from 'react';
import Dashboard from './pages/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
          <Dashboard />

      </div>
    );
  }
}

export default App;


