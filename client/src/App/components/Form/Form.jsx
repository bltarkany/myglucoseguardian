import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import "./Form.css";

const FoodInput = (props) => {
    return (
      <Form>
        <FormGroup>
          <Label for="cal-fd">Calories</Label>
          <Input type="number" id="cal-fd" placeholder="Calories" />
        </FormGroup>
        <FormGroup>
          <Label >Total Fats</Label>
          <Input type="number" placeholder="grams" />
        </FormGroup>
        <FormGroup>
          <Label>Carbs</Label>
          <Input type="number" placeholder="grams" />
        </FormGroup>
        <FormGroup>
          <Label>Sugars</Label>
          <Input type="number" placeholder="grams" />
        </FormGroup>
        <FormGroup>
          <Label>Dietary Fiber</Label>
          <Input type="number" placeholder="grams" />
        </FormGroup>
        <FormGroup>
          <Label>Dietary Fiber</Label>
          <Input type="number" placeholder="grams" />
        </FormGroup>
        <FormGroup>
          <Label>Dietary Fiber</Label>
          <Input type="number" placeholder="grams" />
        </FormGroup>
        <FormGroup>
          <Label>Which meal was this?</Label>
          <Input type="select" name="select">
            <option selected>Options</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </Input>
        </FormGroup>
        <Button color="info">Submit</Button>
      </Form>
    );
}


const Search = (props) => {
    return (
       <div>
            <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                    <Button color="primary">To the Right!</Button>
                </InputGroupAddon>
            </InputGroup>
       </div>
    )
}

  
export default Example;