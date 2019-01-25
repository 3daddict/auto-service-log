import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import { Button, Container, Form, FormGroup, Label } from "reactstrap";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

class SignUp extends Component {
  state = {
    inputError: ""
  };

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit = formProps => {
    if (
      formProps.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)
    ) {
      this.setState({
        inputError: "Please enter a valid email address"
      });
    } else {
      this.props.signup(formProps, () => {
        this.context.router.history.push("/dashboard");
      });
    }
  };

  render() {
    const { inputError } = this.state;
    const { handleSubmit } = this.props;

    return (
      <Container>
        <Form onSubmit={handleSubmit(this.onSubmit)}>
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
            <Button className="mb-2" color="primary">
              Sign Up
            </Button>
            <p className="text-danger">{inputError}</p>
            <p className="text-danger">{this.props.errorMessage}</p>
          </div>
        </Form>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signup" })
)(SignUp);
