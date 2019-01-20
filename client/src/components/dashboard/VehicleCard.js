import React, { Fragment } from "react";
import { Col, Card, CardTitle, CardSubtitle} from "reactstrap";
import SettingsGroup from './SettingsGroup';

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
          <SettingsGroup />
        </div>
      </Card>
    </Col>
  </Fragment>
);

export default VehicleCard;
