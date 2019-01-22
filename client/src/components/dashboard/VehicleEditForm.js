import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default class VehicleEditForm extends React.Component {
  state = {
	id: "",
    make: "",
    model: "",
    year: ""
  };

  //once component mounts execute this
	componentDidMount = () => {
		//deconstruct props
		const { id, make, model, year } = this.props.vehicleData;
		//set initial state
		this.setState({
			id,
			make,
			model,
			year
		});
	};

  //function called onChange
  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //when click editin edit form
  onHandleSubmit = event => {
    event.preventDefault();
    //call editSubmit function in StudentCard with current state
    const editedValues = this.state;
    this.props.editSubmit(editedValues);
  };

  onCancel = () => {
    //call cancelSubmit function on StudentCard to render StudentCard and hide form
    this.props.cancelSubmit(this.state.id);
  };

  render() {
    const { make, model, year } = this.state;

    return (
      <Form onSubmit={this.onHandleSubmit} >
        <h3>Edit Student</h3>
        <FormGroup>
          <Input
            name="make"
            placeholder={this.props.vehicleData.make}
            value={make}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="model"
            placeholder={this.props.vehicleData.model}
            value={model}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="year"
            placeholder={this.props.vehicleData.year}
            value={year}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <div className="text-right">
			<Button color="danger" className="text-right mr-2 mb-2" onClick={this.onCancel}>
            Cancel
          </Button>
          <Button color="success" className="text-right mr-2 mb-2" type="submit">
            Save
          </Button>
        </div>
      </Form>
    );
  }
}
