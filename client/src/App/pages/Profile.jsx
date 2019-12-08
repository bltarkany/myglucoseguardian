import React, { useState, useEffect } from "react";
// =========== Grid =================
import { Container, Row, Col } from "reactstrap";
// ============ profile Display =============
import { Info, Health } from '../components/Info/Info';
// ========== components ==============
import { Submit } from '../components/Form/Form';
import { UncontrolledCollapse, Card } from 'reactstrap';
import InfoUpdate from './InfoUpdate';
// =========== Auth0 ================
// import Highlight from "../components/Highlight/Highlight";
import Loading from "../components/Loading/Loading";
import { useAuth0 } from "../react-auth0-spa";
// ============== Title ==================
import Title from '../components/Title/Title';
import NavBar from "../components/NavBar/NavBar";

import API from '../utils/API';

const Profile = () => {
  
  const { loading, user } = useAuth0();
  const [isCreated, setIsCreated] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect( () => {
    if(!isCreated) {
      const getUserInfo = () => {
        console.log('User created an account previously, fetching info');
        API.getUser(user.sub)
          .then(res => {
            console.log(res)
            if(res.data && res.data.length) {
              const userInfo = res.data[0] != null ? res.data[0] : null;
              setUserData(userInfo);
              setIsCreated(true);
            }
          })
      };
      getUserInfo();      
    }
  });

  
  

  if (loading || !user) {
    return <Loading />;
  }

  console.log('user info: ' + JSON.stringify(user));
  console.log('status of userData: ' + userData);
  console.log('status of isCreated: ' + isCreated);
  return (
    <Container className="mb-5">
      <br></br>
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
          setIsCreated={isCreated} />
        </Card>
    </UncontrolledCollapse>
    <br></br>
    </Container>
  );
};

export default Profile;
