import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { Button, Container, Form, FormGroup, Label } from 'reactstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignIn extends Component {

    static contextTypes = {
        router: PropTypes.object
      }

    onSubmit = formProps => {
        this.props.signin(formProps, () => {
        this.context.router.history.push('/dashboard');
        });
      };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container>
      <Form onSubmit={handleSubmit(this.onSubmit)} >
        <FormGroup>
          <Label for="signInEmail">Email</Label>
          <Field 
            className="form-control"
            name="email"
            type="text"
            component="input"
            id="signInEmail"
            placeholder="Enter an email"
            autoComplete="off"
          />
        </FormGroup>
        <FormGroup>
          <Label for="signInPassword">Password</Label>
          <Field 
          className="form-control"
            name="password"
            type="password"
            component="input"
            id="signInPassword" 
            placeholder="Enter a password"
            autoComplete="off"
          />
        </FormGroup>
        <div className="text-right">
          <Button className="mb-2" color="primary">Sign In</Button>
          <p className="text-danger">{this.props.errorMessage}</p>
        </div>
    </Form>
      </Container>
    )
  }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
  }
  
  export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
  )(SignIn);