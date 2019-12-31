import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Row,
  Container,
  Col,
  FormGroup,
  Input,
  Form,
  Card,
  CardHeader
} from "reactstrap";
import {
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import "../App.css";
import Header from "../header/header";
import Footer from "../footer";
import EventMap from "../mapping/eventhome";

class AddEvent extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1
            style={{ textAlign: "left", color: "#FF5555", fontWeight: "700" }}
          >
            Add Event
          </h1>
          <br></br>
          <br></br>
          <div className="form">
            <form>
              <TextField label="Title event" />
              <FormControl>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>Sport</MenuItem>
                  <MenuItem value={20}>Music</MenuItem>
                  <MenuItem value={30}>Science</MenuItem>
                  <MenuItem value={40}>Programing</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Upload Image" />{" "}
              <TextField
                id="datetime-local"
                label="Start Time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="datetime-local"
                label="End Time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField label="Price" />
              <TextField label="Address Event" />
              <TextField label="URL Map" />
              <TextField label="Telp No" />
              <TextField label="EO Email" />
              <TextField label="Event Description" />
            </form>
          </div>
          <br></br>
          <br></br>
          <div className="submit-button">Publish</div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default AddEvent;
