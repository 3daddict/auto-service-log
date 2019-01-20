import React, { Component } from "react";
import { Col, Card, CardTitle, CardSubtitle, Button } from "reactstrap";

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    };

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

    this.props.onEditSubmit(
      this.makeInput.value,
      this.modelInput.value,
      this.yearInput.value,
      this.props.make
    );

    this.setState({
      isEdit: false
    });
  }

  onDelete() {
    const { onDelete, make } = this.props;

    onDelete(make);
  }

  render() {
    const { make, model, year } = this.props;

    return (
      <React.Fragment>
        {this.state.isEdit ? (
          <form onSubmit={this.onEditSubmit}>
            <input
              placeholder="Make"
              ref={makeInput => (this.makeInput = makeInput)}
              defaultValue={make}
            />
            <input
              placeholder="Model"
              ref={modelInput => (this.modelInput = modelInput)}
              defaultValue={model}
            />
            <input
              placeholder="Year"
              ref={yearInput => (this.yearInput = yearInput)}
              defaultValue={year}
            />
            <button>Save</button>
          </form>
        ) : (
          // CARD START
          <Col className="mt-2 mb-4" md="6">
            <Card body>
              <CardTitle>{make}</CardTitle>
              <CardSubtitle className="lead text-muted">
                {model} | {year}
              </CardSubtitle>
              <p className="text-center">LIST ELEMENTS WILL GO HERE...</p>
              <div className="text-right">
              <Button className="mr-2 mb-2" color="info" onClick={this.onEdit}>
                Edit
              </Button>
              <Button className="mr-2 mb-2" color="danger" onClick={this.onDelete}>
                Delete
              </Button>
              </div>
            </Card>
          </Col>
          // CARD END
        )}
      </React.Fragment>
    );
  }
}

export default ProductItem;
