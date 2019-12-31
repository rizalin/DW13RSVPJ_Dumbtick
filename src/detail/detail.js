import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Row,
  Container,
  FormGroup,
  Input,
  Form,
  Col
} from "reactstrap";
import { Typography, Grid, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import "../App.css";

let i = 0;
function buttonInc() {
  i++;
  document.getElementById("num").value = i;
}

function buttonDec() {
  i--;
  document.getElementById("num").value = i;
}

export default function Detail() {
  return (
    <Container>
      <br></br>
      <br></br>
      <div className="box">
        <img
          src="http://storage.jurnalotaku.com/wp-content/uploads/2017/07/c3-afaid-2017-fhana-fi-700x394.jpg"
          width="100%"
          style={{ marginBottom: "40px" }}
        />
        <div className="text-box">
          <Row className="justify-content-between">
            <h1>fhana Live in Jakarta</h1>
            <h2>300000</h2>
          </Row>
          <Row className="justify-content-between">
            <Col style={{ maxWidth: "fitContent" }}>
              <h4>Music</h4>
            </Col>
            <Col>
              <Row>
                <IconButton aria-label="min" onClick={buttonDec}>
                  <RemoveIcon />
                </IconButton>
                <input
                  id="num"
                  type="text"
                  value="0"
                  style={{
                    maxWidth: "20px",
                    textAlign: "center",
                    border: "none",
                    backgroundColor: "#F4E1E1"
                  }}
                />
                <IconButton aria-label="add" onClick={buttonInc}>
                  <AddIcon />
                </IconButton>
                <Button>Buy</Button>{" "}
              </Row>
            </Col>
          </Row>
          <hr></hr>
          <Row className="justify-content-between">
            <Col>
              <h3>Hosted by</h3>
              <p>Juni Concert</p>
            </Col>
            <Col>
              <h3>Date & Time</h3>
              <p>
                <EventIcon style={{ marginRight: "10px" }} />
                13 Januari 2020 - 13 Januari 2020
              </p>
              <p>
                <ScheduleIcon style={{ marginRight: "10px" }} />
                18:00 - 22:00
              </p>
            </Col>
            <Col style={{ padding: "0 30px" }}>
              <h3>Contact Person</h3>
              <p>
                <ContactMailIcon style={{ marginRight: "10px" }} />
                Aoyama Sachiko
              </p>
              <p>
                <PhoneIcon style={{ marginRight: "10px" }} />
                +6200099998777
              </p>
              <p>
                <MailOutlineIcon style={{ marginRight: "10px" }} />
                email@gmail.com
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <h3>Event Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
            turpis et nunc tempor tincidunt. Nullam eu fringilla leo. Nunc vitae
            nibh ex. Donec placerat elementum turpis, tristique tincidunt sapien
            euismod nec. Nam dictum mattis blandit. Ut sem orci, porta non arcu
            quis, cursus sollicitudin ex. Ut ut pretium diam. Nulla vulputate,
            ante a efficitur sodales, risus mi sagittis sapien, eu condimentum
            elit mauris fringilla purus. Vivamus feugiat mi at erat porta, vitae
            egestas justo scelerisque. Vivamus sit amet massa quis felis
            pulvinar consequat. Nunc et lacus leo. Quisque tempor sit amet metus
            at mattis.
          </p>
        </Col>
        <Col>
          <h3>Location</h3>
          <p>
            Jl. Pintu Satu Senayan, Gelora, Tanahabang, Kota Jakarta Pusat,
            Daerah Khusus Ibukota Jakarta 10270
          </p>
        </Col>
      </Row>
    </Container>
  );
}
