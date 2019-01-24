import "bootstrap/scss/bootstrap.scss";
import "./assets/css/app.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

import React, { Component } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Error from './components/Error';
import VehicleDetails from "./pages/VehicleDetails";
import SignUp from './components/authentication/SignUp';

library.add(faCogs);

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" render={()=> <SignUp />} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/vehicle-details" component={VehicleDetails} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withRouter(App);
