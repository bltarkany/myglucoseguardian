import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { InputGroup, InputGroupAddon } from 'reactstrap';
import Title from '../components/Title/Title';
import { Submit, InfoInput } from '../components/Form/Form';

import API from "../utils/API";
import Header from "../components/Header/Header.jsx";
import Navigation from "../components/Navigation/Navigation";


// compiled by BT
class Food extends Component {

    state = {
        search: "",
        foodList: [],
        itemId: 0,
        name: "",
        brand: "",
        servingSize: 0,
        servingQty: 0,
        servingGrams: 0,
        calories: 0,
        totalFat: 0,
        saturatedFat: 0,
        cholesterol: 0,
        carbs: 0,
        dietaryFiber: 0,
        sugars: 0,
        protein: 0,
        sodium: 0,
        mealTime: ""
    };

    foodSearch = () => {
        API.getFood(this.state.search)
         .then(res => {

         }).catch((err) => {

         })
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            
            <Container>
                <Header />
                <Navigation />
                <br></br>
                <Row>
                    <Col xs="12" sm="12">
                        <Title>
                            <h1>Food Calculations and Carb Tracking</h1>
                            <hr></hr>
                        </Title>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="7">
                        <h4>Search for a Food Item</h4>
                        <InputGroup>
                            <InfoInput 
                            name="search" value={this.state.search}
                            onChange={this.handleInputChange} />
                            <InputGroupAddon>
                                <Submit onClick={this.handleFormSubmit} />
                            </InputGroupAddon>
                        </InputGroup>
                        <br></br>
                        <h5>Choose from the options below:</h5>
                    </Col>
                    <Col xs="12" sm="12" md={{ size: 4, offset: 1}}>
                        <h4>Custom Nutritional Info</h4>
                        <Form>
                            <Row>
                                <Col xs="12" sm="12" md="6">
                                    <FormGroup>
                                        <Label>Calories</Label>
                                        <InfoInput 
                                        name="calories" value={this.state.calories}
                                        onChange={this.handleInputChange}
                                        type="number" placeholder="Calories Kcal" />

                                        <Label>Carbs</Label>
                                        <InfoInput
                                        name="carbs" value={this.state.carbs}
                                        onChange={this.handleInputChange} 
                                        type="number" placeholder="in grams" />
                            
                                        <Label>Sugars</Label>
                                        <InfoInput
                                        name="sugars" value={this.state.sugars}
                                        onChange={this.handleInputChange}
                                        type="number" placeholder="in grams" />
                                    </FormGroup>
                                </Col>
                                <Col xs="12" sm="12" md="6">
                                    <FormGroup>
                                        <Label>Total Fats</Label>
                                        <InfoInput 
                                        name="totalFat" value={this.state.totalFat}
                                        onChange={this.handleInputChange}
                                        type="number" placeholder="in grams" />

                                        <Label>Dietary Fiber</Label>
                                        <InfoInput 
                                        name="dietaryFiber" value={this.state.dietaryFiber}
                                        onChange={this.handleInputChange}
                                        type="number" placeholder="in grams" />
                                        
                                        <Label>Proteins</Label>
                                        <InfoInput 
                                        name="protein" value={this.state.protein}
                                        onChange={this.handleInputChange}
                                        type="number" placeholder="in grams" />
                                    </FormGroup>
                                </Col>
                            </Row>
                                <Row>
                                    <Col xs="12" sm="12">
                                    <FormGroup>
                                        <Label>Which meal was this?</Label>
                                        <Input type="select" name="mealTime"
                                        value={this.state.mealTime}
                                        onChange={this.handleInputChange} >
                                        <option selected>Options</option>
                                        <option>Breakfast</option>
                                        <option>Lunch</option>
                                        <option>Dinner</option>
                                        <option>Snack</option>
                                        </Input>
                                    </FormGroup>
                                    </Col>
                                </Row>
                            <Submit onClick={this.handleFormSubmit} />
                        </Form>
                    </Col>
                </Row>
                <br></br>
            </Container>
        
           
        );
    }
}

export default Food;