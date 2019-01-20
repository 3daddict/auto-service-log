import React, { Component } from "react";

class AddVehicle extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           
        }
        this.onSubmit = this.onSubmit.bind(this);
      }
      
      onSubmit(event) {
          event.preventDefault();
  
          this.props.onAdd(this.makeInput.value, this.modelInput.value, this.yearInput.value);
  
          this.makeInput.value = "";
          this.modelInput.value = "";
          this.yearInput.value = "";
      }
     
    render() {
  
      return (
        <form onSubmit={this.onSubmit} >
            <h3>Add a vehicle</h3>
            <input placeholder="Model" ref={makeInput => this.makeInput = makeInput} />
            <input placeholder="Make" ref={modelInput => this.modelInput = modelInput} />
            <input placeholder="Year" ref={yearInput => this.yearInput = yearInput} />
            <button>Add</button>
            <hr />
        </form>
      );
    }
  }

export default AddVehicle;
