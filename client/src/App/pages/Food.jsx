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
import Header from "../components/Header/Header.jsx";
import Navigation from "../components/Navigation/Navigation";


// compiled by BT
class Food extends Component {

    state = {
        search: "",
        foodList: [],
        item: [],
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

    foodSearch = (search) => {
        API.getFood(search)
         .then(res => {
            console.log(res.data);
            this.setState({
                foodList: res.data
            })

         }).catch((err) => {
            console.log(err);
         });
    };

    itemSearch = (eventKey) => {
        API.getItem(eventKey)
        .then(res => {
            console.log(res.data);
            this.setState({
                item: res.data
            })
        }).catch((err) => {
            console.log(err);
        });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.foodSearch(this.state.search);
    }

    render() {
        return (
            
            <Container>
<<<<<<< HEAD
                <Header />
                <Navigation />
                <br></br>
=======
>>>>>>> 1834d364b81aed967f1298bdf02eabdc12893d2d
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
                        {this.state.foodList.length ? (
                            <Accordion defaultActiveKey="0">
                                {this.state.foodList.map(food => (
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey={food.nix_item_id} onClick={this.itemSearch}>
                                            <strong>{food.brand_name_item_name}</strong>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={food.nix_item_id}>
                                            {this.state.item.map(item => (
                                              <CardBody
                                              servingSize={item.serving_qty}
                                              servingUnit={item.serving_unit}
                                              servingGrams={item.serving_weight_grams}
                                              calories={item.nf_calories}
                                              totalFat={item.nf_total_fat}
                                              saturatedFat={item.nf_saturated_fat}
                                              carbs={item.nf_total_carbohydrate}
                                              sugars={item.nf_sugars}
                                              dietaryFiber={item.nf_dietary_fiber}
                                              protein={item.nf_protein}
                                              sodium={item.nf_sodium} />  
                                            ))}
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
                                        <option defaultValue>Options</option>
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