import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Row,
  Container,
  FormGroup,
  Input,
  Form,
  Card,
  CardHeader
} from "reactstrap";
import {
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Chip
} from "@material-ui/core";
import EventMap from "../mapping/eventhome";
import CatMap from "../mapping/catmap";

export default function Body(props) {
  return (
    <Container>
      <br></br>
      <br></br>
      <h1>{props.name}</h1>
      <CatMap />
    </Container>
  );
}
