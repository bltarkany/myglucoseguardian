import React, { Component } from "react";
// ============== Grid ===================
import { Container, Row, Col } from "reactstrap";
// ============== Title ==================
import Title from "../components/Title/Title";
// ============== Form ===================
import { Form, FormGroup, Label } from "reactstrap";
import { Submit, InfoInput } from "../components/Form/Form";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
// ============== Collapse ================
import Collapse from "../components/Collapse/Collapse";
import { UncontrolledCollapse, Card } from 'reactstrap';
import { TableLog, TableLine } from "../components/TableLog/TableLog";
// =========== Auht0 header nav ================
import Header from "../components/Header/Header.jsx";
import Navigation from "../components/Navigation/Navigation";
// ============== database info pulls ==========
import API from "../utils/API";
// import { stringify } from "querystring";

class Glucose extends Component {
    state = {
        userInfo: {},
        glucoseInfo: {},
        glucoseInput: null,
        numLogs: 0,
        glucoseLevel: 0,
        day: "",
        time: "",
        searchDate: ""
    };

    componentDidMount() {
        this.loadUser(this.props.match.params.id);
    }

    // handle input change and set state
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // handle submit of the search request for logs
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.userInfo.auth0__id && this.state.searchDate) {
            console.log("Entered this date", this.state.searchDate);
            API.loadUserLogs(
                this.state.userInfo.auth0__id,
                this.state.searchDate
            ).then(res => {
                this.setState({
                    glucoseInput: res.data
                });
            });
        }
    };

    // handle glucose input submit
    handleSubmit = event => {
        event.preventDefault();
    };

    // Changes user state on loadup
    loadUser = id => {
        console.log("User: " + id + " has entered loadUser.");
        API.getUser(id)
            .then(res => {
                console.log("promise received");
                console.log(res.data);

                this.setState({
                    userInfo: res.data
                });
                //this.loadUserGlucoseLogs(res.data.auth0__id);
            })
            .catch(err => console.log(err));
    };

    // loadUserGlucoseLogs = glucoseUserID => {
    //     // console.log("For each test: ID num: " + glocoseLogEntry);
    //     console.log("Entered loadLogs: " + JSON.stringify(glucoseUserID));
    //     API.getGlucoseInput(glucoseUserID)
    //         .then(res => {
    //             console.log("2nd promise recieved");
    //             console.log(res.data);
    //             // this.setState({
    //             //     glucoseInput: glucoseArr
    //             // })
    //         })
    //         .catch(err => console.log(err));
    // };

    consoleTest = () => {
        console.log("==================================");
        console.log("Entering console log test section");
        console.log(this.state.userInfo);
        console.log(this.state.glucoseInfo);
        console.log(this.state.numLogs);
        console.log(this.state.glucoseInput);
        console.log(this.state.glucoseInput[0]);
        console.log("==================================");
    };

    render() {
        console.log("STATE OF GLU", this.state);
        return (
            <Container>
                <Header />
                <Navigation />
                <br />
                <Row>
                    <Col xs="12" sm="12">
                        <Title>
                            <h1>Glucose Calculation</h1>
                            <hr></hr>
                        </Title>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="6">
                        <h5>Let's search our daily logs</h5>
                        <Label>Search by Date</Label>
                        <InputGroup>
                            <Input
                                name="searchDate"
                                value={this.state.value}
                                onChange={this.handleInputChange}
                                type="date"
                            />
                            <InputGroupAddon addonType="append">
                                <Button
                                    color="info"
                                    id="toggler"
                                    onClick={this.handleFormSubmit}
                                    style={{ marginBottom: "1rem" }}
                                >
                                    search
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <UncontrolledCollapse toggler="#toggler">
                            <Card>
                            {this.state.glucoseInput ? (
                                <TableLog>
                                    {this.state.glucoseInput.map((logs, index) => (
                                        <TableLine
                                        key={index}
                                        dateCollected={logs.dateCollected}
                                        glucoseLevel={logs.glucoseLevel}
                                        timeCollected={logs.timeCollected} />
                                    ))}
                                </TableLog>
                            ) : (
                                <h4>No logs currently</h4>
                            )} 
                            </Card>
                        </UncontrolledCollapse>
                    </Col>
                    <Col xs="12" sm="12" md="6">
                        <h5>
                            Let's log glucose levels{" "}
                            {this.state.userInfo.first_name}{" "}
                            {this.state.userInfo.last_name}
                        </h5>
                        <Form>
                            <FormGroup>
                                <Label>Glucose Level</Label>
                                <InfoInput
                                    name="glucoseLevel"
                                    value={this.state.glucoseLevel}
                                    onChange={this.handleInputChange}
                                    type="number"
                                />

                                <Label>What day did you collect it?</Label>
                                <InfoInput
                                    name="day"
                                    value={this.state.day}
                                    onChange={this.handleInputChange}
                                    type="date"
                                />

                                <Label>What time did you collect it?</Label>
                                <InfoInput
                                    name="time"
                                    value={this.state.time}
                                    onChange={this.handleInputChange}
                                    type="time"
                                />
                            </FormGroup>
                            <Submit onClick={this.handleSubmit} />
                        </Form>
                    </Col>
                </Row>
                <br></br>
            </Container>

            // <Container>

            //     <Row>
            //         <Col size="lg-6">
            //             <div className="form-group">
            //                 <label htmlFor="glucoseLevel">
            //                     Glucose Level for{" "}
            //                     {this.state.userInfo.first_name +
            //                         " " +
            //                         this.state.userInfo.last_name}
            //                 </label>
            //                 <input
            //                     type="number"
            //                     className="form-control"
            //                     id="glucoseLevel"
            //                 />
            //                 <small
            //                     id=""
            //                     className="form-text text-muted"
            //                 ></small>
            //             </div>
            //         </Col>
            //         <Col size="lg-6">
            //             <div className="form-group">
            //                 <label htmlFor="time">When did you collect?</label>
            //                 <input
            //                     type="time"
            //                     className="form-control"
            //                     id="time"
            //                 />
            //                 <small
            //                     id=""
            //                     className="form-text text-muted"
            //                 ></small>
            //             </div>
            //         </Col>
            //     </Row>
            //     <Row>
            //         <Col size="lg-12">
            //             <button type="submit" className="btn btn-primary">
            //                 submit
            //             </button>
            //         </Col>
            //     </Row>
            //     <Row>
            //         <Col size="lg-12">
            //             <p>You have {this.state.numLogs} logs</p>
            //             <h5>Here's your log information</h5>
            //             <p>{this.state.glucoseInput}</p>
            //         </Col>
            //     </Row>
            // </Container>
        );
    }
}

export default Glucose;
