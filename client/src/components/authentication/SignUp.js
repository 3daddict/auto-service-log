import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Container, Form, FormGroup, Label } from 'reactstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Component {
    onSubmit = formProps => {
        this.props.signup(formProps, () => {
          this.props.history.push('/dashboard');
        });
      };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container>
      <Form onSubmit={handleSubmit(this.onSubmit)} >
        <FormGroup>
          <Label for="signUpEmail">Email</Label>
          <Field 
            className="form-control"
            name="email"
            type="text"
            component="input"
            id="signUpEmail"
            placeholder="Enter an email"
            autoComplete="off"
          />
        </FormGroup>
        <FormGroup>
          <Label for="signUpPassword">Password</Label>
          <Field 
          className="form-control"
            name="password"
            type="password"
            component="input"
            id="signUpPassword" 
            placeholder="Enter a password"
            autoComplete="off"
          />
        </FormGroup>
        <div className="text-right">
          <Button className="mb-2" color="primary">Sign Up</Button>
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
    reduxForm({ form: 'signup' })
  )(SignUp);