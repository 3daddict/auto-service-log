import React, { Component } from 'react'
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import CreateCard from './CreateCard';

export default class VehicleLog extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        modal: false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const vMake = data.get('vehicle-make');
        const vModel = data.get('vehicle-model');
        const vYear = data.get('vehicle-year');

        this.setState({
            modal: !this.state.modal
        });

        this.createCard.createNewCard(vMake, vModel, vYear);
        
        fetch('/api/form-submit-url', {
          method: 'POST',
          body: data,
        });
        
      }


  render() {
    return (
        <React.Fragment>
            <Container className="add-title-container">
                <h4 className="align-middle mr-2">Add a vehicle</h4>
                <Button onClick={this.toggle} color="info" size="sm">+</Button>
            </Container>
            <Row className="m-4 card-container">
                <CreateCard onRef={ref => (this.createCard = ref)} />
            </Row>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Vehicle Details</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label sm={2} htmlFor="vehicle-make">Make:</Label>
                            <Col sm={10}>
                            <Input type="text" name="vehicle-make" id="vehicleMake" placeholder="Enter Make i.e. Nissan" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2} htmlFor="vehicle-model">Model:</Label>
                            <Col sm={10}>
                            <Input type="text" name="vehicle-model" id="vehicleModel" placeholder="Enter Model i.e. 370Z" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2} htmlFor="vehicle-year">Year:</Label>
                            <Col sm={10}>
                            <Input type="text" name="vehicle-year" id="vehicleYear" placeholder="Enter Year i.e. 2009" />
                            </Col>
                        </FormGroup>
                        <Button type="submit" className="float-right" color="primary">Create</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
  }
}
