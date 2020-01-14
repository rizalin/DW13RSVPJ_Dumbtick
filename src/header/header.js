import React, { Component } from "react";
import Logo from "../img/dumb-ticket.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col } from "reactstrap";
import Register from "../login/register";
import Login from "../login/login";
import { Link } from "react-router-dom";
import Popovers from "./popover";
import "../App.css";

const isLogin = localStorage.getItem("isLogin");

class Header extends Component {
  render() {
    if (isLogin) {
    }
    return (
      <div style={{ backgroundColor: "#FF5555" }}>
        <Container>
          <Row className="justify-content-between">
            <Col sm={2}>
              <Link to="/">
                <img src={Logo} alt="placeholder" />
              </Link>
            </Col>
            <Col sm={2} style={{ alignSelf: "center" }}>
              <Row className="justify-content-between">
                <Register />
                <Login />
                <Popovers />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
