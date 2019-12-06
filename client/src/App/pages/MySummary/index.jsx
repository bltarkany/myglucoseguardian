import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "../../components/Grid/index";
import "../../components/Footer/Footer.css";
import API from "../../utils/API";

class MySummary extends Component {
    state = {
        userInfo: {}
    };

    componentDidMount() {
        this.loadUser(this.props.match.params.id);
    }

    loadUser = id => {
        console.log("User: " + id + " has entered loadUser.");
        API.getUser(id)
            .then(res => {
                console.log("promise received");
                console.log(res.data);

                this.setState({
                    userInfo: res.data
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-12">
                    </Col>
                </Row>
            
                <Row className = "chart.js mockup">
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
                        <h5>This is your email {this.state.userInfo.email}</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MySummary;
