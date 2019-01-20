import React, { Component } from "react";
import { Container, Row, Button } from "reactstrap";
import AddVehicle from "../components/dashboard/AddVehicle";
import VehicleCard from "../components/dashboard/VehicleCard";
import EditModal from '../components/dashboard/EditModal';

const cardListDB = [
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
        cardListDB: [],
        id: "",
        make: "",
        model: "",
        year: ""
      };

      componentWillMount = () => {
          this.readData();
      }
    
      //Event Handler for form values
      handleInputChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
      };
    
      //Create data from form submittion
      handleSubmit = e => {
        e.preventDefault();
        //destructure
        const { make, model, year } = this.state;
        //conditional for input validation
        if (!make || !model || !year) return null;
        //setState - reset form values
        this.setState(prevState => ({
            //destructure previous values, submit, then reset
          cardListDB: [...prevState.cardListDB, { make, model, year }],
          make: "",
          model: "",
          year: ""
        }));
      };

      //Read data from DB and then setState
      readData = () => {
          //Axios call will go here...

        this.setState({
            cardListDB
          });
      }

      updateData = (e) => {
          const currentDB = cardListDB;
          const selectedID = e.target.parentNode.id;
          const tempValue = "Gibberish"
          console.log('Value', e.target.name);

            currentDB.map((dbItem, key) => {
                console.log('dbItem:', dbItem);
                console.log('selectedID:', selectedID);

                if(selectedID === dbItem.id){
                    console.log('CODE TO CHANGE TRIGGERED');
                    this.setState({
                        // [e.target.name]: e.target.value
                        [e.target.name]: tempValue
                      });
                }
            });

      }

      handleReset = () => {
        this.setState({
          cardListDB,
          make: "",
          model: "",
          year: ""
        });
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
          <EditModal updateData={this.updateData} />
          <Container>
            <Row>
              {this.state.cardListDB.map((listItem, key) => (
                <VehicleCard 
                key={key} {...listItem} 
                updateData={this.updateData}
                />
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
