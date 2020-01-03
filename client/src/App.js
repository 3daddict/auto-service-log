import "bootstrap/scss/bootstrap.scss";
import "./assets/css/app.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Error from './components/Error';
import VehicleDetails from "./pages/VehicleDetails";
import SignUp from './components/authentication/SignUp';
import SignOut from './components/authentication/SignOut';
import SignIn from './components/authentication/SignIn';
import { Services } from './pages/Services'

library.add(faCogs);

class App extends Component {
  render() {
    return (
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" render={()=> <SignUp />} />
              <Route path="/signout" render={()=> <SignOut />} />
              <Route path="/signin" render={()=> <SignIn />} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/vehicle-details" component={VehicleDetails} />
              <Route path="/services" component={Services}/>
              <Route component={Error} />
            </Switch>
            <Footer />
          </div>
    );
  }
}

export default withRouter(App);
