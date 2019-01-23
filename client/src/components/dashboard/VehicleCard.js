import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardTitle, CardSubtitle, Button } from "reactstrap";
import SettingsGroup from "./SettingsGroup";
import VehicleEditForm from "./VehicleEditForm";

export default class VehicleCard extends React.Component {
  state = {
    //Toggle state to conditional rendering
    toggleEdit: false
  };

  handleEditClick = () => {
    //show edit form when clicking initial edit button
    this.setState({
      toggleEdit: true
    });
  };

  handleEditSubmit = editedValues => {
    //assing to edited field comming from VehicleEditForm the id of the student
    editedValues.id = this.props.id;
    //call updateData function in App with editedValues
    this.props.updateData(editedValues);
    //change state to render student card
    this.setState({
      toggleEdit: false
    });
  };

  handleCancelSubmit = () => {
    //change state to render student card
    this.setState({
      toggleEdit: false
    });
  };

  handleDeleteClick = () => {
    //call deleteData function on app with vehicleId
    const vehicleId = this.props.id;
    this.props.deleteData(vehicleId);
  };

  // this renderContent function written outside render method to use if statement
  renderContent = () => {
    //deconstruct props
    const { id, make, model, year } = this.props;
    //if toggleEdit is false show student card
    if (!this.state.toggleEdit) {
      return (
        <Fragment>
          <Col className="mt-2 mb-4" md="6">
            <Card body id={id}>
              <CardTitle className="lead">{make}</CardTitle>
              <CardSubtitle className="text-muted">
                {model} | {year}
              </CardSubtitle>
              <div className="text-right">
                <Link to="/vehicle-details">
                  <Button className="mt-2 mb-2 mr-2" color="primary">
                    Details
                  </Button>
                </Link>
                <SettingsGroup
                  handleEditClick={this.handleEditClick}
                  handleDeleteClick={this.handleDeleteClick}
                />
              </div>
            </Card>
          </Col>
        </Fragment>
      );
    }
    return (
      //if toggleEdit is true show VehicleEditForm
      <VehicleEditForm
        vehicleData={this.props}
        editSubmit={this.handleEditSubmit}
        cancelSubmit={this.handleCancelSubmit}
      />
    );
  };

  render() {
    return this.renderContent();
  }
}
