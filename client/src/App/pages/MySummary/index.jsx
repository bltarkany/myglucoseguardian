import React, { Component } from "react";
import { Link } from "react-router-dom";
import  Header from "../../components/Header/Header.js"
import  Navigation from "../../components/Navigation/Navigation"
import  Footer  from "../../components/Footer/Footer"
import { Container, Row, Col } from "../../components/Grid/index"
import '../../components/Footer/Footer.css'
 import API from "../../utils/API"

class MySummary extends Component{
    state = {
        // userid: auth0id,
        _id: '',
        glucoseCharts: [],
        foodLog: []
    }

    componentDidMount() {
        this.loadUser();
      }

    loadUser = id => {
        API.getUser(id)
        .then(res =>
            this.setState({ _id: res.data._id, glucoseCharts: res.data.glucoseCharts, foodLog: res.data.foodLog})
          )
          .then(console.log(this.state))
          .catch(err => console.log(err));
    }

    render() {
        return(
            <Container fluid >
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
                    <div style= {{width: "300px", height: "400px", border: "1px solid #000" , margin: "auto", marginTop: "25px", marginBottom: "25px"}}>Chart mockup</div>
                    </Col>      
                </Row>  
            </Container>
        )
    }
}

export default MySummary