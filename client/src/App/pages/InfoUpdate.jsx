import React, { Component } from 'react';
// ============ grid ==================
import { Container, Row, Col } from 'reactstrap';
// ============== Form ===================
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { InputGroup, InputGroupAddon } from 'reactstrap';
import { Submit, InfoInput } from '../components/Form/Form';
// ============= API ===============
import API from '../utils/API';


class InfoUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth0__id: this.props.userId,
            first_name: "",
            last_name: "",
            email: "",
            gender: "",
            dob: "",
            height: 0,
            weight: 0,
            diabetes_type: 0
        }
    }

    componentDidMount = () => {
        console.log("Mounted", this.state.auth0__id);
    }

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
        this.createUser();
        
    };

    createUser = () => {
        let newUser = {
            auth0__id: this.state.auth0__id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            gender: this.state.gender,
            dob: this.state.dob,
            height: this.state.height,
            weight: this.state.weight,
            diabetes_type: this.state.diabetes_type
        }
        console.log('Obj to be submitted creating new user');
        API.createUser(newUser)
        .then(res => {
            console.log(res);

        }).catch(err => {
            console.log(`User Creation error: ${err}`);
        });
    };

    updateUser = () => {
        let updateUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            gender: this.state.gender,
            dob: this.state.dob,
            height: this.state.height,
            weight: this.state.weight,
            diabetes_type: this.state.diabetes_type
        };
        console.log(`Updating user ${this.state.auth0__id}`);
        API.updateUser(this.state.auth0__id)
        .then(res =>{
            console.log(res);
        }).catch(err => {
            console.log(`User update error: ${err}`);
        });
    };

    render () {
        return (

            <Container>
                <Row>
                    <Col xs="12" sm="12">
                        <br></br>
                    <h3>Update Account Details</h3>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs="12" sm="12">
                    <Form>
                        <Row>
                        <Col xs="12" sm="12" md="6">
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input
                                name="first_name"
                                onChange={this.handleInputChange}
                                type="text" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input
                                name="last_name"
                                onChange={this.handleInputChange}
                                type="text" />
                            </FormGroup>          
                        </Col>
                        <Col xs="12" sm="12" md="6">
                            <FormGroup>
                                <Label>Email Address</Label>
                                <Input
                                name="email"
                                onChange={this.handleInputChange}
                                type="email" />
                            </FormGroup>               
                        </Col>
                        </Row>
                        <Row>
                        <Col xs="12" sm="12" md="6">
                            <FormGroup>
                                <Label>Gender</Label>
                                <Input
                                name="gender"
                                onChange={this.handleInputChange}
                                type="text" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Weight - lbs</Label>
                                <Input
                                name="weight"
                                onChange={this.handleInputChange}
                                type="number" />
                            </FormGroup>          
                        </Col>
                        <Col xs="12" sm="12" md="6">
                            <FormGroup>
                                <Label>BirthDay</Label>
                                <Input
                                name="dob"
                                onChange={this.handleInputChange}
                                type="date" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Height - in inches</Label>
                                <Input
                                name="height"
                                onChange={this.handleInputChange}
                                type="number" />
                            </FormGroup>               
                        </Col>
                        <Col xs="12" sm="12" md="6">
                            <FormGroup>
                                <Label>Diabetes Type</Label>
                                <Input
                                name="diabetes_type"
                                onChange={this.handleInputChange}
                                type="number" />
                            </FormGroup>             
                        </Col>
                        </Row>
                        <Submit onClick={this.handleFormSubmit} />
                    </Form>
                    </Col>
                </Row>
                <br></br>
            </Container>

        )
    }

}

export default InfoUpdate;