import React, { Component } from "react";
import AddVehicle from '../components/dashboard/AddVehicle';
import VehicleCard from '../components/dashboard/VehicleCard';

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
      const cardListDB = this.getProducts();
  
      this.setState({
        cardListDB: cardListDB
      });
    }
  
    getProducts() {
      return this.state.cardListDB;
    }
  
    onAdd(make, model, year) {
      const cardListDB = this.getProducts();
  
      cardListDB.push({
          make,
          model,
          year
      })
      this.setState({
          cardListDB: cardListDB
      })
    }
  
    onEditSubmit(make, model, year, originalMake) {
        let cardListDB = this.getProducts();
  
  
          cardListDB = cardListDB.map(product => {
              if(product.make === originalMake) {
                  product.make = make;
                  product.model = model;
                  product.year = year;
              }
              return product;
          });
  
          this.setState({
              cardListDB: cardListDB
          })
    }
  
    onDelete(make) {
      const cardListDB = this.getProducts();
      const filteredProducts = cardListDB.filter(product => {
          return product.make !== make;
      })
      
      this.setState({
          cardListDB: filteredProducts
      })
    }
  
    render() {
      return (
        <div className="App">
          <h1>My Dashboard</h1>
  
          <AddVehicle 
              onAdd={this.onAdd}
          />
  
          {this.state.cardListDB.map(product => {
            return (
              <VehicleCard
                key={product.make}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            );
          })}
        </div>
      );
    }
  }

  export default Dashboard;