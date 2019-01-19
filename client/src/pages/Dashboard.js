import React, { Component } from 'react'
import Header from '../components/Header';
import Home from '../pages/Home';
import Footer from '../components/Footer';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
            <Home />
        <Footer />
      </div>
    )
  }
}
