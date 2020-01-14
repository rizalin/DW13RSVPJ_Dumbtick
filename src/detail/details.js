import React, { Component } from "react";
import { connect } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Container, Col } from "reactstrap";
import { IconButton } from "@material-ui/core";
import moment from "moment"
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import "../App.css";
import { addOrder } from "../_actions/order"
import ModalWarning from "./modal"



const userId = localStorage.getItem("id")
const isLogin = localStorage.getItem("isLogin")

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      quantity: 0,
      totalPrice: 0
    };
  }


  buttonInc = () => {
    this.setState({ num: this.state.num + 1 })
    document.getElementById("num").value = this.state.num;
  }

  buttonDec = () => {
    this.setState({ num: this.state.num - 1 })
    document.getElementById("num").value = this.state.num;
    if (this.state.num <= 1) {
      this.setState({ num: 1 })
    }
  }

  handleAddOrder = () => {
    if (isLogin == "true") {
      const order = {
        event_id: this.props.id,
        quantity: this.state.num,
        totalPrice: this.state.num * this.props.price,
        status: "pending",
        ordered_by: userId
      };
      this.props.addOrder(order);
      window.location = "/payment"
    } else {
      alert("Anda belum Login")
    }
  }



  render() {
    let times = this.state.num
    console.log(times)
    const cost = this.props.price
    let price = times * cost



    const startTime = new Date(this.props.startTime);
    const endTime = new Date(this.props.endTime)
    const startDate = moment(startTime).format("DD MMM YYYY");
    const endDate = moment(endTime).format("DD MMM YYYY");
    const startTimes = moment(startTime).format("kk:mm");
    const endTimes = moment(endTime).format("kk:mm ")
    return (
      <Container>
        <br></br>
        <br></br>
        <div className="box">
          <img
            src={`${this.props.img}`}
            width="100%"
            height="600vh"
            alt="pamflet"
          />
          <div className="text-box">
            <Row className="justify-content-between">
              <h1>{this.props.title}</h1>
              <h2>Rp.{price}</h2>
            </Row>
            <Row className="justify-content-between">
              <Col style={{ maxWidth: "fitContent" }}>
                <h4>{this.props.category}</h4>
              </Col>
              <Col>
                <Row>
                  <IconButton aria-label="min" onClick={this.buttonDec}>
                    <RemoveIcon />
                  </IconButton>
                  <input
                    id="num"
                    type="number"
                    min={1}
                    value={`${this.state.num}`}
                    style={{
                      maxWidth: "23px",
                      textAlign: "center",
                      border: "none",
                      backgroundColor: "#F4E1E1"
                    }}
                  />
                  <IconButton aria-label="add" onClick={this.buttonInc}>
                    <AddIcon />
                  </IconButton>
                  <Button onClick={this.handleAddOrder}>Buy</Button>{" "}
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
                  {startTimes} - {endTimes}
                </p>
              </Col>
              <Col style={{ padding: "0 30px" }}>
                <h3>Contact Person</h3>
                <p>
                  <ContactMailIcon style={{ marginRight: "10px" }} />
                  {this.props.name}
                </p>
                <p>
                  <PhoneIcon style={{ marginRight: "10px" }} />
                  {this.props.phone}
                </p>
                <p>
                  <MailOutlineIcon style={{ marginRight: "10px" }} />
                  {this.props.email}
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <br></br>
        <br></br>
        <Row className="detail">
          <Col style={{ borderRight: 'solid 2px grey' }}>
            <h3>Event Description</h3>
            <p>
              {this.props.desc}
            </p>
          </Col>
          <Col>
            <div style={{ padding: '0px 20px' }}>
              <h3>Location</h3>
              <p>
                {this.props.address}
              </p>
              <div className="frame">
                <iframe src={`${this.props.map}`} width="450" height="300" style={{ border: 'solid 5px grey' }}></iframe>
              </div>
              <br></br>
              <h3>Share</h3>
              <div className="share-button">
                <Button>Facebook</Button>
                <Button>Twitter</Button>
                <Button>Copy Link</Button>
              </div>
              <br></br>
              <br></br>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    order: state.order
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addOrder: order => dispatch(addOrder(order))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
