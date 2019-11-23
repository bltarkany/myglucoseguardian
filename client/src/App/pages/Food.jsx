import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import Title from '../components/Title/Title';
import { FoodInput, Search, Build, Name, InputSection, MealMenu, Submit } from '../components/Form/Form';

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
        sodium: 0

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
                <Row>
                    <Col xs="12" sm="12">
                        <Title>
                            <h1>Food Calculations and Carbs Tracking</h1>
                            <hr></hr>
                        </Title>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="7">
                        <Search
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        onClick={this.handleFormSubmit}
                        ></Search>
                    </Col>
                    <Col xs="12" sm="12" md={{ size: 4, offset: 1}}>
                        <FoodInput></FoodInput>
                    </Col>
                </Row>
            </Container>
        
           
        );
    }
}

export default Food;