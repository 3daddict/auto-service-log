import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import AddVehicle from "../components/dashboard/AddVehicle";
import VehicleCard from "../components/dashboard/VehicleCard";

const cardListDB = [
  {
    make: 1,
    make: "Volvo",
    model: "S40 T5",
    year: 2008,
    service: {
      serviceType: "Oil Change",
      serviceMilage: 62093
    }
  },
  {
    make: 2,
    make: "Lexus",
    model: "IS300",
    year: 2004,
    service: {
      serviceType: "Oil Change",
      serviceMilage: 62093
    }
  }
];

localStorage.setItem("cardListDB", JSON.stringify(cardListDB));

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardListDB: JSON.parse(localStorage.getItem("cardListDB"))
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const cardListDB = this.getListItems();

    this.setState({
      cardListDB: cardListDB
    });
  }

  getListItems() {
    return this.state.cardListDB;
  }

  onAdd(make, model, year) {
    const cardListDB = this.getListItems();
    console.log('OUTPUT', make, model, year)

    cardListDB.push({
      make,
      model,
      year
    });

    this.setState({
      cardListDB: cardListDB
    });

    // localStorage.setItem("cardListDB", JSON.stringify(cardListDB));
  }

  onEditSubmit(make, model, year, originalMake) {
    let cardListDB = this.getListItems();

    cardListDB = cardListDB.map(listItem => {
      if (listItem.make === originalMake) {
        listItem.make = make;
        listItem.model = model;
        listItem.year = year;
      }
      return listItem;
    });

    this.setState({
      cardListDB: cardListDB
    });
  }

  onDelete(make) {
    const cardListDB = this.getListItems();
    const filteredProducts = cardListDB.filter(product => {
      return product.make !== make;
    });

    this.setState({
      cardListDB: filteredProducts
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>My Dashboard</h1>

        <Container>
          <AddVehicle onAdd={this.onAdd} />
        </Container>
        <Container>
          <Row>
            {this.state.cardListDB.map(listItem => {
              return (
                <VehicleCard
                  key={listItem.make}
                  {...listItem}
                  onDelete={this.onDelete}
                  onEditSubmit={this.onEditSubmit}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
