import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import { Form, FormGroup, Label } from "reactstrap";
import { Submit, InfoInput } from "../../components/Form/Form";
import { Container, Row, Col } from "../../components/Grid/index";
import "../../components/Footer/Footer.css";
import API from "../../utils/API";
import { format } from "path";

class MySummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            glucoseInput: null,
            numLogs: 0,
            glucoseLevel: 0,
            glucoseSum: null,
            glucoseAvg: null,
            glucoseMin: null,
            glucoseMax: null,
            dateRange: "today",
            // for custom date ranges
            startDate: "",
            endDate: "",
            // for custom date ranges
            auth0_id: this.props.user
        };
    }

    componentDidMount() {
        this.loadUser(this.state.auth0_id);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.startDate && this.state.endDate) {
            API.getAggregatedData()
                .then()
                .catch(err => console.log(err));
        }
    };

    loadUser = id => {
        // always grabs today
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const startDate = this.formatDate(today);
        const endDate = this.formatDate(tomorrow);
        const summaryObj = {
            id: this.state.auth0_id,
            start_Date: startDate,
            end_Date: endDate
        };

        console.log("User: " + id + " has entered loadUser.");
        API.getUser(id)
            .then(res => {
                console.log("promise received");
                console.log(res.data[0]);
                this.setState({
                    userInfo: res.data[0]
                });
            })
            .catch(err => console.log(err));
        API.getAggregatedDataForDateRange(summaryObj)
            .then(res => {
                console.log(res.data[0]);
                this.setState({
                    glucoseSum: res.data[0].periodTotal,
                    glucoseAvg: res.data[0].periodAvg,
                    glucoseMin: res.data[0].periodMin,
                    glucoseMax: res.data[0].periodMax
                });
            })
            .catch(err => console.log(err));
        API.getLogsForDateRange(summaryObj)
            .then(res => {
                console.log(res.data);
                this.setState({
                    glucoseInput: res.data
                });
            })
            .catch(err => console.log(err));
    };

    formatDate(date) {
        var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
    }

    render() {
        console.log("STATE OF MySummary", this.state);
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-12"></Col>
                </Row>

                <Row className="chart.js mockup">
                    <Col size="sm-12">
                        <div
                            style={{
                                width: "300px",
                                height: "400px",
                                border: "1px solid #000",
                                margin: "auto",
                                marginTop: "25px",
                                marginBottom: "25px"
                            }}
                        >
                            <h5>Hello {this.state.userInfo.first_name}</h5>
                            <h5>
                                This is your email {this.state.userInfo.email}
                            </h5>
                            <h5>avg: {this.state.glucoseAvg}</h5>
                            <h5>sum: {this.state.glucoseSum}</h5>
                            <h5>min: {this.state.glucoseMin}</h5>
                            <h5>max: {this.state.glucoseMax}</h5>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-8">
                        <Form>
                            <FormGroup>
                                <Label>Start Date:</Label>
                                <Input
                                    name="startDate"
                                    value={this.state.startDate}
                                    onChange={this.handleInputChange}
                                    type="date"
                                />
                                <Label>End Date:</Label>
                                <Input
                                    name="endDate"
                                    value={this.state.endDate}
                                    onChange={this.handleInputChange}
                                    type="date"
                                />
                            </FormGroup>
                            <Submit onClick={this.handleSubmit} />
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MySummary;
