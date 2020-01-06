import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Toggle from "../Toggle";

const AddVehicle = ({ make, model, year, loadingMakes, loadingModels, onHandleSubmit, onHandleMakeChange, onHandleYearChange, onHandleModelChange, makes, models }) => (
  <Form onSubmit={onHandleSubmit}>
    <Toggle>
      {({ on, off, toggle }) => (
        <div>
          {on && (
            <div>
              <h3>Add a vehicle</h3>
                <FormGroup>
                <Input
                  name="year"
                  placeholder="Vehicle's Year"
                  value={year || ""}
                  onChange={onHandleYearChange}
                />
              </FormGroup>
              <FormGroup>
                <select
                  disabled={year === null}
                  name="make"
                  placeholder="Vehicle's Make"
                  value={make || ""}
                  onChange={onHandleMakeChange}
                >

                  {makes.length ? [<option>Choose Make</option>].concat(makes.map(make => <option key={make.name} value={make.name}>{make.name}</option>)) :  loadingMakes ? <option>Loading...</option> : <option>Choose a Year</option>}
                </select>
              </FormGroup>
              <FormGroup>
                <select
                  disabled={make === null}
                  name="model"
                  placeholder="Vehicle's Model"
                  value={model || ""}
                  onChange={onHandleModelChange}
                >
                  {models.length ? [<option>Choose Model</option>].concat(models.map(model=> <option key={model.name} value={model.name}>{model.name}</option>)) : loadingModels ? <option>Loading...</option> : <option>Choose a Make</option>}
                </select>
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
