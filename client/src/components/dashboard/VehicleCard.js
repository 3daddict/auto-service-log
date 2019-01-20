import React, { Component } from "react";

class ProductItem extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isEdit: false
        }
  
  
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
      }
  
      onEdit() {
  
          this.setState({
              isEdit: true
          });
      }
  
      onEditSubmit(event) {
          event.preventDefault();
  
          this.props.onEditSubmit(this.makeInput.value, this.modelInput.value, this.yearInput.value, this.props.make);
  
          this.setState({
              isEdit: false
          })
      }
  
      onDelete() {
          const { onDelete, make } = this.props;
  
          onDelete(make);
      }
      
    render() {
      const { make, model, year } = this.props;
  
      return (
        <div>
            {
                this.state.isEdit ? ( 
                      <form onSubmit={this.onEditSubmit}>
                          <input placeholder="Make" ref={makeInput => this.makeInput = makeInput} defaultValue={make} />
                          <input placeholder="Model" ref={modelInput => this.modelInput = modelInput} defaultValue={model} />
                          <input placeholder="Year" ref={yearInput => this.yearInput = yearInput} defaultValue={year} />
                          <button>Save</button>
                      </form>
                 ) : ( 
                  <div>
                  <span>{make}</span> | <span>{model}</span> | <span>{year}</span>
                      {' | '}
                  <button onClick={this.onEdit}>Edit</button>
                      {' | '}
                  <button onClick={this.onDelete}>Delete</button>
                  </div>
                  )
            }
          
        </div>
      );
    }
  }
  

export default ProductItem;
