import React, { Component } from "react";
import { Link } from "react-router-dom";
import  Header from "../../components/Header/Header.js"
import  Navigation from "../../components/Navigation/Navigation"
import  Footer  from "../../components/Footer/Footer"
import { Container, Row, Column, Col } from "../../components/Grid/index"
import '../../components/Footer/Footer.css'

class MySummary extends Component{
    state = {
        // userid: auth0id,
        auth0__id: '',
        first_name: '',
        last_name: '',
        diabetes_type: 0,
        height: 0,
        weight: 0,
        foodLog: []
    } 

    render() {
        return(
            <Container fluid>
                <Row>
                    <Col size = "sm-12">
                        <Header/>
                    </Col>
                </Row>
                <Row>
                     <Col size = "sm-12">
                        <Navigation/>
                    </Col>
                </Row>
                <Row> 
                    <Col size = "sm-12">
                        <Footer className = "footer"/>
                    </Col>
                </Row> 
                <Row>
                    <Col size = "sm-12">
                    <div style= {{width: "300px", height: "400px", border: "1px solid #000" , margin: "auto", marginTop: "25px", marginBottom: "25px"}}>Chart mockup</div>
                    </Col>      
                </Row>
               
                
            </Container>
        )
    }
}

export default MySummary