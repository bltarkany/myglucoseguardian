import React from 'react';
import { UncontrolledCollapse, Button, Card } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Label } from 'reactstrap';
import TableLog from '../TableLog/TableLog';

const Collapse = (props, children) => (
  <div>
    <Label>Search by Date</Label>
    <InputGroup>
    <Input 
    name={props.name} 
    value={props.value} 
    onChange={props.handleInputChange}
    type="date" />
    <InputGroupAddon addonType="append">
        <Button color="info" id="toggler" onClick={props.handleFormSubmit} style={{ marginBottom: '1rem' }}>
        search
        </Button> 
    </InputGroupAddon>
    </InputGroup>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
       <TableLog />
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default Collapse;