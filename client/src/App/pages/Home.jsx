import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import contentData from "../utils/contentData";


// import Content from "../components/Content/Content";
import "./style.css"

class Home extends Component {
  

  render() {
    return (
      <Container>
        <Row>
           <Col xs="12" sm="12" md={{ size: 6, offset: 3 }} className="text-center pt-4" >
            <img className="mb-3 rounded-circle" src="horse2.gif" alt="logo" width="480" />
            <h1 className="mb-4" style={{color: "#FF3849"}}>Glucose Guardian</h1> 
            <p className="lead">
            Parents &amp; Children learn how to better manage your diabetes through Education and Games!
            </p>
           </Col>
        </Row>
        <br></br>
        <hr></hr>
        <br></br>
        {/* <Content></Content> */}
        <Row>
          <Col xs="12" sm="12" className="text-center">
          <h2 className="text-center" style={{ color: "#34435E" }}>
          We Provide a place for education ... and lots of fun!
          </h2>
          </Col>
          <br></br>
          <br></br>
          <Row>
          {/* <Col xs="12" sm="12">
            {contentData.map((col, index) => (
              <div className="text-center float-left" key={index}>
                <h3 >
                <a href={col.link} style={{ textAlign: "center" }}>
                            <img src={col.icon} alt="" className="icon"/>
                            {col.title}
                        </a>
                </h3>
                <p>{col.description}</p>
              </div>
            ))};
          </Col> */}
            {contentData.map((col, i) => (
                <Col key={i} md={{ size: 5, offset: 1}} >
                    <h3>
                        <a href={col.link} style={{ color: "#5c7aff", textAlign: "center" }}>
                            <img src={col.icon} alt="" className="icon"/>
                            {col.title}
                        </a>
                    </h3>
                    <p>{col.description}</p>
                </Col>
            ))}
        </Row>
        </Row>
        <br></br>
        

      </Container>
    )
  }
}

export default Home;
