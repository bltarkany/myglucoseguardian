import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import { Form, FormGroup, Label } from "reactstrap";
import { Submit, InfoInput } from "../../components/Form/Form";
import { Container, Row, Col } from "../../components/Grid/index";
import "../../components/Footer/Footer.css";
import API from "../../utils/API";
import { format } from "path";
import Linegraph from "../../components/Linegraph";
import Title from "../../components/Title/Title";

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
            emptyDataSet: null,
            glucoseLevelArr: null,
            glucoseTimeStampArr: null,
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

        this.loadMySummaryUser(id);
        this.loadMySummaryAggregateData(summaryObj);
        this.loadMySummaryLogs(summaryObj);
    };

    loadMySummaryUser = id => {
        console.log("User: " + id + " has entered loadMySummaryUser.");
        API.getUser(id)
            .then(res => {
                console.log("promise received");
                console.log(res.data[0]);
                this.setState({
                    userInfo: res.data[0]
                });
            })
            .catch(err => console.log(err));
    };

    loadMySummaryAggregateData = summaryObj => {
        console.log(
            "Obj: " + summaryObj + " has entered loadMySummaryAggregateData."
        );
        API.getAggregatedDataForDateRange(summaryObj)
            .then(res => {
                console.log(res.data);
                if (res.data.length) {
                    this.setState({
                        glucoseSum: res.data[0].periodTotal,
                        glucoseAvg:
                            Math.round(100 * res.data[0].periodAvg) / 100, //rounds to nearest hundredth
                        glucoseMin: res.data[0].periodMin,
                        glucoseMax: res.data[0].periodMax,
                        emptyDataSet: false
                    });
                } else {
                    this.setState({
                        glucoseSum: 0,
                        glucoseAvg: 0,
                        glucoseMin: 0,
                        glucoseMax: 0,
                        emptyDataSet: true
                    });
                }
            })
            .catch(err => console.log(err));
    };

    loadMySummaryLogs = summaryObj => {
        console.log("Obj: " + summaryObj + " has entered loadMySummaryLogs.");
        API.getLogsForDateRange(summaryObj)
            .then(res => {
                console.log("This is the data you're looking for");
                console.log(res.data);
                this.setState({
                    glucoseInput: res.data,
                    glucoseLevelArr: res.data.map(level => {
                        return level.glucoseLevel;
                    }),
                    glucoseTimeStampArr: res.data.map(time => {
                        return time.timeCollected;
                    })
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
                <br/>
                <Row>
                    <Col size="sm-12">
                        <Title>
                            <h1 style={{ textAlign: "center" }}>
                                Hello {this.state.userInfo.first_name}
                            </h1>
                            <h4 style={{ textAlign: "center" }}>
                                Your summary!
                            </h4>
                        </Title>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col size="sm-1" style={{ top: "50%" }}>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h5 style={{ textAlign: "center" }}>Sum</h5>
                        <p style={{ textAlign: "center" }}>
                            {this.state.glucoseSum}
                        </p>
                        <h5 style={{ textAlign: "center" }}>Avg</h5>
                        <p style={{ textAlign: "center" }}>
                            {this.state.glucoseAvg}
                        </p>
                    </Col>
                    <Col size="sm-10">
                        <Linegraph
                            glucoseLevelArr={this.state.glucoseLevelArr}
                            glucoseTimeStampArr={this.state.glucoseTimeStampArr}
                        />
                    </Col>
                    <Col size="sm-1">
                    <Col size="sm-1" style={{ top: "50%" }}>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h5 style={{ textAlign: "center" }}>Min</h5>
                        <p style={{ textAlign: "center" }}>
                            {this.state.glucoseMax}
                        </p>
                        <h5 style={{ textAlign: "center" }}>Max</h5>
                        <p style={{ textAlign: "center" }}>
                            {this.state.glucoseMax}
                        </p>
                    </Col>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col size="sm-12">
                        <h4>View your logs!</h4>
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
