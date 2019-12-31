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
import "./App.css";
import CatButton from "./list/homelist";
import EventList from "./list/eventlist";
import EventMap from "./mapping/eventhome";
import EventNow from "./mapping/eventnow";

class Body extends Component {
  render() {
    return (
      <Container>
        <br></br>
        <br></br>
        <Form inline>
          <FormGroup style={{ width: "95%" }}>
            <Input
              name="search"
              id="exampleEmail"
              placeholder="Cari..."
              style={{ width: "100%" }}
            />
          </FormGroup>
          <Button>Cari</Button>
        </Form>
        <br></br>
        <br></br>
        <h1 style={{ textAlign: "left" }}>Category</h1>
        <br></br>
        <CatButton />
        <br></br>
        <br></br>
        <br></br>
        <h1>Today</h1>
        <EventMap />
        <h1>Upcoming Event</h1>
        <EventMap />
      </Container>
    );
  }
}

export default Body;
