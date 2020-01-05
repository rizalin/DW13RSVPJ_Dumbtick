import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "../App.css";
import Header from "../header/header";
import Footer from "../footer";
import Prove from "../img/opera_2bMnptgwbr.png";
import PendingTicketMap from "../mapping/pendingMap";
import PendingTotal from "../mapping/pendingTotal";
import { getToken } from "../_config/bearer";

const isLogin = localStorage.getItem("isLogin")
const token = localStorage.getItem('token')

class Payment extends Component {
  render() {
    getToken(token)
    if (isLogin == "true") {
      return (
        <div className="pay">
          <Header />
          <Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1
              style={{ textAlign: "left", color: "#FF5555", fontWeight: "700" }}
            >
              Payment
          </h1>
            <br></br>
            <br></br>
            <div className="pay-box">
              <h1>Payment</h1>
            </div>
            <PendingTicketMap />
          </Container>
          <Footer />
        </div>
      );
    } else {
      window.location = "/"
    }
  }
}

export default Payment;
