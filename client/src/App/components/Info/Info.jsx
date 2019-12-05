import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card } from 'reactstrap';
import './Info.css';

// user info display
const Info = (props) => {
    return (
        <div>
            <Row>
                <Col xs="12" sm="12">
                    <p><strong> First Name:  </strong>{props.first}</p>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="12">
                    <p><strong>Last Name:  </strong>{props.last}</p>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="12">
                    <p><strong>Email:  </strong>{props.email}</p>
                </Col>
            </Row>
        </div>
    );
}

// contact info display
const Contact = (props) => {
    return (
        <div>
            <Row>
                <Col xs="12" sm="12">
                    <p><strong>Address:  </strong>{props.address}</p>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="12">
                    <p><strong>Address 2:  </strong>{props.address2}</p>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="12" md="6">
                    <p><strong>City:  </strong>{props.city}</p>
                </Col>
                <Col xs="12" sm="12" md="3">
                    <p><strong>State:  </strong>{props.state}</p>
                </Col>
                <Col xs="12" sm="12" md="3">
                    <p><strong>Zip:  </strong>{props.zip}</p>
                </Col>
            </Row>
        </div>
    );
}

// Health profile display
const Health = (props) => {
    return (
        <div>
            <Row>
                <Col xs="6" sm="6" md="6">
                    <p><strong>Gender:  </strong>{props.gender} </p>
                </Col>
                <Col xs="6" sm="6" md="6">
                    <p><strong>Birthday:  </strong>{props.dob} </p>
                </Col>
            </Row>
            <Row>
                <Col xs="6" sm="6" md="6">
                    <p><strong>Weight:  </strong>{props.weight} </p>
                </Col>
                <Col xs="6" sm="6" md="6">
                    <p><strong>Height:  </strong>{props.height} </p>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="12">
                    <p><strong> Diabetes Type:  </strong>{props.type}</p>
                </Col>
            </Row>
        </div>
    );
}


export {
    Info,
    Contact,
    Health
}