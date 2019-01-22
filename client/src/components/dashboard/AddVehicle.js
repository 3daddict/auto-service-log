import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

const AddVehicle = ({
  make,
  model,
  year,
  onHandleSubmit,
  onHandleChange
}) => (
  <Form onSubmit={onHandleSubmit}>
    <h3>Add a vehicle</h3>
    <FormGroup>
      <Input
        name="make"
        placeholder="Vehicle's Make"
        value={make || ""}
        onChange={onHandleChange}
      />
    </FormGroup>
    <FormGroup>
      <Input
        name="model"
        placeholder="Vehicle's Model"
        value={model || ""}
        onChange={onHandleChange}
      />
    </FormGroup>
    <FormGroup>
      <Input
        name="year"
        placeholder="Vehicle's Year"
        value={year || ""}
        onChange={onHandleChange}
      />
    </FormGroup>
    <div className="text-right">
      <Button className="text-right" color="success" type="submit">
        Add
      </Button>
    </div>
    <hr />
  </Form>
);

export default AddVehicle;
