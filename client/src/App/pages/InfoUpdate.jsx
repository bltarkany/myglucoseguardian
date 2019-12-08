import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// ============ grid ==================
import { Container, Row, Col } from "reactstrap";
// ============== Form ===================
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { InputGroup, InputGroupAddon } from "reactstrap";
import { Submit, InfoInput } from "../components/Form/Form";
// ============= API ===============
import API from "../utils/API";
// import { stat } from 'fs';

class InfoUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth0_id: this.props.userId,
            first_name: "",
            last_name: "",
            email: "",
            gender: "",
            dob: "",
            height: 0,
            weight: 0,
            diabetes_type: 0,
            status: 0,
            user: []
        };
    }

    componentDidMount = () => {
        console.log("Mounted", this.state.auth0_id);
        console.log("Here's the rest of state, " + JSON.stringify(this.state));

        if (this.props.userId) {
            API.getUser(this.props.userId).then(res => {
                console.log(res);
                if (res.data && res.data.length) {
                    console.log("Passed the Test");
                    const userInfo = res.data[0] != null ? res.data[0] : null;
                    this.setState({
                        isCreated: true,
                        user: userInfo,
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        gender: this.state.gender,
                        dob: this.state.dob,
                        height: this.state.height,
                        weight: this.state.weight,
                        diabetes_type: this.state.diabetes_type,
                        auth0_id: this.state.auth0_id
                    });
                }
            });
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
        if (this.state.isCreated) {
            this.updateUser();
        } else {
            this.createUser();
        }
    };

    createUser = () => {
        let newUser = {
            auth0_id: this.state.auth0_id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            gender: this.state.gender,
            dob: this.state.dob,
            height: this.state.height,
            weight: this.state.weight,
            diabetes_type: this.state.diabetes_type
        };
        console.log("Obj to be submitted creating new user");
        console.log(newUser);
        API.createUser(newUser)
            .then(res => {
                console.log(newUser);
                console.log(res);
                this.setState({ status: 1 });
            })
            .catch(err => {
                console.log("User Creation error:", err.res);
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
        console.log(`Updating user ${this.state.auth0_id}`);
        API.updateUser(updateUser)
            .then(res => {
                console.log(res);
                this.setState({ status: 2, isCreated: false });
            })
            .catch(err => {
                console.log(`User update error: ${err}`);
            });
    };

    render() {
        console.log("State of SignUp Page: " + JSON.stringify(this.state));
        switch (this.state.status) {
            case 0:
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
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    type="text"
                                                    defaultValue={
                                                        this.state.user
                                                            .first_name
                                                            ? this.state.user
                                                                  .first_name
                                                            : ""
                                                    }
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Last Name</Label>
                                                <Input
                                                    name="last_name"
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    type="text"
                                                    defaultValue={
                                                        this.state.user
                                                            .last_name
                                                            ? this.state.user
                                                                  .last_name
                                                            : ""
                                                    }
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="12" sm="12" md="6">
                                            <FormGroup>
                                                <Label>Email Address</Label>
                                                <Input
                                                    name="email"
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    type="email"
                                                    defaultValue={
                                                        this.state.user.email
                                                            ? this.state.user
                                                                  .email
                                                            : ""
                                                    }
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="12" sm="12" md="6">
                                            <FormGroup>
                                                <Label>Gender</Label>
                                                <Input
                                                    name="gender"
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    type="text"
                                                    defaultValue={
                                                        this.state.user.gender
                                                            ? this.state.user
                                                                  .gender
                                                            : ""
                                                    }
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Weight - lbs</Label>
                                                <Input
                                                    name="weight"
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    type="number"
                                                    defaultValue={
                                                        this.state.user.weight
                                                            ? this.state.user
                                                                  .weight
                                                            : ""
                                                    }
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="12" sm="12" md="6">
                                            <FormGroup>
                                                <Label>BirthDay</Label>
                                                <Input
                                                    name="dob"
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    type="date"
                                                    defaultValue={
                                                        this.state.user.dob
                                                            ? this.state.user
                                                                  .dob
                                                            : ""
                                                    }
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>
                                                    Height - in inches
                                                </Label>
                                                <Input
                                                    name="height"
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    type="number"
                                                    defaultValue={
                                                        this.state.user.height
                                                            ? this.state.user
                                                                  .height
                                                            : ""
                                                    }
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col xs="12" sm="12" md="6">
                                            <FormGroup>
                                                <Label>Diabetes Type</Label>
                                                <Input
                                                    name="diabetes_type"
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    type="number"
                                                    defaultValue={
                                                        this.state.user
                                                            .diabetes_type
                                                            ? this.state.user
                                                                  .diabetes_type
                                                            : ""
                                                    }
                                                />
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
            case 1:
                return <Redirect to="/mysummary/" />;
            case 2:
                return <Redirect to="/profile" />;
            default:
                console.log("you should never reach this");
        }
    }
}

export default InfoUpdate;
