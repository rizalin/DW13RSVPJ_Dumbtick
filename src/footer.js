import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Container, Col } from "reactstrap";
import Logo from "./img/dumb-mini.png"
import "./App.css"



class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container
          className="footer-body">
          <Grid
            container
            direction="row"
            justify="space-between"
          >
            <Col sm={4}>
              <div>
                <img src={Logo} alt="dumb-ticket" />
                <p>
                  dumb-tick - is a web-based platform that provides tickets for
                  various events around sports, music, science, and programming.
                </p>
              </div>
            </Col>
            <Col sm={2}>
              <div>
                <h4>Links</h4>
                <p>About Us</p>
                <h4>Follow Us</h4>
                <p>Instagram</p>
                <p>Twitter</p>
              </div>
            </Col>
            <Col sm={3}>
              <div>
                <h4>Have A Question</h4>
                <h4>Dumb-tick</h4>
                <p>Email : Support@dumbtick.com</p>
              </div>
            </Col>
          </Grid>
          <p className='copyright'><CopyrightIcon style={{ fontSize: '10px' }} /> Copyright 2019 Dumbtick</p>
        </Container>
      </div>
    );
  }
}

export default Footer;
