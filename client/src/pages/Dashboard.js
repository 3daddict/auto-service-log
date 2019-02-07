import "bootstrap/scss/bootstrap.scss";
import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
import requireAuth from "../components/requireAuth";
import AddVehicle from "../components/dashboard/AddVehicle";
import VehihcleCard from "../components/dashboard/VehicleCard";

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
    //workaround mutating state directly...

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
  readData = async dispatch => {
    this.setState({
              vehicleDatabase: dummyDB
            });
    // axios.get("/getVehicles")
    //   .then(response => {
    //     this.setState({
    //       vehicleDatabase: response.data.vehicles
    //     });
    //     console.log('VDB', response.data.vehicles)
    //   })
    //   .catch(error => {
    //     console.log("Error fetching and parsing data", error);
    //   });
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

export default requireAuth(Dashboard);

const dummyDB = [
  {
    "id": "348tewhrgfi3u4asd5htwgfe978rhf",
    "make": "Volvo",
    "model": "S40 T5",
    "year": 2008,
    "services": {
      "oilChange": {
        "id_oc": "348tewhrgfi3wefweu45htwgfe978rhf",
        "mileage": 75000,
        "oilType": "5W-30",
        "filter": "Mann-Filter HU 719/8",
        "reminder": true,
        "reminderInterval": 10000
      },
      "tires": {
        "id_ti": "348tewhrgfi3u45htwgfe978rhf",
        "mileage": 82091,
        "reminder": true,
        "reminderInterval": 10000,
        "size": {
          "front": "205/50R17",
          "rear": "205/50R17"
        }
      },
      "brakes": {
        "mileage": {
          "id_bf": "348tewhrgf453t6i3u45htwgfe978rhf",
          "front": {
            "mileage": 67635,
            "rotation": false,
            "reminder": true,
            "reminderInterval": 10000
          },
          "rear": {
            "id_br": "348tewhrgfidsaff3u45htwgfe978rhf",
            "mileage": 63435,
            "rotation": false,
            "reminder": true,
            "reminderInterval": 10000
          }
        }
      },
      "registration": {
        "id_re": "348tewhrgfi3u43gyj45htwgfe978rhf",
        "date": "02/12/2018",
        "state": "CA",
        "reminder": true,
        "reminderInterval": 10000
      },
      "custom": {
        "id_cu": "348tewhrgfi3u45htwdfgaseerytgfe978rhf",
        "mileage": 67309,
        "customName": "Timing Belt",
        "customDesc": "changed timing belt",
        "reminder": true,
        "reminderInterval": 10000
      }
    }
  },
  {
    "id": "534643456rgfi3u4asd5htwgfe978rhf",
    "make": "Lexus",
    "model": "IS300",
    "year": 2008,
    "services": {
      "oilChange": {
        "id_oc": "534643456348tewhrgfi3wefweu45htwgfe978rhf",
        "mileage": 175000,
        "oilType": "5W-30",
        "filter": "Bosch",
        "reminder": true,
        "reminderInterval": 10000
      },
      "tires": {
        "id_ti": "534643456348tewhrgfi3u45htwgfe978rhf",
        "mileage": 182091,
        "reminder": true,
        "reminderInterval": 10000,
        "size": {
          "front": "215/45R17",
          "rear": "215/45R17"
        }
      },
      "brakes": {
        "mileage": {
          "id_bf": "534643456348tewhrgf453t6i3u45htwgfe978rhf",
          "front": {
            "mileage": 167635,
            "rotation": false,
            "reminder": true,
            "reminderInterval": 10000
          },
          "rear": {
            "id_br": "534643456348tewhrgfidsaff3u45htwgfe978rhf",
            "mileage": 163435,
            "rotation": false,
            "reminder": true,
            "reminderInterval": 10000
          }
        }
      },
      "registration": {
        "id_re": "534643456348tewhrgfi3u43gyj45htwgfe978rhf",
        "date": "02/12/2018",
        "state": "CA",
        "reminder": true,
        "reminderInterval": 10000
      },
      "custom": {
        "id_cu": "534643456348tewhrgfi3u45htwdfgaseerytgfe978rhf",
        "mileage": 167309,
        "customName": "Timing Belt",
        "customDesc": "changed timing belt",
        "reminder": true,
        "reminderInterval": 10000
      }
    }
  }
]
