import React from 'react';
import { UncontrolledCollapse, Button, Card } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import TableLog from '../TableLog/TableLog';

const Collapse = (props, children) => (
  <div>
    <InputGroup>
    <Input 
    name={props.search} 
    value={props.value} 
    onChange={props.handleInputChange} />
    <InputGroupAddon addonType="append">
        <Button color="info" id="toggler" onClick={props.handleFormSubmit} style={{ marginBottom: '1rem' }}>
        Toggle
        </Button> 
    </InputGroupAddon>
    </InputGroup>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
       <TableLog glucoseSchema={props.glucoseSchema} />
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default Collapse;