import React, { Fragment } from "react";
import { Col, Card, CardTitle, CardSubtitle, Button } from "reactstrap";

const VehicleCard = ({ make, model, year }) => (
  <Fragment>
    <Col className="mt-2 mb-4" md="6">
      <Card body>
        <CardTitle>{make}</CardTitle>
        <CardSubtitle className="lead text-muted">
          {model} | {year}
        </CardSubtitle>
        <p className="text-center">LIST ELEMENTS WILL GO HERE...</p>
        <div className="text-right">
          <Button className="mr-2 mb-2" color="info">
            Edit
          </Button>
          <Button className="mr-2 mb-2" color="danger">
            Delete
          </Button>
        </div>
      </Card>
    </Col>
  </Fragment>
);

export default VehicleCard;
