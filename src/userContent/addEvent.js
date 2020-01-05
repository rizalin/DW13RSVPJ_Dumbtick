import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
} from "reactstrap";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import { connect } from "react-redux"

import { addEvent } from "../_actions/event"
import "../App.css";
import Header from "../header/header";
import Footer from "../footer";
import { getToken } from "../_config/bearer";


const userId = localStorage.getItem("id")
const login = localStorage.getItem("isLogin")
const token = localStorage.getItem('token')

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category_id: 0,
      img: '',
      startTime: '',
      endTime: '',
      price: 0,
      address: '',
      urlMaps: '',
      description: '',
      create_by: ""
    };
  }


  handleAddEvent = () => {
    const event = {
      title: this.state.title,
      category_id: this.state.category_id,
      address: this.state.address,
      img: this.state.img,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      price: this.state.price,
      address: this.state.address,
      urlMaps: this.state.urlMaps,
      description: this.state.description,
      create_by: userId
    };
    this.props.addEvent(event);
    alert("Event berhasil ditambahkan")
  };

  render() {
    getToken(token)
    if (login == "true") {
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
                <TextField label="Title event" value={this.state.title} onChange={e => {
                  this.setState({
                    title: e.target.value
                  });
                }} />
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.category_id}
                    onChange={e => {
                      this.setState({
                        category_id: e.target.value
                      });
                    }}
                  >
                    <MenuItem value={1}>Sport</MenuItem>
                    <MenuItem value={2}>Music</MenuItem>
                    <MenuItem value={3}>Science</MenuItem>
                    <MenuItem value={4}>Programing</MenuItem>
                  </Select>
                </FormControl>
                <TextField label="Upload Image" value={this.state.img}
                  onChange={e => {
                    this.setState({
                      img: e.target.value
                    });
                  }} />{" "}
                <TextField
                  id="datetime-local"
                  label="Start Time"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  InputLabelProps={{
                    shrink: true
                  }}
                  value={this.state.startTime}
                  onChange={e => {
                    this.setState({
                      startTime: e.target.value
                    });
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
                  value={this.state.endTime}
                  onChange={e => {
                    this.setState({
                      endTime: e.target.value
                    });
                  }}
                />
                <TextField label="Price" value={this.state.price} onChange={e => {
                  this.setState({
                    price: e.target.value
                  });
                }} />
                <TextField label="Address Event" value={this.state.address} onChange={e => {
                  this.setState({
                    address: e.target.value
                  });
                }} />
                <TextField label="URL Map" value={this.state.urlMaps} onChange={e => {
                  this.setState({
                    urlMaps: e.target.value
                  });
                }} />
                <TextField label="Telp No" />
                <TextField label="EO Email" />
                <TextField label="Event Description" value={this.state.description} onChange={e => {
                  this.setState({
                    description: e.target.value
                  });
                }} />
              </form>
            </div>
            <br></br>
            <br></br>
            <div className="submit-button"><a onClick={this.handleAddEvent} href="">Publish</a></div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Container>
          <Footer />
        </div>
      );
    } else {
      window.location = "/"
    }
  }
}


const mapStateToProps = state => {
  return {
    event: state.event
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addEvent: event => dispatch(addEvent(event))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
