import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

class AddVehicle extends Component {
  constructor(props) {
        super(props)
      
        this.state = {
           
        }
        this.onSubmit = this.onSubmit.bind(this);
      }
      
      onSubmit(event) {
          event.preventDefault();
  
          this.props.onAdd(this.makeInput.value, this.modelInput.value, this.yearInput.value);
  
          this.makeInput.value = "";
          this.modelInput.value = "";
          this.yearInput.value = "";
      }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <h3>Add a vehicle</h3>
        <FormGroup>
          <input
            placeholder="Model"
            ref={makeInput => (this.makeInput = makeInput)}
          />
        </FormGroup>
        <FormGroup>
          <input
            placeholder="Make"
            ref={modelInput => (this.modelInput = modelInput)}
          />
        </FormGroup>
        <FormGroup>
          <input
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
