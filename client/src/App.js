import 'bootstrap/scss/bootstrap.scss';
import './assets/css/app.scss';
import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Home />
      </div>
    );
  }
}

export default App;
