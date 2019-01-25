import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import * as actions from '../../actions';

class SignOut extends Component {

    componentDidMount() {
        this.props.signout();
    }

  render() {
    return <Redirect to='/' />
  };
};

export default connect(null, actions)(SignOut);
