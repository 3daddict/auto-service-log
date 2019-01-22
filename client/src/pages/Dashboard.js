import "bootstrap/scss/bootstrap.scss";
import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import axios from 'axios';
import AddVehicle from "../components/dashboard/AddVehicle";
import VehihcleCard from "../components/dashboard/VehicleCard";

const dummyDB = [
  {
    id: "1",
    make: "Volvo",
    model: "S40 T5",
    year: 2008,
    service: {
      serviceType: "Oil Change",
      serviceMilage: 62093
    }
  },
  {
    id: "2",
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
    vehicleDatabase: [],
    id: "",
    make: "",
    model: "",
    year: null
  };

  componentWillMount = () => {
    this.readData();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  //CREATE data from the form submission
  handleSubmit = event => {
    event.preventDefault();
    //destructure
    const { make, model, year } = this.state;
    //conditional input vaLidation
    if (!make || !model || !year) return null;
    //setState + reset form values onSubmit
    this.setState(prevState => ({
      //destructure previous values, submit, then reset
      vehicleDatabase: [...prevState.vehicleDatabase, { make, model, year }],
      make: "",
      model: "",
      year: ""
    }));
  };

  //READ data from DB and then setState
  readData = () => {
    //Axios call to DB
    // axios.get('../dummyData/dummyData.json').then((response) => {
    //   console.log('Response:', response);
    //   this.setState({
    //     vehicleDatabase: response
    //   })
    //   .catch(function (error) {
    //     console.log('DB Connection Error', error);
    //   });
    // })
    this.setState({
          vehicleDatabase: dummyDB
        })
  };

  //UPDATE data from DB
  updateData = editedVehicle => {
    //Axios update will go here...
    //assing a copy of vehicle array with modified value for the editedVehicle.
    const vehicleDatabase = this.state.vehicleDatabase.map(vehicle => {
      return vehicle.id === editedVehicle.id ? editedVehicle : vehicle;
    });
    //set new state
    this.setState({
      vehicleDatabase
    });
  };

  // DELETE function wont delete new vehicleDatabase because they are not created with an ID,
  // once you hoock up database you'll use the DB's id instead of 1, 2, 3.
  deleteData = vehicleId => {
    //Axios delete will go here...
    //assing a new vehicleDatabase const removing the to delete filtering by id
    const vehicleDatabase = this.state.vehicleDatabase.filter(
      vehicle => vehicle.id !== vehicleId
    );
    this.setState({
      vehicleDatabase
    });
  };

  render() {
    return (
      <Container>
        <h1>Vehicle Dashboard</h1>
        <p>Browse or add a vehicle</p>
        <AddVehicle
          {...this.state}
          onHandleChange={this.handleChange}
          onHandleSubmit={this.handleSubmit}
        />
        <Row>
          {this.state.vehicleDatabase.map((vehicle, key) => (
            <VehihcleCard
              {...vehicle}
              key={key}
              updateData={this.updateData}
              deleteData={this.deleteData}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
