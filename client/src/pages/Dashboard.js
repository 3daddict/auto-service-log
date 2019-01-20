import React, { Component } from "react";
import { Container, Row, Button } from "reactstrap";
import AddVehicle from "../components/dashboard/AddVehicle";
import VehicleCard from "../components/dashboard/VehicleCard";

const cardListDB = [
  {
    id: 1,
    make: "Volvo",
    model: "S40 T5",
    year: 2008,
    service: {
      serviceType: "Oil Change",
      serviceMilage: 62093
    }
  },
  {
    id: 2,
    make: "Lexus",
    model: "IS300",
    year: 2004,
    service: {
      serviceType: "Oil Change",
      serviceMilage: 62093
    }
  }
];

class Dashboard extends Component {

    state = {
        cardListDB,
        make: "",
        model: "",
        year: ""
      };
    
      /* 
      This method handles input changes by utilizing the event: event.target.name (firstName, description)
      that was provided by the input and controlling the input's value by setting 
      event.target.value to state. 
      An example would be: firstName: "Sheila", description: "Female"
    */
      handleInputChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
      };
    
      /* 
    This method resets back to initial state
    */
      handleReset = () => {
        this.setState({
          cardListDB,
          make: "",
          model: "",
          year: ""
        });
      };
    
      /* 
      This method handles form submission by spreading out previous cardListDB entries
      and adding in the current firstName and description state values. 
      In addition, it also resets the input values.
    */
      handleSubmit = e => {
        e.preventDefault();
    
        const { make, model, year } = this.state;
    
        if (!make || !model || !year) return null;
    
        this.setState(prevState => ({
          cardListDB: [...prevState.cardListDB, { make, model, year }],
          make: "",
          model: "",
          year: ""
        }));
      };
    
      render = () => (
        <div className="container-fluid">
          <Container>
            <AddVehicle
              {...this.state}
              onHandleInputChange={this.handleInputChange}
              onHandleSubmit={this.handleSubmit}
            />
          </Container>
          <Container>
            <Row>
              {this.state.cardListDB.map((listItem, key) => (
                <VehicleCard key={key} {...listItem} />
              ))}
              <Button type="button" onClick={this.handleReset}>
                Reset
              </Button>
            </Row>
          </Container>
        </div>
      );
    }

export default Dashboard;
