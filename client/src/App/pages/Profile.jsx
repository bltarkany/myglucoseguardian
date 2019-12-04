import React from "react";
// =========== Grid =================
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight/Highlight";
import Loading from "../components/Loading/Loading";
import { useAuth0 } from "../react-auth0-spa";
// ============== Title ==================
import Title from '../components/Title/Title';
import Header from "../components/Header/Header.jsx";
import Navigation from "../components/Navigation/Navigation";

const Profile = () => {
  const { loading, user } = useAuth0();

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
        </Col>
      </Row>
      <Row>
        
      </Row>
    </Container>
  );
};

export default Profile;
