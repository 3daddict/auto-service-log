import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUp extends Component {

  render() {
    return (
      <Container>
      <Form>
        <FormGroup>
          <Label for="signUpEmail">Email</Label>
          <Field 
            name="email"
            type="text"
            component={Input}
            id="signUpEmail"
            placeholder="Enter an email"
            autoComplete="off"
          />
        </FormGroup>
        <FormGroup>
          <Label for="signUpPassword">Password</Label>
          <Field 
            name="password"
            type="password"
            component={Input}
            id="signUpPassword" 
            placeholder="Enter a password"
            autoComplete="off"
          />
        </FormGroup>
    </Form>
      </Container>
    )
  }
}

export default reduxForm({ form: 'signup' })(SignUp);
