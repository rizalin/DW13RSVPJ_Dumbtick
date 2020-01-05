import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
} from "reactstrap";
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
