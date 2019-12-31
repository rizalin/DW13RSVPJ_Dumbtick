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

class MyEvent extends Component {
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
            My Event
          </h1>
          <br></br>
          <br></br>
          <EventMap />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default MyEvent;
