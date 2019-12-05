import React from 'react';
import { UncontrolledCollapse, Card } from 'reactstrap';
import TableLog from '../TableLog/TableLog';

const Collapse = (props, children) => (
  <div>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
       <TableLog />
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default Collapse;