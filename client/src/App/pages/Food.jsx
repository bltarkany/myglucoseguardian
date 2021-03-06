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
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            foodList: null,
            item: this.emptyItem(),
            calories: 0,
            fats: 0,
            carbs: 0,
            dietFiber: 0,
            sugar: 0,
            proteins: 0,
            mealTime: "",
            auth0_id: this.props.user
        };
    }

    componentDidMount(){
        console.log(this.state.auth0_id);
    }
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

    // custom food log insert
    createFood = () => {
        let foodLog = {
            meal: "custom",
            mealTime: this.state.mealTime,
            calories: this.state.calories,
            fats: this.state.fats,
            carbs: this.state.carbs,
            sugar: this.state.sugar,
            dietFiber: this.state.dietFiber,
            proteins: this.state.proteins,
            id: this.state.auth0_id
        };
        // console.log(foodLog);
        API.createFood(foodLog)
        .then(res => {
            console.log(`Database creation success`);
           
        }).catch(err => {
            console.log(err)
        });
        this.setState({
            mealTime: "",
            calories: 0,
            fats: 0,
            carbs: 0,
            sugar: 0,
            dietFiber: 0,
            proteins: 0
        });
    };

    // handle push food item to the database
    handleSubmit = event => {
        event.preventDefault();
        this.createFood();
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
                                        name="sugar" value={this.state.sugar}
                                        onChange={this.handleInputChange}
                                        type="number" />
                                    </FormGroup>
                                </Col>
                                <Col xs="12" sm="12" md="6">
                                    <FormGroup>
                                        <Label>Total Fats</Label>
                                        <InfoInput 
                                        name="fats" value={this.state.fats}
                                        onChange={this.handleInputChange}
                                        type="number" />

                                        <Label>Dietary Fiber</Label>
                                        <InfoInput 
                                        name="dietFiber" value={this.state.dietFiber}
                                        onChange={this.handleInputChange}
                                        type="number" />
                                        
                                        <Label>Proteins</Label>
                                        <InfoInput 
                                        name="proteins" value={this.state.proteins}
                                        onChange={this.handleInputChange}
                                        type="number" />
                                    </FormGroup>
                                </Col>
                            </Row>
                                <Row>
                                    <Col xs="12" sm="12">
                                    <FormGroup>
                                        <Label>What time was this meal?</Label>
                                        <Input type="time" name="mealTime"
                                        value={this.state.mealTime}
                                        onChange={this.handleInputChange} >
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