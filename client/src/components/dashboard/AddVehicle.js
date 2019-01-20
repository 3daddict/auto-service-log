import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

const AddVehicle = ({
    make,
    model,
    year,
    onHandleInputChange,
    onHandleSubmit
  }) => (
    <Form onSubmit={onHandleSubmit}>
      <h3>Add a vehicle</h3>
      <FormGroup>
        <Input
          name="make"
          placeholder="Make i.e Nissan"
          value={make}
          onChange={onHandleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="model"
          placeholder="Model i.e 370z"
          value={model}
          onChange={onHandleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="year"
          placeholder="Year"
          value={year}
          onChange={onHandleInputChange}
        />
      </FormGroup>
      <Button type="submit">Add</Button>
      <hr />
    </Form>
  );
  
  export default AddVehicle;
