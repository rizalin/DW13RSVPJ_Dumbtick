import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Container, Col } from "reactstrap";
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

export default function Detail(props) {
  const dates = new Date(props.time);
  const date = moment(dates).format("DD MMM YYYY");
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
            <h1>{props.title}</h1>
            <h2>{props.price}</h2>
          </Row>
          <Row className="justify-content-between">
            <Col style={{ maxWidth: "fitContent" }}>
              <h4>{props.category}</h4>
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
                {startDate} - {endDate}
              </p>
              <p>
                <ScheduleIcon style={{ marginRight: "10px" }} />
                {startTime} - {endTime}
              </p>
            </Col>
            <Col style={{ padding: "0 30px" }}>
              <h3>Contact Person</h3>
              <p>
                <ContactMailIcon style={{ marginRight: "10px" }} />
                {props.name}
              </p>
              <p>
                <PhoneIcon style={{ marginRight: "10px" }} />
                {props.phone}
              </p>
              <p>
                <MailOutlineIcon style={{ marginRight: "10px" }} />
                {props.email}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <br></br>
      <br></br>
    </Container>
  );
}
