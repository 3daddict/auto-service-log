import './assets/css/app.css';
import 'bootstrap/scss/bootstrap.scss';
import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <h1>Here we go!</h1>
      </div>
    );
  }
}

export default App;
