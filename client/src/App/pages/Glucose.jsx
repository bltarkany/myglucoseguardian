import React, { Component } from "react";
// ============== Grid ===================
import { Container, Row, Col } from 'reactstrap';
// ============== Title ==================
import Title from '../components/Title/Title';
// ============== Form ===================
import { Form, FormGroup, Label } from 'reactstrap';
import { Submit, InfoInput } from '../components/Form/Form';
// ============== Collapse ================
import Collapse from '../components/Collapse/Collapse';
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
        glucoseInput: [],
        numLogs: 0,
        glucoseLevel: 0,
        time: "",
        search: ""
    };

    componentDidMount() {
        this.loadUser(this.props.match.params.id);
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
    };

    // handle glucose input submit
    handleSubmit = event => {
        event.preventDefault();
    }

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
                this.loadLogsCharts(res.data.glucoseChart);
            })
            .catch(err => console.log(err));
    };

    //Changes Glucose state on loadup
    loadLogsCharts = chartID => {
        console.log("State has been assigned to :" + this.state.userInfo._id);
        API.getGlucoseLogCharts(chartID)
            .then(res => {
                console.log("2nd promise received");
                console.log(res.data.glucoseEntry);
                this.setState({
                    glucoseInfo: res.data,
                    numLogs: res.data.glucoseEntry.length
                });
                this.loadLogs(res.data.glucoseEntry);
                                                            // Every meal input generates it's own ID. So we need to load each ID separately (room for improvement)
                                                            // res.data.glucoseEntry.forEach(Entry => {
                                                            //     this.loadLogs(Entry);
                                                            // });
                this.consoleTest();
            })
            .catch(err => console.log(err));
    };

    loadLogs = glocoseLogEntry => {
                                                            // console.log("For each test: ID num: " + glocoseLogEntry);
        console.log("Entered loadLogs: " + JSON.stringify(glocoseLogEntry))                                                            
        API.getGlucoseInput(glocoseLogEntry)
            .then(res => {
                console.log("3rd promise recieved");
                console.log(res.data);
                // this.setState({
                //     glucoseInput: glucoseArr
                // })
            })
            .catch(err => console.log(err));
    };

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
        console.log('STATE OF GLU', typeof this.state.glucoseInput)
        return (

            <Container>
                <Header />
                <Navigation />
                <br/>
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
                        <Collapse
                        name="search"
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        onClick={this.handleFormSubmit}
                        ></Collapse>    
                    </Col>
                    <Col xs="12" sm="12" md="6">
                        <h5>Let's log glucose levels {this.state.userInfo.first_name} {this.state.userInfo.last_name}</h5>
                        <Form>
                            <FormGroup>
                                <Label>Glucose Level</Label>
                                <InfoInput 
                                name="glucoseLevel"
                                value={this.state.glucoseLevel}
                                onChange={this.handleInputChange}
                                type="number" />

                                <Label>When did you collect it?</Label>
                                <InfoInput
                                name="time"
                                value={this.state.time}
                                onChange={this.handleInputChange}
                                type="time" />    
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
