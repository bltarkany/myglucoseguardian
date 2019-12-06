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
import { UncontrolledCollapse, Card } from "reactstrap";
import { TableLog, TableLine } from "../components/TableLog/TableLog";
// =========== Auht0 header nav ================
import NavBar from "../components/NavBar/NavBar";
// ============== database info pulls ==========
import API from "../utils/API";
// import { stringify } from "querystring";

class Glucose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            glucoseInfo: {},
            glucoseInput: null,
            numLogs: 0,
            glucoseLevel: 0,
            day: "",
            time: "",
            searchDate: "",
            auth0_id: this.props.user
        };
    }


    componentDidMount() {
        console.log(this.state.auth0_id);
        this.loadUser(this.state.auth0_id);
    };

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
        // if user is successfully logged in and entered a search date
        if (this.state.auth0_id && this.state.searchDate) {
            console.log("Entered this date", this.state.searchDate);
            API.loadUserLogs(
                this.state.auth0_id,
                this.state.searchDate
            )
                .then(res => {
                    // if API returns data, set state
                    if (res.data.length) {
                        this.setState({
                            glucoseInput: res.data
                        });
                        // Otherwise reset state to empty
                    } else {
                        this.setState({
                            glucoseInput: null
                        });
                    }
                })
                .catch(err => console.log(err));
            // Otherwise reset state to empty
        } else {
            this.setState({
                glucoseInput: null
            });
        }
    };

    // handle glucose input submit
    handleSubmit = event => {
        event.preventDefault();

        if (
            this.state.auth0_id &&
            this.state.glucoseLevel &&
            this.state.day &&
            this.state.time
        ) {
            console.log(
                this.state.auth0_id,
                this.state.glucoseLevel,
                this.state.day,
                this.state.time
            );
            API.submitNewGlucoseLog(
                this.state.auth0_id,
                this.state.glucoseLevel,
                this.state.day,
                this.state.time
            )
                .then(res => {
                    console.log("Successful push to Database!");
                    console.log(res.data);
                    this.setState({
                        glucoseLevel: 0,
                        day: "",
                        time: ""
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
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

    render() {
        console.log("STATE OF GLU", this.state);
        return (
            <Container>
                <NavBar/>
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
                                        {this.state.glucoseInput.map(
                                            (logs, index) => (
                                                <TableLine
                                                    key={index}
                                                    dateCollected={
                                                        logs.dateCollected
                                                    }
                                                    glucoseLevel={
                                                        logs.glucoseLevel
                                                    }
                                                    timeCollected={
                                                        logs.timeCollected
                                                    }
                                                />
                                            )
                                        )}
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
                                <Input
                                    name="glucoseLevel"
                                    value={this.state.glucoseLevel}
                                    onChange={this.handleInputChange}
                                    type="number"
                                />

                                <Label>What day did you collect it?</Label>
                                <Input
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

        );
    }
}

export default Glucose;
