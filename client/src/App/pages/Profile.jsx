import React, { Component, useState, useEffect } from "react";
// =========== Grid =================
import { Container, Row, Col } from "reactstrap";
// ============ profile Display =============
import { Info, Health } from '../components/Info/Info';
// ========== components ==============
import { Submit } from '../components/Form/Form';
import { UncontrolledCollapse, Card } from 'reactstrap';
import InfoUpdate from './InfoUpdate';
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
      {/* <Row className="align-items-center profile-header mb-5 text-center text-md-left">
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
      </Row> */}

      <Row>
        <Col xs="12" sm="12">
          <Title>
            <h1>Welcome back, {user.name} </h1>
          </Title>
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
      <h4>Need to update your user info?   <Submit id="toggler" /> </h4>
      <br></br>
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <InfoUpdate
          userId={user.sub}
          setIsUpdated={setIsUpdated} />
        </Card>
    </UncontrolledCollapse>
    <br></br>
    </Container>
  );
};

export default Profile;
