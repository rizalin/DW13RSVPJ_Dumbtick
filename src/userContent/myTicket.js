import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "../App.css";
import Header from "../header/header";
import Footer from "../footer";
import { Ticket } from "./ticket";

class MyTicket extends Component {
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
            My Ticket
          </h1>
          <br></br>
          <br></br>
          <div className="ticketBox">
            <br></br>
            <br></br>
            <br></br>
            <Container>
              <Ticket />
            </Container>

            <br></br>
            <br></br>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default MyTicket;
