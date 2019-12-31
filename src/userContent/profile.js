import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Row,
  Container,
  Col,
  FormGroup,
  Input,
  Form,
  Card,
  CardHeader
} from "reactstrap";
import { Typography } from "@material-ui/core";
import "../App.css";
import Header from "../header/header";
import Footer from "../footer";
import EventMap from "../mapping/eventhome";

class Profile extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1
            style={{ textAlign: "left", color: "#FF5555", fontWeight: "700" }}
          >
            Profile
          </h1>
          <Row>
            <Col sm={6} className="profile">
              <h1 style={{ textAlign: "left" }}>Anon</h1>
              <h3> 13-10-1990</h3>
              <h3>081200001111</h3>
              <h3>anon@gmail.com</h3>
            </Col>
            <Col sm={2}>
              <Button size="sm">Edit Profile</Button>
            </Col>
            <Col sm={4}>
              <img
                src="https://sigmaestimates.com/wp-content/uploads/sites/2/2018/10/person-placeholder-1.png"
                width="100%"
                height="300px"
              />
            </Col>
          </Row>
          <br></br>
          <br></br>
          <h1 style={{ textAlign: "left", color: "#FF5555", fontWeight: "700" }}>Favorites</h1>
          <br></br>
          <br></br>
          <EventMap />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Profile;
