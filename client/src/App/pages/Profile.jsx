import React, { Component, useState, useEffect } from "react";
// =========== Grid =================
import { Container, Row, Col } from "reactstrap";
// ============ profile Display =============
import { Info, Health } from '../components/Info/Info';
// ============== Form ===================
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { InputGroup, InputGroupAddon } from 'reactstrap';
import { Submit, InfoInput } from '../components/Form/Form';
// =========== Auth0 ================
import Highlight from "../components/Highlight/Highlight";
import Loading from "../components/Loading/Loading";
import { useAuth0 } from "../react-auth0-spa";
// ============== Title ==================
import Title from '../components/Title/Title';
import Header from "../components/Header/Header.jsx";
import Navigation from "../components/Navigation/Navigation";

import API from '../utils/API';

const Profile = () => {
  
  const { loading, user } = useAuth0();
  const [isUpdated, setIsUpdated] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect (() => {
    if(!isUpdated) {
      getUserInfo();
      setIsUpdated(true);
    }
  });

  function getUserInfo () {
    API.getUser(user.sub)
      .then(res => {
        console.log(res)
        if(res.data && res.data.length) {
          const userInfo = res.data[0] != null ? res.data[0] : null;
          setUserData(userInfo);
        }
      })
  }
  

  if (loading || !user) {
    return <Loading />;
  }

  return (
    <Container className="mb-5">
      <Navigation style={{marginTop: "0"}}/>
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>

      <Row>
        <Col xs="12" sm="12">
          <Title>
            <h1>Welcome back, {user.name} </h1>
          </Title>
          <h4>If you have yet to do so please update your user info</h4>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs="12" sm="12" md="6">
          <h4>Profile Details</h4>
          <br></br>
          <Info
          first={userData ? userData.first_name : ""}
          last={userData ? userData.last_name : ""}
          email={userData ? userData.email : ""}></Info>
        </Col>
        <Col xs="12" sm="12" md="6">
        <h4>Health Profile</h4>
          <br></br>
          <Health
          gender={userData ? userData.gender : ""}
          dob={userData ? userData.dob : ""}
          weight={userData ? userData.weight : ""}
          height={userData ? userData.height : ""}
          type={userData ? userData.diabetes_type : ""}></Health>
        </Col>
      </Row>
      <br></br>
      <hr></hr>
      <Row>
        <Col xs="12" sm="12">
          <h3>Update Account Details</h3>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs="12" sm="12">
          <Form>
            <Row>
              <Col xs="12" sm="12" md="6">
                <FormGroup>
                  <Label>First Name</Label>
                  <Input
                  name="first"
                  type="text" />
                </FormGroup>
                <FormGroup>
                  <Label>Last Name</Label>
                  <Input
                  name="last"
                  type="text" />
                </FormGroup>          
              </Col>
              <Col xs="12" sm="12" md="6">
                <FormGroup>
                  <Label>Email Address</Label>
                  <Input
                  name="email"
                  type="email" />
                </FormGroup>               
              </Col>
            </Row>
            <Row>
            <Col xs="12" sm="12" md="6">
                <FormGroup>
                  <Label>Gender</Label>
                  <Input
                  name="gender"
                  type="text" />
                </FormGroup>
                <FormGroup>
                  <Label>Weight - lbs</Label>
                  <Input
                  name="weight"
                  type="number" />
                </FormGroup>          
              </Col>
              <Col xs="12" sm="12" md="6">
                <FormGroup>
                  <Label>BirthDay</Label>
                  <Input
                  name="dob"
                  type="date" />
                </FormGroup>
                <FormGroup>
                  <Label>Height - in inches</Label>
                  <Input
                  name="height"
                  type="number" />
                </FormGroup>               
              </Col>
              <Col xs="12" sm="12" md="6">
                <FormGroup>
                  <Label>Diabetes Type</Label>
                  <Input
                  name="type"
                  type="number" />
                </FormGroup>             
              </Col>
            </Row>
            <Button type="button" className='btn btn-info' onClick={(event) => handleFormSubmit}>Submit</Button>
            {/* <Button type="submit" className='btn btn-info' >Submit</Button> */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
