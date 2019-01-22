import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Toggle from "../Toggle";

const AddVehicle = ({ make, model, year, onHandleSubmit, onHandleChange }) => (
  <Form onSubmit={onHandleSubmit}>
    <Toggle>
      {({ on, off, toggle }) => (
        <div>
          {on && (
            <div>
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
                <Button
                  className="text-right mr-2 mb-2"
                  color="secondary"
                  onClick={toggle}
                >
                  Hide
                </Button>
                <Button
                  className="text-right mr-2 mb-2"
                  color="success"
                  type="submit"
                >
                  Add
                </Button>
              </div>
            </div>
          )}
          {off && (
            <Button className="mt-2 mb-2" color="success" onClick={toggle}>
              Add a vehicle
            </Button>
          )}
        </div>
      )}
    </Toggle>

    <hr />
  </Form>
);

export default AddVehicle;
