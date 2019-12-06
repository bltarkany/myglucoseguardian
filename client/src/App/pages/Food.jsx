import React, { Component } from "react";
import { Link } from 'react-router-dom';
// ============== Grid ===================
import { Container, Row, Col } from 'reactstrap';
// ============== Form ===================
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { InputGroup, InputGroupAddon } from 'reactstrap';
import { Submit, InfoInput } from '../components/Form/Form';
// ============== Title ==================
import Title from '../components/Title/Title';
// ============== Card ===================
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardBody from '../components/Card/Card';
// =============== Food Database pull ===========
import API from "../utils/API";
// ============= Auth0 and NavBar
import NavBar from "../components/NavBar/NavBar";



// compiled by BT
class Food extends Component {
    state = {
        search: "",
        foodList: null,
        item: this.emptyItem(),
        name: "",
        brand: "",
        calories: 0,
        totalFat: 0,
        carbs: 0,
        dietaryFiber: 0,
        sugars: 0,
        protein: 0,
        mealTime: ""
    };

    // compile empty card body as a place holder
    emptyItem() {
        let emptyObj = {
            serving_qty: "",
            serving_unit: "",
            serving_weight_grams: "",
            nf_calories: "",
            nf_total_fat: "",
            nf_saturated_fat: "",
            nf_total_carbohydrate: "",
            nf_sugars: "",
            nf_dietary_fiber: "",
            nf_protein: "",
            nf_sodium: ""
        };
        let obj = [];
        for (var i = 0; i < 20; i++) {
            obj.push(emptyObj);
        }
        return obj;
    };

    // search for branded food item list
    foodSearch = (search) => {
        API.getFood(search)
         .then(res => {
            this.setState({
                foodList: res
            });
         }).catch((err) => {
            console.log(err);
        });

        this.setState({
            search: ""
        });
    };

    // search for single item selected
    itemSearch = (id, index) => {
        let newList = this.state.item;
        API.getItem(id)
        .then(res => {
            newList[index] = res[0];
            this.setState({
                item: newList
            });
        }).catch((err) => {
            console.log(err);
        });
    };

    // handle push food item to the database
    handleSubmit = event => {
        event.preventDefault();
        let foodLog = {
            meal: "celery",
            mealTime: this.state.mealTime,
            calories: this.state.calories,
            fats: this.state.fats
        }
    };

    // handle input change of the search
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // handle submit of the search request
    handleFormSubmit = event => {
        event.preventDefault();
        this.foodSearch(this.state.search);
    };

    render() {
        return (
            
            <Container>
                <NavBar/>
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
                            <InputGroupAddon addonType="append">
                                <Submit onClick={this.handleFormSubmit} />
                            </InputGroupAddon>
                        </InputGroup>
                        <br></br>
                        <h5>Choose from the options below:</h5>
                        <br></br>
                        {this.state.foodList ? (
                            <Accordion defaultActiveKey="0">                               
                                {this.state.foodList.map((food, index) => (
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey={index} onClick={ () => { this.itemSearch(food.nix_item_id, index) }}>
                                            <strong>{food.brand_name_item_name}</strong>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={index}>
                                            <CardBody obj={this.state.item[index]}></CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                ))}
                            </Accordion>
                        ) : (
                            <h6>No items to display</h6>
                        )}
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
                                        type="number" />

                                        <Label>Carbs</Label>
                                        <InfoInput
                                        name="carbs" value={this.state.carbs}
                                        onChange={this.handleInputChange} 
                                        type="number" />
                            
                                        <Label>Sugars</Label>
                                        <InfoInput
                                        name="sugars" value={this.state.sugars}
                                        onChange={this.handleInputChange}
                                        type="number" />
                                    </FormGroup>
                                </Col>
                                <Col xs="12" sm="12" md="6">
                                    <FormGroup>
                                        <Label>Total Fats</Label>
                                        <InfoInput 
                                        name="totalFat" value={this.state.totalFat}
                                        onChange={this.handleInputChange}
                                        type="number" />

                                        <Label>Dietary Fiber</Label>
                                        <InfoInput 
                                        name="dietaryFiber" value={this.state.dietaryFiber}
                                        onChange={this.handleInputChange}
                                        type="number" />
                                        
                                        <Label>Proteins</Label>
                                        <InfoInput 
                                        name="protein" value={this.state.protein}
                                        onChange={this.handleInputChange}
                                        type="number" />
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
                                        <option defaultValue>Options</option>
                                        <option value="breakfast">Breakfast</option>
                                        <option value="lunch">Lunch</option>
                                        <option value="dinner">Dinner</option>
                                        <option value="snack">Snack</option>
                                        </Input>
                                    </FormGroup>
                                    </Col>
                                </Row>
                            <Submit onClick={this.handleSubmit} />
                        </Form>
                    </Col>
                </Row>
                <br></br>
            </Container>
        
           
        );
    }
}

export default Food;