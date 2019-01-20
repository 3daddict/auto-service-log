import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class AddVehicle extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onAdd(
      this.makeInput.value,
      this.modelInput.value,
      this.yearInput.value
    );

    this.makeInput.value = "";
    this.modelInput.value = "";
    this.yearInput.value = "";
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <h3>Add a vehicle</h3>
        <FormGroup>
          <Input
            placeholder="Model"
            ref={makeInput => (this.makeInput = makeInput)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Make"
            ref={modelInput => (this.modelInput = modelInput)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Year"
            ref={yearInput => (this.yearInput = yearInput)}
          />
        </FormGroup>
        <Button>Add</Button>
        <hr />
      </Form>
    );
  }
}

export default AddVehicle;
