import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { InputGroup, InputGroupAddon } from 'reactstrap';
import "./Form.css";


const InfoInput = (props) => {
    return(
        <input className="form-control" {...props} />
    );
}

const MealMenu = (props) => {
    return (
        <div className="form-group">
          <input type="select" {...props}>
            <option selected>Options</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </input>
        </div>
    )
}

const Submit = (props) => {
    return (
        <button type="button" class="btn btn-info" {...props} >Submit</button>
    )
}


  
export {
    MealMenu,
    Submit,
    InfoInput
}