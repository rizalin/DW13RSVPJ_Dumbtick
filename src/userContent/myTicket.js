import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "../App.css";
import Header from "../header/header";
import Footer from "../footer";
import ConfirmedTicket from "../mapping/myTicket";
import { getToken } from "../_config/bearer";

const isLogin = localStorage.getItem("isLogin")
const token = localStorage.getItem('token')

class MyTicket extends Component {
  render() {
    getToken(token)
    if (isLogin == "true") {
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
                <ConfirmedTicket />
              </Container>

              <br></br>
              <br></br>
            </div>
          </Container>
          <Footer />
        </div>
      );
    } else { window.location = "/" }
  }
}

export default MyTicket;
