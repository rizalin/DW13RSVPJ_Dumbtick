import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "../App.css";
import Header from "../header/header";
import Footer from "../footer";
import { Ticket } from "./ticket";
import Prove from "../img/opera_2bMnptgwbr.png";

class Payment extends Component {
  render() {
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
          <div className="paymentBox">
            <br></br>
            <br></br>
            <br></br>
            <Ticket />
            <div className="payment">
              <br></br>
              <h2>Shopping Summary</h2>
              <div
                className="justify-content-between"
                style={{ display: "flex" }}
              >
                {" "}
                <p>Total Price(2 item)</p>
                <p>Rp 600000</p>
              </div>
            </div>
            <hr></hr>
            <div className="payment">
              <h2>Prove of Payment</h2>
              <div
                className="justify-content-between"
                style={{ display: "flex" }}
              >
                <img
                  src={Prove}
                  style={{ marginLeft: "20px", marginTop: "20px" }}
                />
                <div className="payButton">Confirm</div>
              </div>
            </div>

            <br></br>
            <br></br>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Payment;
