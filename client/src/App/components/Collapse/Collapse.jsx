import React from 'react';
import { UncontrolledCollapse, Card } from 'reactstrap';

const Collapse = (props) => (
  <div>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
       {/* <TableLog {...props.dateCollected} {...props.timeCollected} {...props.glucoseLevel} /> */}
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default Collapse;