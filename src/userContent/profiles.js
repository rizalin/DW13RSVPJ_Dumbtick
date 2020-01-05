import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Row,
  Container,
  Col,
} from "reactstrap";
import "../App.css";
import EventMap from "../mapping/eventhome";
import FavoriteMap from "../mapping/favoriteMap";



export default function Profiles(props) {
  return (
    <div className="App">
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
            <h1 style={{ textAlign: "left" }}>{props.name}</h1>
            <h3> {props.birth}</h3>
            <h3>{props.tel}</h3>
            <h3>{props.email}</h3>
          </Col>
          <Col sm={2}>
            <Button size="sm" href="/editProfile">Edit Profile</Button>
          </Col>
          <Col sm={4}>
            <img
              src={`${props.img}`}
              width="100%"
              height="350vh"
              style={{ borderRadius: '50%' }}
            />
          </Col>
        </Row>
        <br></br>
        <br></br>
        <h1 style={{ textAlign: "left", color: "#FF5555", fontWeight: "700" }}>Favorites</h1>
        <br></br>
        <br></br>
        <FavoriteMap />
      </Container>
    </div>
  )
}
