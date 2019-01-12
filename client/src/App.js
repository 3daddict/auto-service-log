import 'bootstrap/scss/bootstrap.scss';
import './assets/css/app.scss';
import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

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
